import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
}

const SlideLayout = ({ children, slideNumber, totalSlides }: SlideLayoutProps) => {
  return (
    <div className="slide-container relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(190 90% 50% / 0.3), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(190 100% 65% / 0.3), transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 md:px-16 md:py-20">
        {children}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 slide-number">
        {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>

      {/* Brand mark */}
      <div className="absolute bottom-8 left-8 slide-number">
        Social Surfer
      </div>
    </div>
  );
};

export default SlideLayout;
