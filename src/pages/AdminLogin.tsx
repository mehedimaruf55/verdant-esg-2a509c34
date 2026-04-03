import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Leaf, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signIn, isAdmin, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // If already admin, redirect
  if (user && isAdmin) {
    navigate("/admin", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setSubmitting(true);
    const { error } = await signIn(email.trim(), password);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      // Wait a tick for admin check
      setTimeout(() => navigate("/admin"), 500);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-grey-light px-5">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Leaf className="text-brand-green-dark" size={28} />
          <span className="font-heading font-bold text-xl text-brand-black">Verdant ESG</span>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
          <h1 className="text-xl font-heading font-bold text-brand-black mb-1">Admin Login</h1>
          <p className="text-sm text-brand-grey mb-6">Sign in to manage insights and content.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@verdant-esg.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-brand-green-dark hover:bg-brand-green-dark/90 text-white" disabled={submitting}>
              <LogIn size={16} className="mr-2" />
              {submitting ? "Signing in…" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
