import { SocialMidias } from "../SocialMidias";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          Copyright &copy;
          <span>
            {new Date().getFullYear()}
             &nbsp;RodrigoSilva - Todos os direitos reservados
          </span>
        </p>
        <SocialMidias  />
        </div>
    </footer>
  );
};