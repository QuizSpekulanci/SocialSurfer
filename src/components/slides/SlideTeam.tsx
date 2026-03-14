import SlideLayout from "@/components/SlideLayout";
import { Scale, Code, Cpu } from "lucide-react";

const SlideTeam = () => {
  const team = [
    {
      name: "Maciek Pancewicz",
      role: "CEO & Business Strategy",
      icon: Scale,
      color: "slide-accent",
      description:
        "Absolwent wydziału prawa i nauk ekonomicznych UW. Autor wizji Social Surfer i architekt modelu biznesowego. Odpowiada za stronę biznesową i compliance prawny. Laureat Ogólnopolskiej Olimpiady Historycznej.",
    },
    {
      name: "Wojtek",
      role: "Senior Full-Stack Developer",
      icon: Code,
      color: "slide-warm",
      description:
        "Senior developer z bogatym doświadczeniem freelancowym. Twórca kompleksowych aplikacji mobilnych i webowych od A do Z. Autor designu i full-stackowego frontendu Social Surfer. Ekspert inżynierii dźwięku.",
    },
    {
      name: "Janek",
      role: "Backend Specialist",
      icon: Cpu,
      color: "slide-accent",
      description:
        "Absolwent informatyki Politechniki Warszawskiej. Doświadczenie w prestiżowej korporacji software'owej. Współautor architektury backendowej i algorytmów matchowania. Optymalizator modeli predykcyjnych.",
    },
  ];

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
              <div className={`w-16 h-16 rounded-2xl bg-${member.color}/10 flex items-center justify-center`}>
                <Icon className={`w-8 h-8 text-${member.color}`} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className={`text-${member.color} font-display text-sm font-medium mt-1`}>{member.role}</p>
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
