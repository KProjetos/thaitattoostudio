import IconArrow from "../../images/iconArrow";
import IconWhatsappMin from "../../images/iconWhatsAppMin";
import data_images from "../../images/imagesUrl";

function Header() {

  const image = data_images.images();
  const logo = image.logo;

  return (
    <header className="w-full direction-col-center justify-start bg-principal min-h-[85vh]">
    <div className="w-[90%] max-w-[1080px] direction-col items-center lg:items-start justify-start">

      <img className="w-[175px]" src={logo} alt="Thai Tattoo Studio" />
      <a href="">
        <div className="direction-row bg-details p-2 rounded-lg w-[175px] text-center text-second">
          <IconWhatsappMin/>
          <p>11 94402-8922</p>
        </div>
      </a>
      
    </div>    
  </header>
  );
}

export default Header;
