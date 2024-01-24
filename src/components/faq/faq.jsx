import React from "react";
import { useEffect } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Icon from "./icon.jsx";
import IconAmbiente from "./arrowAmbiente.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="w-full direction-col-center bg-second">
    <div className="w-[90%] max-w-[1080px] direction-col">
      <div className="titleBox ">
        <h1 className="title">Perguntas frequentes</h1>
        <p className="subtitle text-principal">Tire sua dúvida</p>
    </div>

      <div className="w-full direction-col-center">

      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className={open === 1 ? "text-details hover:text-details" : "text-principal"}><h2>Como funciona para agendar?</h2></AccordionHeader>
        <AccordionBody>
          <p className="text-[1.2em]">Basta clicar no símbolo do <a className="hover:underline text-details font-bold" href="https://wa.me/5511940767201">WhatsApp</a> da página, que será direcionado para nossos atendentes.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className={open === 2 ? "text-details hover:text-details" : "text-principal"}>
        <h2>Fazem todos os estilos de Tattoo?</h2>
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[1.2em]">Sim, a grande maioria. Traços finos, Realismo, Ornamental, Pontilhismo, Geométrica, Coloridas, Geek (Estilo anime), Patch work (Estilo bordado), Old school, Black work (Artes mais pretas), Tribais (Estilo Maori), entre outras.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className={open === 3 ? "text-details hover:text-details" : "text-principal"}>
        <h2>Fazem reforma e cobertura?</h2>
        </AccordionHeader>
        <AccordionBody>
        <p className="text-[1.2em]">Sim, fazemos bastante tipo de cobertura e reforma também que é revitalizar uma Tattoo antiga.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className={open === 4 ? "text-details hover:text-details" : "text-principal"}>
        <h2>Qual o endereço do estúdio?</h2>
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[1.2em]">Av.Senador Ricardo Batista 165, bairro Assunção - São Bernardo do Campo</p>
          <p className="text-[1.2em] mt-2"><a className="hover:underline text-details font-bold" href="https://maps.app.goo.gl/WDrn5tmtuk88jUfo9"> ➔ Clique aqui para acessar a rota.</a></p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} className={open === 5 ? "text-details hover:text-details" : "text-principal"}>
        <h2>Quais as formas de pagamentos?</h2>
        </AccordionHeader>
        <AccordionBody>
        <p className="text-[1.2em]">Pix, cartões de crédito/débito e dinheiro.</p>
        <p className="text-[1.2em]">Crédito parcelamento sem juros</p>
        </AccordionBody>
      </Accordion>

      </div>

    </div>

    <div className="w-[90%] max-w-[1080px] direction-col">
      <div className="titleBox mb-[4em]">
        <h1 className="title">Ambiente</h1>
        <p className="subtitle text-principal">Conheça nosso estúdio</p>
        
      </div>

      <div className="w-full direction-col items-center">
        <div className="direction-col lg:direction-row lg:gap-4 lg:justify-start">
          <div className="lg:w-[30%] direction-col items-start">
            <h2 className="title">Ambiente familiar</h2>
            <IconAmbiente/>
          </div>
          <div className=" my-[1em] lg:my-[0] lg:w-[70%] ">
          <p className="leading-7">Oferecemos um ambiente 100% familiar, criando um espaço acolhedor para você e sua família. Na nossa casa, todos são bem-vindos.</p> 
          </div>
        </div>
        <div className="w-[90%] direction-col items-center lg:direction-row my-[2em] overflow-hidden">
        <img data-aos="fade-right" className="w-[350px] h-[350px] object-" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/local2WEB.webp?alt=media&token=bfcdb87e-8098-419c-9cf4-55026c4af5f6" alt="Thai Tattoo Studio" />
          <img data-aos="fade-right" className="w-[350px] h-[350px] object-fill" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/local1WEB.webp?alt=media&token=4aa216ef-304c-4c87-9d9b-c36e2c84468e" alt="Sala 1 para tatuar" />
          <img data-aos="fade-right" className="w-[350px] h-[350px] object-fill" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/local3WEB.webp?alt=media&token=68b7f40a-0c6d-4906-9e6b-cb8bf181a777" alt="Sala 2 para tatuar" />
        </div>
      </div>

      <div className="w-full direction-col items-center">
        <div className="direction-col lg:direction-row lg:gap-4 lg:justify-start">
          <div className="lg:w-[30%] direction-col items-start">
            <h2 className="title">Espaço zen</h2>
            <IconAmbiente/>
          </div>
          <div className=" my-[1em] lg:my-[0] lg:w-[70%] ">
          <p className="leading-7">Nosso ambiente foi cuidadosamente projetado para oferecer tranquilidade, proporcionando uma experiência única enquanto você se prepara para sua nova tatuagem.</p>
          </div>
        </div>
        <div className="w-[90%] direction-col items-center lg:direction-row my-[2em] overflow-x-hidden">
        <img data-aos="fade-left" className="w-[350px] h-[350px] object-fill" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/espacoZen2WEB.webp?alt=media&token=5faca8f3-5a49-41b9-b855-a023e724c1d9" alt="Espaço zen" />
          <img data-aos="fade-left" className="w-[350px] h-[350px] object-fill" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/espacoZen1WEB.webp?alt=media&token=564720d6-c63c-4edd-a774-a7292772763b" alt="Espaço zen" />
          <img data-aos="fade-left" className="w-[350px] h-[350px] object-fill" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/espacoZen3WEB.webp?alt=media&token=0d18b929-552b-4c63-915a-6aa3e10d7a89" alt="Espaço zen" />
        </div>
      </div>

    </div>

  </section>
  );
}

export default Contact;
