import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";
import IconAmbiente from "../faq/arrowAmbiente.jsx";
import data_tattos from "./tattooList.js";
import data_piercings from "./piercingList.js";
import { Suspense } from 'react';

import { lazy } from 'react';

const CarouselTattooMobile = lazy(() => import('./carouselTattooMobile.jsx'));
const CarouselTattoo = lazy(() => import('./carouselTattoos.jsx'));

// aos
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  const tattos = data_tattos.tattoos();
  const piercings = data_piercings.piercings();


  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <section className="w-full direction-col-center bg-second">
      
      <div className="hidden direction-col w-[90%] max-w-[1080px] items-center text-center lg:direction-row mt-4 gap-2 ">
        <Suspense fallback={<Loading />}>
          <CarouselTattoo/>
        </Suspense>
      </div>


      <Suspense fallback={<Loading />}>
        <CarouselTattooMobile/>
      </Suspense>

      <div className="w-[90%] max-w-[1080px] direction-col lg:mt-[3em]">
        <div className="titleBox ">
          <h1 className="title">Piercing de alta qualidade</h1>

          <p className="subtitle">Com método de relaxamento</p>
        </div>

        <p className="mt-[2em] text-center">Utilizamos somente jóias de Titânio, prezando pela saúde e qualidade para com os nossos clientes.</p>

        <span className=" text-[0.8em] text-center">*Titânio é um material nobre, hipoalergênico, com aceitação de 99,9% do corpo, é um material livre de níquel que pode causar alergia, inflamação, e rejeição.</span>

        <div className="w-full direction-col-center">
          <div className="w-full lg:w-[45%] h-[250px] direction-col-center bg-principal lg:mt-4 rounded-lg text-second">
            <video preload="none" controls className='w-full  h-[350px] direction-col-center  text-principal lg:mt-8 my-6 rounded-lg'>
                <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/videoPiercing.mp4?alt=media&token=7f7503b9-bbdf-4aa3-8d79-5048c061af16"/>
            </video>
          </div>
        </div>
      </div>


      <div className="w-full direction-col-center flex-col-reverse lg:py-0 bg-principal text-white">
        
        <Carousel className="lg:hidden w-full max-w-[520px]">
            {
              piercings.map(element => {
                return(
                  <img
                    className="w-full max-w-[520px] overflow-hidden object-contain"
                    data-aos="fade-down"
                    src={element.image}
                    alt={element.name}
                  />
                )
              })
            }
        </Carousel>

        <div className="w-[90%] max-w-[1080px] pt-0 lg:pt-6 direction-col-center lg:direction-row gap-6 lg:gap-32">
          <div className="lg:w-[50%] hidden lg:block">
            <div className="lg:direction-row direction-col-center py-0 lg:gap-6">
              <img
                className="max-w-[50%] max-h-[300px]"
                data-aos="fade-down"
                src={piercings[0].image}
                alt={piercings[0].name}
              />
              <img
                className="max-w-[50%] max-h-[300px] lg:mt-[4em]"
                data-aos="fade-down"
                src={piercings[1].image}
                alt={piercings[1].name}
              />
            </div>
            <div className="direction-col-center py-0 lg:direction-row lg:gap-8">
            <img
                className="max-w-[50%] max-h-[300px] lg:mb-[4em]"
                data-aos="fade-down"
                src={piercings[2].image}
                alt={piercings[2].name}
              />
              <img
                className="max-w-[50%] max-h-[300px]"
                data-aos="fade-down"
                src={piercings[3].image}
                alt={piercings[3].name}
              />
            </div>
          </div>

          <div className="w-full lg:w-[50%] direction-col items-start">
            <div className="">
              <h2 className="title">Técnica de Respiração</h2>
              <IconAmbiente />
              <p className="mt-4">
                Nosso estúdio também oferece serviços de body piercing com
                profissionais capacitados. Utilizamos técnicas de relaxamento
                para tornar o processo de perfuração tranquilo e relaxante.
                Priorizamos sua comodidade e bem-estar durante todo o
                procedimento. Conte conosco para proporcionar uma experiência
                positiva e segura em cada etapa do seu caminho na arte corporal.
                Estamos aqui para transformar suas ideias em realidade.
              </p>

              
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1080px] direction-col mt-[3em]">
        <div className="titleBox ">
          <h1 className="title">Sobre nós</h1>

          <p className="subtitle">Um pouco da nossa história</p>
        </div>

        <div className="w-full direction-col-center">
          <div className="w-full lg:w-[65%] px-2 lg:px-4">
            <p className="leading-7 text-center">
              Somos da marca Saddam, com 30 anos de experiência. Temos 5
              artistas, cada um com suas especialidades. Metodologia moderna
              onde simulamos a arte no seu corpo através do Tablet, antes de
              tatuar. Ambiente 100% familiar, possuímos um espaço ZEN.
            </p>


            <p className="leading-7 text-center mt-6">
            Aceitamos diversos métodos de pagamento, proporcionando flexibilidade aos nossos clientes. Você pode pagar no pix, com cartões de crédito, débito e também oferecemos a facilidade de <b>parcelamento sem juros</b>. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
