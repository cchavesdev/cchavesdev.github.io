import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "I Wasted Months Tracking My Money the Hard Way. Then I Built Slothi, My Own AI Agent.",
    excerpt: "I got tired of juggling cash, cards, and mobile payments across multiple apps. So I built an AI assistant that understands voice notes, receipt photos, and screenshots — all through WhatsApp.",
    date: "Apr 2026",
    slug: "SlothiAIAgent",
    image: "/images/slothi.min.png",
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
            <Link
              key={i}
              to={`/blog/${post.slug}`}
              className="fade-up group block rounded-xl border border-border bg-card hover:border-accent/40 transition-colors duration-300 overflow-hidden"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-6">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
