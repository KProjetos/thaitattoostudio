import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Icon from "./icon.jsx";
import IconAmbiente from "./arrowAmbiente.jsx";

function Contact() {

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
        <AccordionHeader onClick={() => handleOpen(1)} className={open === 1 ? "text-details hover:text-details" : "text-principal"}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className={open === 2 ? "text-details hover:text-details" : "text-principal"}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className={open === 3 ? "text-details hover:text-details" : "text-principal"}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      </div>

    </div>

    <div className="w-[90%] max-w-[1080px] direction-col">
      <div className="titleBox mb-[4em]">
        <h1 className="title">Ambiente</h1>
        <p className="subtitle text-principal">Conheça nosso estúdio</p>
        
      </div>

      <div className="w-full direction-col">
        <div className="direction-col lg:direction-row lg:gap-4 lg:justify-start">
          <div className="lg:w-[30%] direction-col items-start">
            <h2 className="title">Ambiente familiar</h2>
            <IconAmbiente/>
          </div>
          <div className=" my-[1em] lg:my-[0] lg:w-[70%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo, excepturi repellendus odit quas dolores ea blanditiis
          </div>
        </div>
        <div className="direction-col lg:direction-row my-[2em]">
          <img src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/ambienteEx.png?alt=media&token=f4a85808-39b2-4f21-acb5-86c10d70bdba" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/ambienteEx.png?alt=media&token=f4a85808-39b2-4f21-acb5-86c10d70bdba" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/ambienteEx.png?alt=media&token=f4a85808-39b2-4f21-acb5-86c10d70bdba" alt="" />
        </div>
      </div>

      <div className="w-full direction-col">
        <div className="direction-col lg:direction-row lg:gap-4 lg:justify-start">
          <div className="lg:w-[30%] direction-col items-start">
            <h2 className="title">Espaço zen</h2>
            <IconAmbiente/>
          </div>
          <div className=" my-[1em] lg:my-[0] lg:w-[70%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo, excepturi repellendus odit quas dolores ea blanditiis
          </div>
        </div>
        <div className="direction-col lg:direction-row my-[2em]">
          <img src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/ambienteEx.png?alt=media&token=f4a85808-39b2-4f21-acb5-86c10d70bdba" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/ambienteEx.png?alt=media&token=f4a85808-39b2-4f21-acb5-86c10d70bdba" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/ambienteEx.png?alt=media&token=f4a85808-39b2-4f21-acb5-86c10d70bdba" alt="" />
        </div>
      </div>


        <a href="" className="text-center title hover:underline">Veja mais sobre o espaço zen</a>

    </div>

  </section>
  );
}

export default Contact;
