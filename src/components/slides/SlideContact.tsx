import SlideLayout from "@/components/SlideLayout";
import blob1 from "@/assets/blob-decoration-1.png";
import { Mail, Phone, MessageCircle } from "lucide-react";

const SlideContact = () => {
  return (
    <SlideLayout slideNumber={8} totalSlides={8}>
      <img src={blob1} alt="" className="absolute top-10 right-0 w-64 opacity-35 pointer-events-none" />

      <div className="slide-number mb-4">Kontakt</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">
        Skontaktuj się z <span className="gradient-text">nami</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="glass-card p-8 flex flex-col gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">Email</p>
              <a
                href="mailto:maciej.pancewicz@socialsurfer.eu"
                className="font-display text-base md:text-lg text-foreground hover:text-primary transition-colors break-all"
              >
                maciej.pancewicz@socialsurfer.eu
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">Telefon</p>
              <a href="tel:+48505870491" className="font-display text-lg text-foreground hover:text-accent transition-colors">
                505 870 491
              </a>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col items-start justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--slide-gradient-bar)" }}>
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Zapraszamy do kontaktu</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Chętnie opowiemy więcej o SocialSurfer i odpowiemy na wszystkie pytania dotyczące współpracy.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideContact;
