import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const posts = import.meta.glob("../posts/*.md", { query: "?raw", import: "default" });

function stripFrontmatter(content: string): string {
  return content.replace(/^---[\s\S]*?---\r?\n/, "");
}

type Lang = "en" | "es";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lang, setLang] = useState<Lang>("en");
  const [content, setContent] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [hasSpanish, setHasSpanish] = useState(false);

  useEffect(() => {
    const esKey = `../posts/${slug}.es.md`;
    setHasSpanish(esKey in posts);
  }, [slug]);

  useEffect(() => {
    const key = lang === "es" ? `../posts/${slug}.es.md` : `../posts/${slug}.md`;
    const loader = posts[key];
    if (!loader) {
      if (lang === "es") {
        // fall back to English if Spanish file is missing
        setLang("en");
        return;
      }
      setNotFound(true);
      return;
    }
    setContent(null);
    loader().then((raw) => setContent(stripFrontmatter(raw as string)));
  }, [slug, lang]);

  if (notFound) {
    return (
      <div className="container mx-auto max-w-3xl px-6 py-24">
        <p className="text-muted-foreground mb-4">Post not found.</p>
        <Link to="/#blog" className="text-sm text-accent hover:underline">← Back to blog</Link>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="container mx-auto max-w-3xl px-6 py-24">
      <div className="flex items-center justify-between mb-10">
        <Link to="/#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back
        </Link>
        {hasSpanish && (
          <div className="flex items-center gap-1 text-sm border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1.5 transition-colors ${lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              ES
            </button>
          </div>
        )}
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
