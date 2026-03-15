import SlideLayout from "@/components/SlideLayout";
import blob2 from "@/assets/blob-decoration-2.png";
import blob3 from "@/assets/blob-decoration-3.png";
import { Scale, Code, Cpu, LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  gradient: string;
  description: string;
}

const team: TeamMember[] = [
  {
    name: "Maciek Pancewicz",
    role: "H",
    icon: Scale,
    gradient: "linear-gradient(135deg, hsl(24 95% 53%), hsl(340 85% 55%))",
    description:
      "Absolwent Wydziału Prawa i Wydziału Nauk Ekonomicznych UW.  Autor wizji aplikacji SocialSurfer i architekt modelu biznesowego oraz strategii partnerstw. Odpowiada za stronę biznesową i compliance prawny Aplikacji. W wolnym czasie amator gier planszowych i pasjonat historii (w której zdobył tytuł laureata Ogólnopolskiej Olimpiady w Liceum).",
  },
  {
    name: "Wojtek",
    role: "Senior Full-Stack Developer",
    icon: Code,
    gradient: "linear-gradient(135deg, hsl(310 80% 55%), hsl(270 70% 55%))",
    description:
      "senior full-stack developer z bogatym doświadczeniem freelancowym. Przed zaangażowaniem się w tworzenie aplikacji SociaSurfer realizował kompleksowe projekty IT, w swoim portfolio ma już stworzone aplikacje mobilne i webowe od A do Z. Ekspert inżynierii dźwięku i produkcji multimediów w wolnym czasie pasjonat fotografii profesjonalnej.",
  },
  {
    name: "Janek",
    role: "Backend Specialist",
    icon: Cpu,
    gradient: "linear-gradient(135deg, hsl(240 70% 55%), hsl(190 80% 50%))",
    description:
      "absolwent informatyki Politechniki Warszawskiej, specjalista backendowy. Doświadczenie zdobył w prestiżowej korporacji software'owej, ktory poszukuje ambitniejszych wyzwań, gdzie stworzy własny produkt. Współautor architektury backendowej i algorytmów matchowania SocialSurfer, optymalizator systemów modeli predykcyjnych. W wolnym czasie czempion brydża oraz pasjonat wyścigów Formuły 1.",
  },
];

const SlideTeam = () => {
  return (
    <SlideLayout slideNumber={7} totalSlides={7}>
      <img src={blob2} alt="" className="absolute top-0 right-0 w-48 opacity-30 pointer-events-none" />
      <img src={blob3} alt="" className="absolute bottom-0 left-0 w-40 opacity-25 pointer-events-none" />

      <div className="slide-number mb-4">Zespół</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">
        Nasz <span className="gradient-text">zespół</span>
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
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: member.gradient }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="gradient-text font-display text-sm font-medium mt-1">{member.role}</p>
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
