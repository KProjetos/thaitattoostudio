import { Carousel } from "@material-tailwind/react";
import { useEffect } from 'react';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {

  useEffect(() => {
    AOS.init({duration:1200})
  })

    return (
      <section className="w-full direction-col-center bg-second">

        <div className="hidden direction-col w-[90%] max-w-[1080px]  items-center text-center lg:direction-row mt-4 gap-2 ">

          <img className="w-[320px] " data-aos="fade-down" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />
          <img className="w-[320px] " data-aos="fade-down"  data-aos-delay="200" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />
          <img className="w-[320px] " data-aos="fade-down"  data-aos-delay="300" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />

        </div>

        <Carousel className="mobile:relative mobile:bottom-16 lg:hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e"
            alt="image 1"
            className="h-[500px] w-full object-cover"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e"
            alt="image 2"
            className="h-[500px] w-full object-cover"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e"
            alt="image 3"
            className="h-[500px] w-full object-cover"
          />
        </Carousel>

        <div className="w-[90%] max-w-[1080px] direction-col mt-[4em]">
          <div className="titleBox ">
            <h1 className="title">Sobre nós</h1>
            <p className="subtitle">Um pouco da nossa história</p>
          </div>

          <div className="w-full direction-col lg:direction-row">
            <div className="w-full lg:w-[45%] h-[250px] direction-col-center bg-principal lg:mt-8 my-6 rounded-lg text-second">
              vídeo
            </div>
            <div className="w-full lg:w-[45%] px-2 lg:px-4">
              <p>
              Somos do marca Saddam, com 30 anos de experiência. Temos 5 artistas, cada um com suas especialidades. Metodologia moderna onde simulamos a arte no seu corpo através do Tablet, antes de tatuar. Ambiente 100% familiar, possuímos um espaço ZEN.
              </p>
            </div>
          </div>


        </div>
        <a className="title text-[1.3em] mt-8 hover:underline" href="">Assista mais sobre nossa história</a>
      </section>
    );
  }
  
  export default AboutUs;
  