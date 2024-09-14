import { FaJs, FaLaravel, FaLink, FaNodeJs, FaPhp } from 'react-icons/fa6';
import { SiLivewire, SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';

const projectData = [
  {
    id: 1,
    image: '/example.png',
    title: 'Socket.io Chat',
    description: 'Real-time chat application using Node.js and Socket.io.',
    technologies: [<FaNodeJs key="nodejs" />, <FaJs key="js" />],
    link: '#',
  },
  {
    id: 2,
    image: '/example.png',
    title: 'Blog Platform',
    description: 'Blogging platform built with Livewire, Laravel, and TailwindCSS.',
    technologies: [<FaPhp key="php" />, <FaLaravel key="laravel" />, <SiTailwindcss key="tailwind" />, <SiLivewire key="livewire" />, <SiMysql key="mysql" />],
    link: '#',
  },
  {
    id: 3,
    image: '/example.png',
    title: 'Expo Blog App',
    description: 'Blog application developed using Expo and React Native.',
    technologies: [<RiReactjsLine key="react" />, <FaJs key="js" />, <SiTypescript key="ts" />],
    link: '#',
  },
];

export const Projects = () => {
  return (
    <div className="pb-24">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projectData.map((project) => (
          <div key={project.id} className="rounded-lg shadow-lg overflow-hidden max-w-xs border border-stone-900">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-2 text-xl mb-4">
                {project.technologies}
              </div>
              <a
                href={project.link}
                className="bg-white rounded-full p-4 text-sm text-stone-800 mb-4 flex items-center gap-2 transition transform hover:bg-stone-800 hover:text-white hover:scale-105 duration-300 ease-in-out"
              >
                <FaLink />
                Open
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
