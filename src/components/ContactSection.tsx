import { useEffect } from "react";
import { Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("maqljkge");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent! I'll get back to you soon.");
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-xl">
        <div className="fade-up">
          <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground mb-10">
            Have a project in mind or just want to say hello? Drop me a message.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                placeholder="your@email.com"
              />
              <ValidationError field="email" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition resize-none"
                placeholder="What's on your mind?"
              />
              <ValidationError field="message" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={14} />
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
            <a
              href="https://github.com/carloschavesz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/carloschavesz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
