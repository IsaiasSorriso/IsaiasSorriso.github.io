import "../styles/Footer.scss";
import curriculo from "../assets/IsaiasCurriculo.pdf";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Meu Site. Todos os direitos
          reservados.
        </p>
        
          <p>Clique ao lado para baixar meu currículo:</p>
        <button
          className="download-button"
          onClick={() => {
            const link = document.createElement("a");
            link.href = curriculo; // Substitua pelo caminho real
            link.download = "IsaiasCurriculo"; // Nome do arquivo ao baixar
            link.click();
          }}
        >
          <svg class="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
