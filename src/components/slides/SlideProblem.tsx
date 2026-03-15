import SlideLayout from "@/components/SlideLayout";
import blob3 from "@/assets/blob-decoration-3.png";

const SlideProblem = () => {
  return (
    <SlideLayout slideNumber={2} totalSlides={7}>
      <img src={blob3} alt="" className="absolute bottom-0 right-0 w-64 opacity-40 pointer-events-none" />

      <div className="slide-number mb-4">Problem</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">
        Jaki problem rozwiązuje
        <span className="gradient-text"> Social Surfer</span>?
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="gradient-text font-display font-semibold text-lg mb-2">
</div>
            <p className="text-muted-foreground leading-relaxed">
              W internecie istnieją setki społeczności o wspólnych zainteresowaniach, które nigdy nie mają okazji spotkać się na żywo i spędzić razem czas.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="gradient-text font-display font-semibold text-lg mb-2">Brak kreatywności</div>
            <p className="text-muted-foreground leading-relaxed">
              Istniejące platformy do poznawania ludzi nie oferują kreatywnych narzędzi i nie zawężają puli potencjalnych znajomości do osób o wspólnych pasjach.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="gradient-text font-display font-semibold text-lg mb-2">Toksyczny model</div>
            <p className="text-muted-foreground leading-relaxed">
              Konkurencyjne aplikacje opierają model biznesowy na nieosiągalnych standardach, aby użytkownicy uzależniali się i ciągle wracali.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-64 h-64 rounded-3xl overflow-hidden" style={{ background: "var(--slide-gradient-bar)" }}>
            <div className="w-full h-full flex items-center justify-center text-white/80 text-6xl font-display font-bold">?</div>
          </div>
        </div>
      </div>
    </SlideLayout>);
};

export default SlideProblem;