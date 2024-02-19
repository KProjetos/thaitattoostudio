import data_images from "../../images/imagesUrl"
import InstaGold from "../../images/iconInstaGold"
import WhatsGold from "../../images/iconWhatsGold"
import LocalGold from "../../images/iconLocalGold"

function Footer() {

  const now = new Date();
  const currentYear = now.getFullYear()

  const image = data_images.images();
  const logo = image.logo;

  const clickedButton = () => {
   
    //This will trigger the conversion 
    
    window.gtag('config', 'AW-11407286946');
    
    window.gtag('event', 'conversion', {'send_to': 'AW-11407286946/j1QBCLWHtY4ZEKLFtb8q'});
    
  }


  return (
    <footer className="w-full h-full direction-col-center bg-footer bg-cover py-0">
    <div className="w-full h-full direction-col items-center backdrop-brightness-50 bg-black/10 py-6">

      
    <div className="w-[90%] max-w-[1080px] direction-col flex-col-reverse items-center lg:direction-row lg:justify-between">

      <div className="w-full direction-col items-center">

        <iframe
          className="w-full h-[275px] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.577355905785!2d-46.571218225764845!3d-23.722832758137386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4166e758d15d%3A0x6722c47df4074cfd!2sAv.%20Sen.%20Ricardo%20Batista%2C%20165%20-%20Assun%C3%A7%C3%A3o%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009812-490!5e0!3m2!1spt-BR!2sbr!4v1700329132641!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        >

        </iframe>

      </div>

      <div className="w-full direction-col items-center text-white">
        <div className="text-white direction-col flex-col-reverse items-center gap-[2em] lg:direction-row">
        
          <div className="w-full direction-col items-center">
          <h2 className="title text-[1.3em]">Informações de contato</h2>
            <a className="hover:underline" href="https://www.instagram.com/thai.tattoostudio?utm_source=ig_web_button_share_sheet&igsh=MmVlMjlkMTBhMg==">
              <div className="w-full direction-row justify-start gap-1"><span><InstaGold/></span>@thai.tattoostudio</div>
            </a>
            <a className="hover:underline" href="https://wa.me/5511940767201" target="_blank" onClick={clickedButton}>
              <div className="w-full direction-row justify-start gap-4"><span><WhatsGold/></span>(11) 94076-7201</div>
            </a>
          </div>
          <img src={logo} alt="Thai Tattoo Studio" className="w-[175px]"/>
        </div>
        <a className="hover:underline" href="https://maps.app.goo.gl/WDrn5tmtuk88jUfo9">
          <div className="w-full text-center direction-row justify-center gap-1 my-[1.5em]"><span><LocalGold/></span>Rua Senador Ricardo Batista, 165 Assunção - SBC/SP</div>
        </a>
      </div>
      

      
    </div>

    <div className="w-full direction-col items-center text-white  mt-7">
      <h2>Criado por FBDEV © {currentYear}</h2>
    </div>
    </div>
  </footer>
  );
}

export default Footer;
