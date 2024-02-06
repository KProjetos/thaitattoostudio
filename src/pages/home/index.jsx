import MakeYourOwnArt from "../../components/makeYourOwnArt/makeYourOwnArt";
import AboutUs from "../../components/aboutUs/aboutUs";
import Coments from "../../components/coments/coments";
import Faq from "../../components/faq/faq";
import IconWhatsapp from "../../images/iconWhatsapp";

function Home() {

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-11407286946/j1QBCLWHtY4ZEKLFtb8q',
        'event_callback': callback
    });
    return false;
  }

  return (
    <main className="w-full direction-col-center p-0">
      <MakeYourOwnArt />
      <AboutUs />
      <Coments />
      <Faq />
      
      <div className="w-[90%] max-w-[1080px] direction-col  z-50">
      <a aria-label="Whatsapp" target="_blank" className="fixed right-4 bottom-4" href="https://wa.me/5511940767201" onClick={ () => gtag_report_conversion("https://wa.me/5511940767201")}>
        <IconWhatsapp/>
      </a>
    </div>
    </main>
  );
}
export default Home;
