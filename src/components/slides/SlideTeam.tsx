import SlideLayout from "@/components/SlideLayout";
import { Scale, Code, Cpu, LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  accentClass: string;
  bgClass: string;
  description: string;
}

const team: TeamMember[] = [
  {
    name: "Maciek Pancewicz",
    role: "CEO & Business Strategy",
    icon: Scale,
    accentClass: "text-slide-accent",
    bgClass: "bg-slide-accent/10",
    description:
      "Absolwent wydziału prawa i nauk ekonomicznych UW. Autor wizji Social Surfer i architekt modelu biznesowego. Odpowiada za stronę biznesową i compliance prawny. Laureat Ogólnopolskiej Olimpiady Historycznej.",
  },
  {
    name: "Wojtek",
    role: "Senior Full-Stack Developer",
    icon: Code,
    accentClass: "text-slide-warm",
    bgClass: "bg-slide-warm/10",
    description:
      "Senior developer z bogatym doświadczeniem freelancowym. Twórca kompleksowych aplikacji mobilnych i webowych od A do Z. Autor designu i full-stackowego frontendu Social Surfer. Ekspert inżynierii dźwięku.",
  },
  {
    name: "Janek",
    role: "Backend Specialist",
    icon: Cpu,
    accentClass: "text-slide-accent",
    bgClass: "bg-slide-accent/10",
    description:
      "Absolwent informatyki Politechniki Warszawskiej. Doświadczenie w prestiżowej korporacji software'owej. Współautor architektury backendowej i algorytmów matchowania. Optymalizator modeli predykcyjnych.",
  },
];

const SlideTeam = () => {
  return (
    <SlideLayout slideNumber={7} totalSlides={7}>
      <div className="slide-number mb-6">Zespół</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12">
        Nasz <span className="text-slide-accent">zespół</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => {
          const Icon = member.icon;
          return (
            <div
              key={member.name}
              className="glass-card p-8 flex flex-col gap-5 animate-fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${member.bgClass} flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${member.accentClass}`} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className={`${member.accentClass} font-display text-sm font-medium mt-1`}>{member.role}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
};

export default SlideTeam;
