import { BiLogoPostgresql } from "react-icons/bi";
import { FaJs, FaLaravel, FaNodeJs, FaPhp } from "react-icons/fa6";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { SiLivewire, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

export const Technologies = () => {
  const technologies = [
    { name: "React", icon: <RiReactjsLine className="text-7xl text-cyan-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-7xl text-red-500" /> },
    { name: "Next.js", icon: <RiNextjsLine className="text-7xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-7xl text-cyan-500" /> },
    { name: "PHP", icon: <FaPhp className="text-7xl text-blue-700" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-7xl text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-7xl text-orange-400" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-7xl text-sky-700" /> },
    { name: "JavaScript", icon: <FaJs className="text-7xl text-yellow-400" /> },
    { name: "Livewire", icon: <SiLivewire className="text-7xl text-pink-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-7xl text-blue-400" /> },
  ];

  return (
    <div className="pb-24">
      <h2 className="my-10 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="group relative p-4">
            {tech.icon}
            <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
