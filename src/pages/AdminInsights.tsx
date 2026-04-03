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
import { Leaf, Plus, Pencil, Trash2, LogOut, Eye, ArrowLeft } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";
import AdminProjects from "./AdminProjects";
import AdminSubmissions from "./AdminSubmissions";

type Insight = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  cover_image_url: string | null;
  author: string;
  tags: string[] | null;
  reading_time_minutes: number | null;
  published: boolean;
  featured: boolean;
  published_date: string;
};

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  category: "",
  cover_image_url: "",
  author: "Verdant ESG",
  tags: "",
  reading_time_minutes: 5,
  published: false,
  featured: false,
  published_date: new Date().toISOString().split("T")[0],
};

const categories = ["ESG", "Net Zero", "Built Environment", "Carbon Credits", "Climate Resilience", "Biodiversity"];

const AdminInsights = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [insights, setInsights] = useState<Insight[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"insights" | "projects" | "submissions">("insights");

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login", { replace: true });
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchInsights = async () => {
    const { data } = await supabase
      .from("insights")
      .select("*")
      .order("published_date", { ascending: false });
    if (data) setInsights(data);
  };

  useEffect(() => {
    if (isAdmin) fetchInsights();
  }, [isAdmin]);

  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setCoverFile(null);
    setDialogOpen(true);
  };

  const openEdit = (insight: Insight) => {
    setEditing(insight.id);
    setForm({
      title: insight.title,
      slug: insight.slug,
      excerpt: insight.excerpt,
      body: insight.body,
      category: insight.category,
      cover_image_url: insight.cover_image_url || "",
      author: insight.author,
      tags: insight.tags?.join(", ") || "",
      reading_time_minutes: insight.reading_time_minutes || 5,
      published: insight.published,
      featured: insight.featured,
      published_date: insight.published_date,
    });
    setCoverFile(null);
    setDialogOpen(true);
  };

  const uploadCover = async (file: File): Promise<string> => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("insight-covers").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("insight-covers").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.excerpt.trim() || !form.category) {
      toast({ title: "Missing fields", description: "Title, excerpt, and category are required.", variant: "destructive" });
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
        excerpt: form.excerpt.trim(),
        body: form.body,
        category: form.category,
        cover_image_url: coverUrl || null,
        author: form.author.trim() || "Verdant ESG",
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        reading_time_minutes: form.reading_time_minutes,
        published: form.published,
        featured: form.featured,
        published_date: form.published_date,
      };

      if (editing) {
        const { error } = await supabase.from("insights").update(payload).eq("id", editing);
        if (error) throw error;
        toast({ title: "Updated", description: "Insight updated successfully." });
      } else {
        const { error } = await supabase.from("insights").insert(payload);
        if (error) throw error;
        toast({ title: "Created", description: "New insight published." });
      }

      setDialogOpen(false);
      fetchInsights();
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this insight?")) return;
    const { error } = await supabase.from("insights").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      fetchInsights();
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading…</div>;

  return (
    <div className="min-h-screen bg-brand-grey-light">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="text-brand-green-dark" size={22} />
            <span className="font-heading font-bold text-lg text-brand-black">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate("/")} className="gap-1.5">
              <ArrowLeft size={14} /> Back to Site
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut} className="gap-1.5 text-brand-grey">
              <LogOut size={14} /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-5 pt-6">
        <div className="flex gap-1 bg-white rounded-lg border border-border p-1 w-fit">
          <button
            onClick={() => setActiveTab("insights")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "insights" ? "bg-brand-green-dark text-white" : "text-brand-grey hover:text-brand-black"}`}
          >
            Insights
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "projects" ? "bg-brand-green-dark text-white" : "text-brand-grey hover:text-brand-black"}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("submissions")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "submissions" ? "bg-brand-green-dark text-white" : "text-brand-grey hover:text-brand-black"}`}
          >
            Submissions
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-5 py-8">
        {activeTab === "projects" ? (
          <AdminProjects />
        ) : activeTab === "submissions" ? (
          <AdminSubmissions />
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-heading font-bold text-brand-black">Insights</h1>
              <Button onClick={openCreate} className="bg-brand-green-dark hover:bg-brand-green-dark/90 text-white gap-1.5">
                <Plus size={16} /> New Insight
              </Button>
            </div>

            <div className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-brand-grey-light/50">
                      <th className="text-left px-4 py-3 font-semibold text-brand-grey">Title</th>
                      <th className="text-left px-4 py-3 font-semibold text-brand-grey">Category</th>
                      <th className="text-left px-4 py-3 font-semibold text-brand-grey">Date</th>
                      <th className="text-center px-4 py-3 font-semibold text-brand-grey">Published</th>
                      <th className="text-center px-4 py-3 font-semibold text-brand-grey">Featured</th>
                      <th className="text-right px-4 py-3 font-semibold text-brand-grey">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {insights.map((insight) => (
                      <tr key={insight.id} className="border-b border-border last:border-0 hover:bg-brand-grey-light/30 transition-colors">
                        <td className="px-4 py-3 font-medium text-brand-black max-w-[250px] truncate">{insight.title}</td>
                        <td className="px-4 py-3 text-brand-grey">{insight.category}</td>
                        <td className="px-4 py-3 text-brand-grey">{insight.published_date}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block w-2 h-2 rounded-full ${insight.published ? "bg-green-500" : "bg-gray-300"}`} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block w-2 h-2 rounded-full ${insight.featured ? "bg-amber-500" : "bg-gray-300"}`} />
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="sm" onClick={() => navigate(`/insights/${insight.slug}`)} className="h-8 w-8 p-0">
                              <Eye size={14} />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => openEdit(insight)} className="h-8 w-8 p-0">
                              <Pencil size={14} />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(insight.id)} className="h-8 w-8 p-0 text-red-500 hover:text-red-700">
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {insights.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-12 text-center text-brand-grey">
                          No insights yet. Click "New Insight" to create one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Edit/Create Dialog */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-heading">{editing ? "Edit Insight" : "New Insight"}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <div>
                    <Label>Title *</Label>
                    <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })} placeholder="Insight title" />
                  </div>
                  <div>
                    <Label>Slug</Label>
                    <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated-from-title" />
                  </div>
                  <div>
                    <Label>Excerpt *</Label>
                    <Textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Short summary…" rows={2} />
                  </div>
                  <div>
                    <Label>Body</Label>
                    <RichTextEditor content={form.body} onChange={(html) => setForm({ ...form, body: html })} bucket="insight-covers" placeholder="Write your article content…" />
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
                      <Label>Author</Label>
                      <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Verdant ESG" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Published Date</Label>
                      <Input type="date" value={form.published_date} onChange={(e) => setForm({ ...form, published_date: e.target.value })} />
                    </div>
                    <div>
                      <Label>Reading Time (mins)</Label>
                      <Input type="number" min={1} value={form.reading_time_minutes} onChange={(e) => setForm({ ...form, reading_time_minutes: parseInt(e.target.value) || 5 })} />
                    </div>
                  </div>
                  <div>
                    <Label>Tags (comma-separated)</Label>
                    <Input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="sustainability, ESG, net-zero" />
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
        )}
      </main>
    </div>
  );
};

export default AdminInsights;
