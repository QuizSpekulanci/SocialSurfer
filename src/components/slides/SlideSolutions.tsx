import SlideLayout from "@/components/SlideLayout";
import solutionsImg from "@/assets/solutions-illustration.jpg";
import { Users, Brain } from "lucide-react";

const SlideSolutions = () => {
  return (
    <SlideLayout slideNumber={3} totalSlides={7}>
      <div className="slide-number mb-6">Rozwiązania</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12">
        Nasze <span className="text-slide-accent">rozwiązania</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="glass-card p-8 flex flex-col gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-14 h-14 rounded-xl bg-slide-accent/10 flex items-center justify-center">
            <Users className="w-7 h-7 text-slide-accent" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Community</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Użytkownicy dołączają do aplikacji przez link twórcy i automatycznie stają się częścią jego społeczności. Mogą przeglądać i filtrować profile innych uczestników, budując realne relacje wokół wspólnych pasji.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="px-3 py-1 rounded-full text-xs font-display bg-slide-accent/10 text-slide-accent">Auto-join</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-slide-accent/10 text-slide-accent">Filtrowanie</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-slide-accent/10 text-slide-accent">Profile</span>
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-14 h-14 rounded-xl bg-slide-warm/10 flex items-center justify-center">
            <Brain className="w-7 h-7 text-slide-warm" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Quizy</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Każdy użytkownik może dodać do swojego profilu kreatywne quizy, pytania wielokrotnego wyboru lub pytania otwarte — co pozwala poznać drugą osobę w angażujący i zabawny sposób.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="px-3 py-1 rounded-full text-xs font-display bg-slide-warm/10 text-slide-warm">Quiz</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-slide-warm/10 text-slide-warm">Pytania otwarte</span>
            <span className="px-3 py-1 rounded-full text-xs font-display bg-slide-warm/10 text-slide-warm">Gamifikacja</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <img src={solutionsImg} alt="Solutions" className="rounded-2xl max-w-xs w-full opacity-60" />
      </div>
    </SlideLayout>
  );
};

export default SlideSolutions;
