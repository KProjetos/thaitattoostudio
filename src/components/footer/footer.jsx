

function Footer() {

  const now = new Date();
  const currentYear = now.getFullYear()

  return (
    <footer className="w-full direction-col-center bg-principal py-4">
    <div className="w-[90%] max-w-[1080px] direction-col items-center text-second">
      <h2>Desenvolvido por NTec Soluções</h2>
      <span>Copyright © {currentYear}</span>
    </div>
  </footer>
  );
}

export default Footer;
