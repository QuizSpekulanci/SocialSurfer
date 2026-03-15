import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
}

const SlideLayout = ({ children, slideNumber, totalSlides }: SlideLayoutProps) => {
  return (
    <div className="slide-container relative w-full min-h-[100dvh] flex flex-col overflow-x-hidden overflow-y-visible md:overflow-hidden">
      {/* Gradient bar at top */}
      <div className="gradient-bar shrink-0" />

      {/* Content */}
      <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-8 py-12 pb-24 md:px-16 md:py-16 flex flex-col justify-center">
        {children}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-8 slide-number">
        {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>
    </div>
  );
};

export default SlideLayout;
