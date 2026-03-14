import SlideLayout from "@/components/SlideLayout";
import heroWave from "@/assets/hero-wave.jpg";

const SlideHero = () => {
  return (
    <SlideLayout slideNumber={1} totalSlides={7}>
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroWave} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(220 25% 6%), transparent 60%)" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        <div className="slide-number mb-4">Propozycja współpracy</div>

        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground">
          Social
          <span className="text-slide-accent glow-text"> Surfer</span>
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Aplikacja łącząca internetowe społeczności w realnym świecie
          poprzez kreatywne quizy i wspólne zainteresowania.
        </p>

        <div className="mt-8 glass-card px-8 py-4 inline-flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-slide-accent animate-pulse" />
          <span className="text-muted-foreground text-sm font-display tracking-wide">
            Przegląd propozycji współpracy sponsoringowo-promocyjnej
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideHero;
