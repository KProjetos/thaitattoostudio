import IconWhatsappMin from "../../images/iconWhatsAppMin";
import data_images from "../../images/imagesUrl";

function Header() {

  const image = data_images.images();
  const logo = image.logo;

  return (
    <header className="w-full h-[85vh]  direction-col-center justify-start bg-principal z-50">
      <div className=" w-full min-h-[85vh] absolute top-0 bg-black/10 z-50"></div>
      <video className="w-full h-[85vh] mobile:absolute mobile:top-0 md:hidden object-fill z-0" autoPlay muted loop playsInline>
        <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/mobileHeader.mp4?alt=media&token=21a34e7c-7120-4163-b2a4-14c7c00f8f58"/>
      </video> 

      <video className="hidden w-full h-[85vh] object-fill md:block  md:absolute md:top-0 md:z-0" autoPlay muted loop playsInline>
        <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/desktopHeader.mp4?alt=media&token=81efab2d-e8ec-461c-a370-37a9b9d926dd"/>
      </video>
    <div className="w-[90%] max-w-[1080px] direction-col items-center lg:items-start justify-start z-20">

      <img className="w-[175px] z-50" src={logo} alt="Thai Tattoo Studio" />
      
        <div className="direction-row bg-details p-2 rounded-lg w-[175px] text-center text-second mt-2">
          <IconWhatsappMin/>
          <p>(11) 94076-7201</p>
        </div>
      
      
    </div>
      
  </header>
  );
}

export default Header;