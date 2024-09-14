import { FaGithub, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import logo from "../assets/icon.webp";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/code3-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:text-gray-800 transition-colors duration-300 ease-in-out hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/h3dev.pira"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://t.me/h3dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="hover:text-blue-500 transition-colors duration-300 ease-in-out hover:scale-110"
        >
          <FaTelegram />
        </a>
        <a
          href="https://twitter.com/H3devPira"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 transition-colors duration-300 ease-in-out hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};