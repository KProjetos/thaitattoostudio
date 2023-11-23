import IconInstagram from "../../images/iconInstagram";
import IconWhatsapp from "../../images/iconWhatsapp";

function Contact() {
  return (
    <section className="w-full direction-col-center bg-principal">
    <div className="w-[90%] max-w-[1080px] direction-col">
      <div className="titleBox ">
        <h1 className="title">Contato</h1>
        <p className="subtitle text-second">Redes sociais</p>
      </div>

      <div className="w-full direction-col-center">

        <a href="">
          <div className="direction-row gap-5 text-second mb-4 w-[270px] text-[1.4em]">
            <IconInstagram/>
            <p className=" hover:underline">@thai.tattoostudio</p>
          </div>
        </a>
        <a href="">
          <div className="direction-row gap-5 text-second mb-4 w-[335px] text-[1.4em]">

            <IconWhatsapp/>
            <p className=" hover:underline">11 94002-8922</p>

          </div>
        </a>

      </div>

    </div>

  </section>
  );
}

export default Contact;
