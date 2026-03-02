const experiences = [
  {
    company: "3Pillar Global — TetraScience",
    location: "USA (Remote)",
    role: "Software Engineer",
    period: "2024 — Present",
    tech: ".NET 10, GitHub Actions, AWS, ReqnRoll, Selenium, Gherkin, Report Portal, Jira, Zephyr, Augment AI, Claude Code",
    bullets: [
      "Designed and implemented an end-to-end automated test framework using C#, ReqnRoll, and Gherkin, achieving 80–90% test coverage and dramatically reducing manual testing effort.",
      "Configured GitHub Actions automation environment enabling test suites to run automatically on schedule without manual intervention.",
      "Engineered an AI-powered step within GitHub Actions that leverages a Report Portal MCP integration to autonomously research failed test cases, surfacing root-cause analysis and actionable fix suggestions.",
    ],
  },
  {
    company: "3Pillar Global — Dirigo Valley Systems",
    location: "USA (Remote)",
    role: "Full Stack Software Engineer",
    period: "2019 — 2024",
    tech: "React JS, .NET Core 6, .NET Framework 4.5, C#, Entity Framework, SQL Server, Azure, CI/CD, SCSS, Bootstrap",
    bullets: [
      "Developed and maintained a .NET C# CMS platform empowering ski resort clients to independently manage their website content and operational data.",
      "Led the full cloud migration of on-premises websites to Microsoft Azure, architecting the complete infrastructure including App Services, Azure SQL, Blob Storage, and Azure Functions.",
      "Modernized the product by adopting updated frameworks and optimizing cloud resource usage, reducing Azure infrastructure costs while improving performance.",
    ],
  },
  {
    company: "Intel",
    location: "Costa Rica",
    role: "Software Engineer",
    period: "2018 — 2019",
    tech: "ASP.NET, C#, MVC, Entity Framework, SQL Server, JavaScript, AngularJS, Kendo UI, REST, Web API",
    bullets: [
      "Delivered new features across 4 enterprise applications used by senior management for tracking product quality and testing processes.",
      "Collaborated directly with top management in requirements gathering and feature design sessions, ensuring alignment with business needs.",
    ],
  },
  {
    company: "3Pillar Global",
    location: "Costa Rica",
    role: "Software Engineer",
    period: "2017 — 2018",
    tech: "ASP.NET, C#, MVC, Entity Framework, SQL Server, JavaScript, AngularJS, WCF, Bitbucket",
    bullets: [
      "Refactored and improved internal management applications across HR, CRM, and other business domains, enhancing maintainability and performance.",
    ],
  },
  {
    company: "Freelance",
    location: "Costa Rica",
    role: "Frontend Developer",
    period: "2015 — 2017",
    tech: "JavaScript, jQuery, Bootstrap, CSS3, Mobile First",
    bullets: [
      "Built and deployed client websites from agency mockups and self-directed designs, managing the full delivery process from development to hosting configuration.",
    ],
  },
  {
    company: "Universidad de Costa Rica (UCR)",
    location: "Costa Rica",
    role: "Web Developer & Systems Support",
    period: "2013 — 2017",
    tech: "Drupal 7, WordPress, MySQL, Ubuntu Server, Apache",
    bullets: [
      "Administered web, FTP, and proxy servers for university departments, ensuring reliable infrastructure and uptime.",
      "Implemented department-specific web solutions by coordinating directly with department directors.",
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
              <p className="text-sm text-accent mb-1">{exp.company}</p>
              <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {exp.tech.split(", ").slice(0, 6).map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
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
