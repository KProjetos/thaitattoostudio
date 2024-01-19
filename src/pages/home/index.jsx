import MakeYourOwnArt from "../../components/makeYourOwnArt/makeYourOwnArt";
import AboutUs from "../../components/aboutUs/aboutUs";
import Coments from "../../components/coments/coments";
import Faq from "../../components/faq/faq";
import IconWhatsapp from "../../images/iconWhatsapp";

function Home() {
  return (
    <main className="w-full direction-col-center p-0">
      <MakeYourOwnArt />
      <AboutUs />
      <Coments />
      <Faq />
      
      <div className="w-[90%] max-w-[1080px] direction-col  z-50">
      <a className="fixed right-4 bottom-4" href="https://wa.me/5511940767201">
        <IconWhatsapp/>
      </a>
    </div>
    </main>
  );
}
export default Home;
