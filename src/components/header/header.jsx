import IconWhatsappMin from "../../images/iconWhatsAppMin";
import data_images from "../../images/imagesUrl";

function Header() {

  const image = data_images.images();
  const logo = image.logo;

  return (
    <header className="w-full h-[85vh]  direction-col-center justify-start bg-principal">
     
      <video className="w-full h-[85vh] object-fill absolute top-0 z-0" autoPlay muted loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/mobileHeader.mp4?alt=media&token=21a34e7c-7120-4163-b2a4-14c7c00f8f58"/>
      </video>
    <div className="w-[90%] max-w-[1080px] direction-col items-center lg:items-start justify-start z-20">

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
