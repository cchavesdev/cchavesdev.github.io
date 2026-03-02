import { MapPin, Bike, Coffee, Wrench } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Costa Rica based" },
  { icon: Bike, label: "Mountain biker" },
  { icon: Coffee, label: "Coffee lover" },
  { icon: Wrench, label: "Builder of things" },
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
            I'm a software engineer who enjoys turning complex problems into clean, 
            thoughtful solutions. I work across the full stack — from crafting intuitive 
            user interfaces to designing resilient cloud infrastructure and CI/CD pipelines.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            When I'm not writing code, you'll find me exploring mountain trails on my bike, 
            brewing the perfect cup of Costa Rican coffee, or tinkering with side projects 
            that push me to learn something new.
          </p>
          <div className="flex flex-wrap gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon size={16} className="text-accent" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
