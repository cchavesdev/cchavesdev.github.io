import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Designing Resilient CI/CD Pipelines for Microservices",
    excerpt: "Lessons learned from migrating a monolith to a distributed system with zero-downtime deployments.",
    date: "Feb 2026",
    href: "#",
  },
  {
    title: "How I Use AI to Write Better Tests",
    excerpt: "A practical guide to integrating LLMs into your test automation workflow without sacrificing reliability.",
    date: "Jan 2026",
    href: "#",
  },
  {
    title: "Infrastructure as Code: Beyond the Basics",
    excerpt: "Advanced Terraform patterns for managing multi-environment cloud setups at scale.",
    date: "Dec 2025",
    href: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-12 fade-up">
          Blog & Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              className="fade-up group block p-6 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors duration-300"
            >
              <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
              <h3 className="font-semibold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                Read more <ArrowRight size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
