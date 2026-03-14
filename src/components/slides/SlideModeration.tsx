import SlideLayout from "@/components/SlideLayout";
import moderationImg from "@/assets/moderation-illustration.jpg";
import { ShieldCheck, Flag, Eye } from "lucide-react";

const SlideModeration = () => {
  return (
    <SlideLayout slideNumber={6} totalSlides={7}>
      <div className="slide-number mb-6">FAQ</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12">
        Moderacja i <span className="text-slide-accent">bezpieczeństwo</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-5 glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-xl bg-slide-accent/10 flex items-center justify-center shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6 text-slide-accent" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Automatyczna weryfikacja</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wykorzystujemy standardowe rozwiązania moderacyjne od Google. Wszystkie publiczne wiadomości i zdjęcia są automatycznie skanowane pod kątem niepożądanych treści.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 glass-card p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 rounded-xl bg-slide-warm/10 flex items-center justify-center shrink-0 mt-1">
              <Flag className="w-6 h-6 text-slide-warm" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">System zgłoszeń</h3>
              <p className="text-muted-foreground leading-relaxed">
                Jeśli coś umknie automatycznej weryfikacji, użytkownicy mogą zgłosić niepożądane zachowania. Treść zostanie zawieszona i poddana dodatkowej weryfikacji.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 glass-card p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="w-12 h-12 rounded-xl bg-slide-accent/10 flex items-center justify-center shrink-0 mt-1">
              <Eye className="w-6 h-6 text-slide-accent" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Transparentność</h3>
              <p className="text-muted-foreground leading-relaxed">
                Priorytetem jest bezpieczeństwo naszych użytkowników. Stale rozwijamy i udoskonalamy nasze mechanizmy ochrony społeczności.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center animate-slide-in-right">
          <img src={moderationImg} alt="Moderation" className="rounded-2xl max-w-sm w-full glow-accent" />
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideModeration;
