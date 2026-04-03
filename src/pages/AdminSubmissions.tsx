import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Mail, Eye, Archive, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  source: string;
  status: string;
  created_at: string;
};

const AdminSubmissions = () => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selected, setSelected] = useState<Submission | null>(null);

  const fetchSubmissions = async () => {
    const { data } = await supabase
      .from("form_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setSubmissions(data as Submission[]);
  };

  useEffect(() => {
    if (isAdmin) fetchSubmissions();
  }, [isAdmin]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("form_submissions").update({ status }).eq("id", id);
    if (!error) fetchSubmissions();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this submission?")) return;
    const { error } = await supabase.from("form_submissions").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setSelected(null);
      fetchSubmissions();
    }
  };

  const openSubmission = (sub: Submission) => {
    setSelected(sub);
    if (sub.status === "new") {
      updateStatus(sub.id, "read");
    }
  };

  const statusColors: Record<string, string> = {
    new: "bg-blue-500",
    read: "bg-amber-500",
    archived: "bg-gray-400",
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

  const newCount = submissions.filter((s) => s.status === "new").length;

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-heading font-bold text-brand-black">Submissions</h1>
          {newCount > 0 && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{newCount} new</span>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-brand-grey-light/50">
                <th className="text-left px-4 py-3 font-semibold text-brand-grey w-8"></th>
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Email</th>
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Source</th>
                <th className="text-left px-4 py-3 font-semibold text-brand-grey">Date</th>
                <th className="text-right px-4 py-3 font-semibold text-brand-grey">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr
                  key={sub.id}
                  className={`border-b border-border last:border-0 hover:bg-brand-grey-light/30 transition-colors cursor-pointer ${sub.status === "new" ? "font-medium" : ""}`}
                  onClick={() => openSubmission(sub)}
                >
                  <td className="px-4 py-3">
                    <span className={`inline-block w-2 h-2 rounded-full ${statusColors[sub.status] || "bg-gray-300"}`} />
                  </td>
                  <td className="px-4 py-3 text-brand-black">{sub.name}</td>
                  <td className="px-4 py-3 text-brand-grey">{sub.email}</td>
                  <td className="px-4 py-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-grey-light px-2 py-0.5 rounded-full text-brand-grey">{sub.source}</span>
                  </td>
                  <td className="px-4 py-3 text-brand-grey text-xs">{formatDate(sub.created_at)}</td>
                  <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => updateStatus(sub.id, "archived")} className="h-8 w-8 p-0" title="Archive">
                        <Archive size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(sub.id)} className="h-8 w-8 p-0 text-red-500 hover:text-red-700" title="Delete">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {submissions.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-brand-grey">
                    No form submissions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading">Submission from {selected?.name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-brand-grey text-xs uppercase tracking-wider font-bold">Name</span>
                  <p className="text-brand-black">{selected.name}</p>
                </div>
                <div>
                  <span className="text-brand-grey text-xs uppercase tracking-wider font-bold">Email</span>
                  <a href={`mailto:${selected.email}`} className="text-brand-green-dark block hover:underline">{selected.email}</a>
                </div>
                {selected.company && (
                  <div>
                    <span className="text-brand-grey text-xs uppercase tracking-wider font-bold">Company</span>
                    <p className="text-brand-black">{selected.company}</p>
                  </div>
                )}
                {selected.phone && (
                  <div>
                    <span className="text-brand-grey text-xs uppercase tracking-wider font-bold">Phone</span>
                    <p className="text-brand-black">{selected.phone}</p>
                  </div>
                )}
                <div>
                  <span className="text-brand-grey text-xs uppercase tracking-wider font-bold">Source</span>
                  <p className="text-brand-black capitalize">{selected.source}</p>
                </div>
                <div>
                  <span className="text-brand-grey text-xs uppercase tracking-wider font-bold">Date</span>
                  <p className="text-brand-black">{formatDate(selected.created_at)}</p>
                </div>
              </div>
              <div>
                <span className="text-brand-grey text-xs uppercase tracking-wider font-bold">Message</span>
                <p className="text-brand-black mt-1 whitespace-pre-line leading-relaxed">{selected.message}</p>
              </div>
              <div className="flex justify-between pt-2">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => { updateStatus(selected.id, "archived"); setSelected(null); }} className="gap-1.5">
                    <Archive size={14} /> Archive
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(selected.id)} className="gap-1.5 text-red-500 hover:text-red-700">
                    <Trash2 size={14} /> Delete
                  </Button>
                </div>
                <a href={`mailto:${selected.email}`}>
                  <Button size="sm" className="bg-brand-green-dark hover:bg-brand-green-dark/90 text-white gap-1.5">
                    <Mail size={14} /> Reply
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminSubmissions;
