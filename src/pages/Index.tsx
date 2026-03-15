import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import SlideHero from "@/components/slides/SlideHero";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideSolutions from "@/components/slides/SlideSolutions";
import SlideYouTube from "@/components/slides/SlideYouTube";
import SlideBenefits from "@/components/slides/SlideBenefits";
import SlideModeration from "@/components/slides/SlideModeration";
import SlideTeam from "@/components/slides/SlideTeam";
import SlideContact from "@/components/slides/SlideContact";
import { useIsMobile } from "@/hooks/use-mobile";

const slides = [SlideHero, SlideProblem, SlideSolutions, SlideYouTube, SlideBenefits, SlideModeration, SlideTeam, SlideContact];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index >= slides.length) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goTo(current + 1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(current - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, goTo]);

  useEffect(() => {
    if (isMobile) return;

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        goTo(current + (delta > 0 ? 1 : -1));
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [current, goTo, isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    containerRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [current, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 30) {
        goTo(current + (e.deltaY > 0 ? 1 : -1));
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [current, goTo, isMobile]);

  const CurrentSlide = slides[current];

  return (
    <div ref={containerRef} className="h-[100dvh] w-screen overflow-y-auto md:overflow-hidden bg-background relative">
      {/* Slide */}
      <div
        className="w-full h-full transition-opacity duration-500"
        key={current}
        style={{ animation: "fade-in 0.5s ease-out" }}
      >
        <CurrentSlide />
      </div>

      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary scale-125 shadow-[0_0_8px_hsl(24_95%_53%/0.5)]"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-20 transition-all"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-20 transition-all"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
