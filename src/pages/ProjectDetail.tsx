import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

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
  published_date: string;
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      setProject(data as Project | null);
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-green-dark border-t-transparent rounded-full animate-spin" />
        </div>
      </PageLayout>
    );
  }

  if (!project) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <p className="text-brand-grey text-lg">Project not found</p>
          <Link to="/projects" className="text-brand-green-dark font-semibold hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative">
        {project.cover_image_url ? (
          <div className="h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${project.cover_image_url})` }}>
            <div className="absolute inset-0 bg-brand-black/60" />
          </div>
        ) : (
          <div className="h-[50vh] bg-gradient-to-br from-brand-green-dark via-brand-green-dark/80 to-brand-green-light" />
        )}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-5 pb-12 w-full">
            <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {project.category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mt-4">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-brand-green-dark font-semibold text-sm mb-8 hover:underline">
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 mb-10 text-sm text-brand-grey">
            {project.client && (
              <span className="flex items-center gap-1.5"><Building2 size={14} /> {project.client}</span>
            )}
            {project.location && (
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {project.location}</span>
            )}
            {project.year && (
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {project.year}</span>
            )}
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-brand-black prose-p:text-brand-grey prose-a:text-brand-green-dark prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          </motion.article>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectDetail;
