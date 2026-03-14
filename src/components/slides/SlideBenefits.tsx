import SlideLayout from "@/components/SlideLayout";
import benefitsImg from "@/assets/benefits-illustration.jpg";
import { TrendingUp, Heart, Star } from "lucide-react";

const SlideBenefits = () => {
  return (
    <SlideLayout slideNumber={5} totalSlides={7}>
      <div className="slide-number mb-6">Korzyści</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12">
        Korzyści dla <span className="text-slide-warm">twórców</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card p-8 flex flex-col items-center text-center gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-16 h-16 rounded-2xl bg-slide-accent/10 flex items-center justify-center mb-2">
            <TrendingUp className="w-8 h-8 text-slide-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Wzrost popularności</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Przyciągnij nowych widzów zachęcając obecnych użytkowników do budowania społeczności wokół konkretnych zainteresowań.
          </p>
        </div>

        <div className="glass-card p-8 flex flex-col items-center text-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-16 h-16 rounded-2xl bg-slide-warm/10 flex items-center justify-center mb-2">
            <Heart className="w-8 h-8 text-slide-warm" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Lojalni patroni</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Udane relacje i wspólnie spędzony czas motywują użytkowników do zostania wspierającymi patronami twojego kanału.
          </p>
        </div>

        <div className="glass-card p-8 flex flex-col items-center text-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="w-16 h-16 rounded-2xl bg-slide-accent/10 flex items-center justify-center mb-2">
            <Star className="w-8 h-8 text-slide-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Unikalna wartość</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Oferuj coś, czego nie ma żaden inny twórca — prawdziwą przestrzeń do spotkań i budowania relacji między widzami.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={benefitsImg} alt="Benefits" className="rounded-2xl max-w-xs w-full opacity-50" />
      </div>
    </SlideLayout>
  );
};

export default SlideBenefits;
