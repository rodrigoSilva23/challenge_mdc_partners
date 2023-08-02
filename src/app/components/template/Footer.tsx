import { SocialMidias } from "../SocialMidias";

export const Footer = () => {
  return (
    <footer>
      <div className="flex  gap-4 justify-center items-center py-2 bg-[#4d4f53] text-white  ">
        <p>
          Copyright &copy;
          <span>
            {new Date().getFullYear()}
            &nbsp;RodrigoSilva - Todos os direitos reservados
          </span>
        </p>
        <SocialMidias />
      </div>
    </footer>
  );
};
