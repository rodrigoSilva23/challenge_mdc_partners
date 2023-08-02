import { FaGithubAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export const SocialMidias = () => {
  return (
    <div className="flex gap-2">
    
      <a
        href="https://www.instagram.com/rodrigosilva.up/"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 transition-transform "
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/rodrigoSilva23"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 transition-transform "
      >
        <FaGithubAlt />
      </a>

      <a
        href="https://www.linkedin.com/in/rodrigo-santos-silva-059b9a193/"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 transition-transform "
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};