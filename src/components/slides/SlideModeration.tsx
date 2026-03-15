import SlideLayout from "@/components/SlideLayout";
import blob1 from "@/assets/blob-decoration-1.png";
import { ShieldCheck, Flag, Eye } from "lucide-react";

const SlideModeration = () => {
  return (
    <SlideLayout slideNumber={6} totalSlides={7}>
      <img src={blob1} alt="" className="absolute bottom-0 right-0 w-56 opacity-30 pointer-events-none" />

      <div className="slide-number mb-4">FAQ</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">Moderacja i bezpieczeństwo 
        <span className="gradient-text">bezpieczeństwo</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-5 glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1" style={{ background: "var(--slide-gradient-bar)" }}>
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Automatyczna weryfikacja</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wykorzystujemy standardowe rozwiązania moderacyjne od Google. Wszystkie publiczne wiadomości i zdjęcia są automatycznie skanowane pod kątem niepożądanych treści.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 glass-card p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1" style={{ background: "linear-gradient(135deg, hsl(310 80% 55%), hsl(340 85% 55%))" }}>
              <Flag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">System zgłoszeń</h3>
              <p className="text-muted-foreground leading-relaxed">
                Jeśli coś umknie automatycznej weryfikacji, użytkownicy mogą zgłosić niepożądane zachowania. Treść zostanie zawieszona i poddana dodatkowej weryfikacji.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 glass-card p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1" style={{ background: "linear-gradient(135deg, hsl(240 70% 55%), hsl(270 80% 60%))" }}>
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Transparentność</h3>
              <p className="text-muted-foreground leading-relaxed">
                Priorytetem jest bezpieczeństwo naszych użytkowników. Stale rozwijamy i udoskonalamy nasze mechanizmy ochrony społeczności.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-56 h-56 rounded-3xl flex items-center justify-center" style={{ background: "var(--slide-gradient-bar)" }}>
            <ShieldCheck className="w-20 h-20 text-white" />
          </div>
        </div>
      </div>
    </SlideLayout>);

};

export default SlideModeration;