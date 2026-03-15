import SlideLayout from "@/components/SlideLayout";
import blob3 from "@/assets/blob-decoration-3.png";
import { TrendingUp, Heart, Star } from "lucide-react";

const SlideBenefits = () => {
  return (
    <SlideLayout slideNumber={5} totalSlides={7}>
      <img src={blob3} alt="" className="absolute top-16 right-0 w-56 opacity-30 pointer-events-none" />

      <div className="slide-number mb-4">Korzyści</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">Korzyści dla twórców
        <span className="gradient-text">twórców</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card p-8 flex flex-col items-center text-center gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "var(--slide-gradient-bar)" }}>
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Wzrost popularności</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">

          </p>
        </div>

        <div className="glass-card p-8 flex flex-col items-center text-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(310 80% 55%), hsl(340 85% 55%))" }}>
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Lojalni patroni</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Udane relacje i wspólnie spędzony czas motywują użytkowników do zostania wspierającymi patronami twojego kanału.
          </p>
        </div>

        <div className="glass-card p-8 flex flex-col items-center text-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(240 70% 55%), hsl(270 80% 60%))" }}>
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Unikalna wartość</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Oferuj coś, czego nie ma żaden inny twórca — prawdziwą przestrzeń do spotkań i budowania relacji między widzami.
          </p>
        </div>
      </div>
    </SlideLayout>);

};

export default SlideBenefits;