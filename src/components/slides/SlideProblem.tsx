import SlideLayout from "@/components/SlideLayout";
import blob3 from "@/assets/blob-decoration-3.png";
import coffee from "@/assets/coffee.png";

const SlideProblem = () => {
  return (
    <SlideLayout slideNumber={2} totalSlides={8}>
      <div className="slide-number mb-4">Problem</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">
        Jaki problem rozwiązuje
        <span className="gradient-text"> Social Surfer</span>?
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="gradient-text font-display font-semibold text-lg mb-2">Brak możliwości integracji w rzeczywistym świecie społeczności internetowych</div>
            <p className="text-muted-foreground leading-relaxed">
              W internecie istnieją setki społeczności o wspólnych zainteresowaniach, które nigdy nie mają okazji spotkać się na żywo i spędzić razem czas.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="gradient-text font-display font-semibold text-lg mb-2">Wady istniejących rozwiązań</div>
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
          <div className="w-64 md:w-72 lg:w-80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <img src={coffee} alt="Ośmiornica pijąca kawę" />
          </div>
        </div>
      </div>
    </SlideLayout>);
};

export default SlideProblem;