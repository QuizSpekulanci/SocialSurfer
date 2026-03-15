import SlideLayout from "@/components/SlideLayout";
import blob2 from "@/assets/blob-decoration-2.png";
import { Play, Calendar } from "lucide-react";

const SlideYouTube = () => {
  return (
    <SlideLayout slideNumber={4} totalSlides={7}>
      <img src={blob2} alt="" className="absolute bottom-10 right-0 w-64 opacity-40 pointer-events-none" />

      <div className="slide-number mb-4">YouTube</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">
        Możliwości dla kanałów <span className="gradient-text">YouTube</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-6">
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Play className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Społeczność wokół kanału</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Twórz dedykowaną społeczność, w której widzowie mogą wzajemnie przeglądać swoje profile i rozwiązywać tematyczne quizy — budując więzi, które wykraczają poza komentarze pod filmami.
            </p>
          </div>

          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--slide-gradient-bar)" }}>
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Wydarzenia dla społeczności</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Organizuj wydarzenia dla swojej społeczności — meetupy, wspólne quizy na żywo, sesje Q&A. Opcjonalny, lecz potężny element budowania zaangażowania.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-72 h-48 rounded-2xl flex items-center justify-center" style={{ background: "var(--slide-gradient-bar)" }}>
            <Play className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideYouTube;
