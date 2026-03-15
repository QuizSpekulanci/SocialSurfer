import SlideLayout from "@/components/SlideLayout";
import blob1 from "@/assets/blob-decoration-1.png";
import blob2 from "@/assets/blob-decoration-2.png";

const SlideHero = () => {
  return (
    <SlideLayout slideNumber={1} totalSlides={8}>
      {/* Decorative blobs */}
      <img src={blob1} alt="" className="absolute top-10 right-0 w-72 md:w-96 opacity-60 pointer-events-none" />
      <img src={blob2} alt="" className="absolute bottom-0 left-0 w-56 md:w-72 opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-8 max-w-2xl">
        <div className="slide-number mb-2">Propozycja współpracy</div>

        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight">
          Social
          <span className="gradient-text"> Surfer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Aplikacja łącząca internetowe społeczności w realnym świecie
          poprzez kreatywne quizy i wspólne zainteresowania.
        </p>

        <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-muted-foreground text-sm font-display tracking-wide">
            Przegląd propozycji współpracy sponsoringowo-promocyjnej
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideHero;
