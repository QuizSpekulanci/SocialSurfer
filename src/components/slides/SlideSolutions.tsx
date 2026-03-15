import SlideLayout from "@/components/SlideLayout";
import blob1 from "@/assets/blob-decoration-1.png";
import { Users, Brain } from "lucide-react";

const SlideSolutions = () => {
  return (
    <SlideLayout slideNumber={3} totalSlides={7}>
      <img src={blob1} alt="" className="absolute top-20 right-0 w-48 opacity-30 pointer-events-none" />

      <div className="slide-number mb-4">Rozwiązania</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">Nasze rozwiązania
        <span className="gradient-text">rozwiązania</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="glass-card p-8 flex flex-col gap-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "var(--slide-gradient-bar)" }}>
            <Users className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Community</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Użytkownicy dołączają do aplikacji przez link twórcy i automatycznie stają się częścią jego społeczności. Mogą przeglądać i filtrować profile innych uczestników, budując realne relacje wokół wspólnych pasji.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="px-3 py-1 rounded-full text-xs font-display bg-primary/10 text-primary">Auto-join</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-primary/10 text-primary">Filtrowanie</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-primary/10 text-primary">Profile</span>
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col gap-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(310 80% 55%), hsl(270 70% 55%))" }}>
            <Brain className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Quizy</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Każdy użytkownik może dodać do swojego profilu kreatywne quizy, pytania wielokrotnego wyboru lub pytania otwarte — co pozwala poznać drugą osobę w angażujący i zabawny sposób.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="px-3 py-1 rounded-full text-xs font-display bg-accent/10 text-accent">Quiz</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-accent/10 text-accent">Pytania otwarte</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-accent/10 text-accent">Gamifikacja</span>
          </div>
        </div>
      </div>
    </SlideLayout>);

};

export default SlideSolutions;