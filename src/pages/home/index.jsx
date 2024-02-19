import MakeYourOwnArt from "../../components/makeYourOwnArt/makeYourOwnArt";
import AboutUs from "../../components/aboutUs/aboutUs";
import Coments from "../../components/coments/coments";
import Faq from "../../components/faq/faq";
import IconWhatsapp from "../../images/iconWhatsapp";

function Home() {

  const clickedButton = () => {
   
    //This will trigger the conversion 
    
    window.gtag('config', 'AW-11407286946');
    
    window.gtag('event', 'conversion', {'send_to': 'AW-11407286946/j1QBCLWHtY4ZEKLFtb8q'});
    
  }

  return (
    <main className="w-full direction-col-center p-0">
      <MakeYourOwnArt />
      <AboutUs />
      <Coments />
      <Faq />
      
      <div className="w-[90%] max-w-[1080px] direction-col  z-50">
      <a aria-label="Whatsapp" target="_blank" className="fixed right-4 bottom-4" href="https://wa.me/5511940767201" onClick={clickedButton}>
        <IconWhatsapp/>
      </a>
    </div>
    </main>
  );
}
export default Home;
