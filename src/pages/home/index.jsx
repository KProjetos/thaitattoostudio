import MakeYourOwnArt from "../../components/makeYourOwnArt/makeYourOwnArt";
import AboutUs from "../../components/aboutUs/aboutUs";
import Coments from "../../components/coments/coments";
import Faq from "../../components/faq/faq";
import Address from "../../components/address/address";
import IconWhatsapp from "../../images/iconWhatsapp";

function Home() {
  return (
    <main className="w-full direction-col-center p-0">
      <MakeYourOwnArt />
      <AboutUs />
      <Coments />
      <Faq />
      <Address/>
      <div className="fixed right-4 bottom-4">
      <a href="">
        <IconWhatsapp/>
      </a>
    </div>
    </main>
  );
}
export default Home;
