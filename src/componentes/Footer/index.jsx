import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/profile.php?id=100095080396966">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/paola-adriana-erazo-52352b278/">
          <img className="linkedin" src="/img/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/erazopa6908/">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Paola Erazo</strong>
    </footer>
  );
};

export default Footer;
