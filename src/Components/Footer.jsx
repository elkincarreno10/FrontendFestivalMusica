
const Footer = () => {
    const dia = new Date();
    const year = dia.getFullYear();
    return (
      <footer>
        <h2 className="bg-blue-300 py-8 text-center font-bold uppercase">Todos los derechos reservados Festival-Musica @{year}</h2>
      </footer>
    )
  }
  
  export default Footer;