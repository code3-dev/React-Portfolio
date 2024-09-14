import profilePic from "../assets/profile.webp";
import { HERO_CONTENT, INFO } from "../constants/index";
import { FaDownload } from "react-icons/fa6";

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Hossein Pira"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              {INFO.name}
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              {INFO.position}
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            <a
              href={INFO.resume}
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 flex items-center gap-2 transition transform hover:bg-stone-800 hover:text-white hover:scale-105 duration-300 ease-in-out"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
