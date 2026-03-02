import { MapPin, Bike, Coffee, Wrench } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Costa Rica based" },
  { icon: Bike, label: "Mountain biker" },
  { icon: Coffee, label: "Coffee lover" },
  { icon: Wrench, label: "Builder of things" },
];

const skillGroups = [
  { label: "Frontend", skills: "JavaScript, Angular, React, SCSS, Bootstrap" },
  { label: "Backend", skills: ".NET, C#, REST API, SQL Server, MySQL, Firebase" },
  { label: "Tools", skills: "Git, Jira, Azure, AWS, Agile, Scrum, Figma" },
  { label: "AI", skills: "Augment AI, Claude Code, MCP, AWS Bedrock" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="fade-up">
          <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Software Engineer skilled at architecting and connecting diverse platforms, services, and APIs to deliver seamless end-to-end workflows — from CI/CD pipelines and cloud environments to AI-powered tooling and test reporting systems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Known for rapidly adopting emerging technologies and consistently translating them into practical, high-impact solutions across every stage of the software lifecycle. When I'm not writing code, you'll find me exploring mountain trails on my bike or brewing the perfect cup of Costa Rican coffee.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon size={16} className="text-accent" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">
                  {group.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{group.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
