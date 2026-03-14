import SlideLayout from "@/components/SlideLayout";
import problemImg from "@/assets/problem-illustration.jpg";

const SlideProblem = () => {
  return (
    <SlideLayout slideNumber={2} totalSlides={7}>
      <div className="slide-number mb-6">Problem</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12">
        Jaki problem rozwiązuje
        <span className="text-slide-accent"> Social Surfer</span>?
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-slide-accent font-display font-semibold text-lg mb-2">Izolacja społeczna</div>
            <p className="text-muted-foreground leading-relaxed">
              W internecie istnieją setki społeczności o wspólnych zainteresowaniach, które nigdy nie mają okazji spotkać się na żywo i spędzić razem czas.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-slide-warm font-display font-semibold text-lg mb-2">Brak kreatywności</div>
            <p className="text-muted-foreground leading-relaxed">
              Istniejące platformy do poznawania ludzi nie oferują kreatywnych narzędzi i nie zawężają puli potencjalnych znajomości do osób o wspólnych pasjach.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-slide-accent font-display font-semibold text-lg mb-2">Toksyczny model</div>
            <p className="text-muted-foreground leading-relaxed">
              Konkurencyjne aplikacje opierają model biznesowy na nieosiągalnych standardach, aby użytkownicy uzależniali się i ciągle wracali.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img src={problemImg} alt="Problem illustration" className="rounded-2xl max-w-sm w-full glow-accent" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideProblem;
