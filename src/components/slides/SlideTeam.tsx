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
  role: "CEO & Business Strategy",
  icon: Scale,
  gradient: "linear-gradient(135deg, hsl(24 95% 53%), hsl(340 85% 55%))",
  description:
  "Absolwent wydziału prawa i nauk ekonomicznych UW. Autor wizji Social Surfer i architekt modelu biznesowego. Odpowiada za stronę biznesową i compliance prawny. Laureat Ogólnopolskiej Olimpiady Historycznej."
},
{
  name: "Wojtek",
  role: "Senior Full-Stack Developer",
  icon: Code,
  gradient: "linear-gradient(135deg, hsl(310 80% 55%), hsl(270 70% 55%))",
  description:
  "Senior developer z bogatym doświadczeniem freelancowym. Twórca kompleksowych aplikacji mobilnych i webowych od A do Z. Autor designu i full-stackowego frontendu Social Surfer. Ekspert inżynierii dźwięku."
},
{
  name: "Janek",
  role: "Backend Specialist",
  icon: Cpu,
  gradient: "linear-gradient(135deg, hsl(240 70% 55%), hsl(190 80% 50%))",
  description:
  "Absolwent informatyki Politechniki Warszawskiej. Doświadczenie w prestiżowej korporacji software'owej. Współautor architektury backendowej i algorytmów matchowania. Optymalizator modeli predykcyjnych."
}];


const SlideTeam = () => {
  return (
    <SlideLayout slideNumber={7} totalSlides={7}>
      <img src={blob2} alt="" className="absolute top-0 right-0 w-48 opacity-30 pointer-events-none" />
      <img src={blob3} alt="" className="absolute bottom-0 left-0 w-40 opacity-25 pointer-events-none" />

      <div className="slide-number mb-4">
</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">Nasz zespół
        <span className="gradient-text"></span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => {const Icon = member.icon;
            return (
              <div
                key={member.name}
                className="glass-card p-8 flex flex-col gap-5 animate-fade-in"
                style={{ animationDelay: `${i * 0.2}s` }}>
              
              <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: member.gradient }}>
                
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="gradient-text font-display text-sm font-medium mt-1">{member.role}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>);

          })}
      </div>
    </SlideLayout>);

};

export default SlideTeam;