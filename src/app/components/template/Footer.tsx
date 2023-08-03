import { SocialMidias } from "../SocialMidias";

export const Footer = () => {
  return (
    <footer>
      <div className="flex  gap-4 justify-center items-center py-2 bg-[#4d4f53] text-white  flex-wrap ">
        <p className="text-center flex md:flex-row flex-col  gap-4 justify-center items-center">
          <span>
          Copyright &copy;
            {new Date().getFullYear()}
            &nbsp;RodrigoSilva - Todos os direitos reservados
          </span>
        <SocialMidias />
        </p>
      </div>
    </footer>
  );
};
