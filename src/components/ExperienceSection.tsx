const experiences = [
  {
    company: "Tech Corp",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    bullets: [
      "Led migration of monolithic services to microservices on AWS, reducing deploy times by 60%",
      "Built internal AI tooling for automated code review and test generation",
      "Mentored junior engineers and established team coding standards",
    ],
  },
  {
    company: "Cloud Systems Inc.",
    role: "Full-Stack Developer",
    period: "2019 — 2022",
    bullets: [
      "Developed customer-facing dashboards with React and TypeScript",
      "Designed and maintained CI/CD pipelines using GitHub Actions and Terraform",
      "Implemented automated E2E testing reducing regression bugs by 40%",
    ],
  },
  {
    company: "StartupLab",
    role: "Software Developer",
    period: "2017 — 2019",
    bullets: [
      "Built MVP products from concept to launch for early-stage startups",
      "Created RESTful APIs with Node.js and PostgreSQL",
      "Collaborated directly with founders to define product requirements",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-12 fade-up">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="fade-up relative pl-6 border-l-2 border-border">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
              <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-accent mb-3">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                    — {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
