import { useEffect, useState } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "cloud-deploy-toolkit",
    description: "A CLI toolkit for automating multi-cloud deployments with Terraform and Pulumi.",
    html_url: "#",
    stargazers_count: 42,
    forks_count: 8,
    language: "TypeScript",
    topics: ["cli", "terraform", "devops"],
  },
  {
    id: 2,
    name: "test-forge",
    description: "AI-powered test generation framework for React and Node.js applications.",
    html_url: "#",
    stargazers_count: 128,
    forks_count: 23,
    language: "TypeScript",
    topics: ["testing", "ai", "react"],
  },
  {
    id: 3,
    name: "api-gateway-lite",
    description: "Lightweight API gateway with rate limiting, auth, and request transformation.",
    html_url: "#",
    stargazers_count: 67,
    forks_count: 12,
    language: "Go",
    topics: ["api", "gateway", "microservices"],
  },
  {
    id: 4,
    name: "dashview",
    description: "Real-time monitoring dashboard for cloud infrastructure metrics.",
    html_url: "#",
    stargazers_count: 35,
    forks_count: 5,
    language: "React",
    topics: ["dashboard", "monitoring", "aws"],
  },
];

const GitHubProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);

  useEffect(() => {
    // Replace 'carloschavesz' with actual GitHub username
    fetch("https://api.github.com/users/carloschavesz/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (data.length > 0) setRepos(data.slice(0, 6));
      })
      .catch(() => {
        // Keep fallback
      });
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-12 fade-up">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up group block p-6 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink size={14} className="text-muted-foreground mt-1 shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {repo.description || "No description available."}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {repo.topics.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProjectsSection;
