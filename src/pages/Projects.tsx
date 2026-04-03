import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

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
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("projects")
        .select("id, title, slug, description, category, cover_image_url, client, location, year")
        .eq("published", true)
        .order("published_date", { ascending: false });
      if (data) setProjects(data as Project[]);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Our Projects"
        subtitle="Case Studies"
        description="Explore a selection of our recent sustainability projects across the built and corporate environment."
      />

      <section className="py-20 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-brand-green-dark border-t-transparent rounded-full animate-spin" />
            </div>
          ) : projects.length === 0 ? (
            <p className="text-center text-brand-grey py-20">No projects published yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block rounded-3xl border border-border overflow-hidden hover:border-brand-green-dark/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-brand-green-dark/10 via-brand-green-light/10 to-brand-green-dark/5 flex items-center justify-center overflow-hidden">
                      {project.cover_image_url ? (
                        <img src={project.cover_image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <span className="text-6xl font-bold text-brand-green-dark/10">{String(i + 1).padStart(2, "0")}</span>
                      )}
                    </div>
                    <div className="p-6 lg:p-8">
                      <span className="text-[11px] font-bold text-brand-green-dark uppercase tracking-wider bg-brand-green-dark/10 px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-brand-black mt-3 mb-2 group-hover:text-brand-green-dark transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-brand-grey text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-brand-grey">
                          {project.location && (
                            <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                          )}
                          {project.year && (
                            <span className="flex items-center gap-1"><Calendar size={12} /> {project.year}</span>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all">
                          Read More <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
