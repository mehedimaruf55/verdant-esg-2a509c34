import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  cover_image_url: string | null;
  client: string | null;
  location: string | null;
  year: string | null;
  featured: boolean;
  published: boolean;
  published_date: string;
};

const emptyForm = {
  title: "",
  slug: "",
  description: "",
  category: "",
  cover_image_url: "",
  client: "",
  location: "",
  year: "",
  published: false,
  featured: false,
  published_date: new Date().toISOString().split("T")[0],
};

const categories = ["Carbon Credits", "Net Zero Carbon", "Built Environment", "Corporate Sustainability", "Climate Resilience", "Biodiversity"];

const AdminProjects = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login", { replace: true });
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchProjects = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("published_date", { ascending: false });
    if (data) setProjects(data as Project[]);
  };

  useEffect(() => {
    if (isAdmin) fetchProjects();
  }, [isAdmin]);

  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setCoverFile(null);
    setDialogOpen(true);
  };

  const openEdit = (project: Project) => {
    setEditing(project.id);
    setForm({
      title: project.title,
      slug: project.slug,
      description: project.description,
      category: project.category,
      cover_image_url: project.cover_image_url || "",
      client: project.client || "",
      location: project.location || "",
      year: project.year || "",
      published: project.published,
      featured: project.featured,
      published_date: project.published_date,
    });
    setCoverFile(null);
    setDialogOpen(true);
  };

  const uploadCover = async (file: File): Promise<string> => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("project-covers").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("project-covers").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.description.trim() || !form.category) {
      toast({ title: "Missing fields", description: "Title, description, and category are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      let coverUrl = form.cover_image_url;
      if (coverFile) {
        coverUrl = await uploadCover(coverFile);
      }

      const slug = form.slug || slugify(form.title);
      const payload = {
        title: form.title.trim(),
        slug,
        description: form.description.trim(),
        category: form.category,
        cover_image_url: coverUrl || null,
        client: form.client.trim() || null,
        location: form.location.trim() || null,
        year: form.year.trim() || null,
        published: form.published,
        featured: form.featured,
        published_date: form.published_date,
      };

      if (editing) {
        const { error } = await supabase.from("projects").update(payload).eq("id", editing);
        if (error) throw error;
        toast({ title: "Updated", description: "Project updated successfully." });
      } else {
        const { error } = await supabase.from("projects").insert(payload);
        if (error) throw error;
        toast({ title: "Created", description: "New project created." });
      }

      setDialogOpen(false);
      fetchProjects();
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      fetchProjects();
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading…</div>;

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading font-bold text-brand-black">Projects</h1>
        <Button onClick={openCreate} className="bg-brand-green-dark hover:bg-brand-green-dark/90 text-white gap-1.5">
          <Plus size={16} /> New Project
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-brand-grey-light/50">
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Client</th>
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Date</th>
                <th className="text-center px-4 py-3 font-semibold text-brand-grey">Published</th>
                <th className="text-right px-4 py-3 font-semibold text-brand-grey">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-border last:border-0 hover:bg-brand-grey-light/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-brand-black max-w-[250px] truncate">{project.title}</td>
                  <td className="px-4 py-3 text-brand-grey">{project.category}</td>
                  <td className="px-4 py-3 text-brand-grey">{project.client || "—"}</td>
                  <td className="px-4 py-3 text-brand-grey">{project.published_date}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block w-2 h-2 rounded-full ${project.published ? "bg-green-500" : "bg-gray-300"}`} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/projects/${project.slug}`)} className="h-8 w-8 p-0">
                        <Eye size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => openEdit(project)} className="h-8 w-8 p-0">
                        <Pencil size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(project.id)} className="h-8 w-8 p-0 text-red-500 hover:text-red-700">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-brand-grey">
                    No projects yet. Click "New Project" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading">{editing ? "Edit Project" : "New Project"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <Label>Title *</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })} placeholder="Project title" />
            </div>
            <div>
              <Label>Slug</Label>
              <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated-from-title" />
            </div>
            <div>
              <Label>Description *</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Project description…" rows={6} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Category *</Label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Client</Label>
                <Input value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="Client name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Location</Label>
                <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="London, UK" />
              </div>
              <div>
                <Label>Year</Label>
                <Input value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} placeholder="2026" />
              </div>
            </div>
            <div>
              <Label>Published Date</Label>
              <Input type="date" value={form.published_date} onChange={(e) => setForm({ ...form, published_date: e.target.value })} />
            </div>
            <div>
              <Label>Cover Image</Label>
              {form.cover_image_url && (
                <img src={form.cover_image_url} alt="" className="w-full h-32 object-cover rounded-lg mb-2" />
              )}
              <Input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} />
                <Label>Published</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={form.featured} onCheckedChange={(v) => setForm({ ...form, featured: v })} />
                <Label>Featured</Label>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSave} disabled={saving} className="bg-brand-green-dark hover:bg-brand-green-dark/90 text-white">
                {saving ? "Saving…" : editing ? "Update" : "Create"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminProjects;
