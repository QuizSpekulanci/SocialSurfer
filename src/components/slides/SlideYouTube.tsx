import SlideLayout from "@/components/SlideLayout";
import youtubeImg from "@/assets/youtube-illustration.jpg";
import { Play, Calendar } from "lucide-react";

const SlideYouTube = () => {
  return (
    <SlideLayout slideNumber={4} totalSlides={7}>
      <div className="slide-number mb-6">YouTube</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12">
        Możliwości dla kanałów <span className="text-slide-accent">YouTube</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
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
              <div className="w-12 h-12 rounded-xl bg-slide-accent/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-slide-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Wydarzenia dla społeczności</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Organizuj wydarzenia dla swojej społeczności — meetupy, wspólne quizy na żywo, sesje Q&A. Opcjonalny, lecz potężny element budowania zaangażowania.
            </p>
          </div>
        </div>

        <div className="flex justify-center animate-slide-in-right">
          <img src={youtubeImg} alt="YouTube integration" className="rounded-2xl max-w-md w-full glow-accent" />
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideYouTube;
