import IconWhatsappMin from "../../images/iconWhatsAppMin";
import data_images from "../../images/imagesUrl";

function Header() {

  const image = data_images.images();
  const logo = image.logo;

  return (
    <header className="w-full h-[85vh]  direction-col-center justify-center bg-principal z-50">
      <div className=" w-full min-h-[85vh] absolute top-0 bg-black/70 z-50">
      </div>
      <video className="w-full h-[85vh] mobile:absolute mobile:top-0 md:hidden object-fill z-0" autoPlay muted loop playsInline>
        <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/mobileHeader.mp4?alt=media&token=21a34e7c-7120-4163-b2a4-14c7c00f8f58"/>
      </video> 

      <video className="hidden w-full h-[85vh] object-fill md:block  md:absolute md:top-0 md:z-0" autoPlay muted loop playsInline>
        <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/desktopHeader.mp4?alt=media&token=81efab2d-e8ec-461c-a370-37a9b9d926dd"/>
      </video>
    

      <div className="w-[90%] max-w-[1080px] direction-col items-center lg:items-start justify-center z-50">
        <img className="w-[150px] z-50  mt-[1em]" src={logo} fetchpriority="high" alt="Thai Tattoo Studio" />
        <p className="mb-[4em] text-second text-center font-aref text-[1em]">Explore o Mundo da Arte na Pele </p>
      </div>

      <div className="w-[90%] max-w-[1080px]  text-second direction-col items-center lg:items-center justify-start z-50 font-aref">

        <p className="my-[2em] text-[1.1em] text-center lg:text-[1.5em]">Bem-vindo ao Studio de Tatuagem do Grupo Saddam em São Bernardo do Campo! </p>


      
        <a href="https://wa.me/5511940767201" className="direction-col-center lg:text-[1.2em] " onClick={gtag('event', 'conversion', {'send_to': 'AW-11407376048/t4JZCL7t_4wZELD9ur8q'})}>
        <h1 className="title">Thai Tattoo Studio</h1>
        <p className="text-[0.9em] text-second">Tatuagens e Piercings.</p>
          <div className="direction-row bg-details p-2 rounded-lg w-[200px] text-center text-second mt-2">
            <IconWhatsappMin/>
            <p>Entre em contato</p>
          </div>
        </a>
      
      
    </div>
      
  </header>
  );
}

export default Header;