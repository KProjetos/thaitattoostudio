import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";


function AboutUs() {

  // const cachedImages = caching(images)
  //   console.log(cachedImages.image0)

  useEffect(() => {
    AOS.init({duration:1200})
    
  },[])

    return (
      <section className="w-full direction-col-center bg-second">

        <div className="hidden direction-col w-[90%] max-w-[1080px] items-center text-center lg:direction-row mt-4 gap-2 ">

          <img className="w-[320px] h-[450px] rounded-[50px]" data-aos="fade-down" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/firstTattoo.jpeg?alt=media&token=4f2b67c5-9413-428f-8459-95dbbf45ba21" alt="" />
          <img className="w-[320px] h-[450px] rounded-[50px]" data-aos="fade-down"  data-aos-delay="200" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />
          <img className="w-[320px] h-[450px] rounded-[50px]" data-aos="fade-down"  data-aos-delay="300" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />

        </div>

        <Carousel className="mobile:relative mobile:bottom-16 lg:hidden w-full ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/firstTattoo.jpeg?alt=media&token=4f2b67c5-9413-428f-8459-95dbbf45ba21"
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

        <div className="w-[90%] max-w-[1080px] direction-col lg:mt-[3em]">
          <div className="titleBox ">
            <h1 className="title">Piercing</h1>
            
              <p className="subtitle">Com método de relaxamento</p>
            
          </div>

          <div className="w-full direction-col-center">
            <div className="w-full lg:w-[45%] h-[250px] direction-col-center bg-principal lg:mt-8 rounded-lg text-second">
                vídeo
            </div>
            <div className="w-full lg:w-[60%] lg:px-4">
              <p className="leading-7 mt-6 lg:mt-[4em] text-center">
                
                Nosso estúdio também oferece serviços de body piercing com profissionais capacitados. Utilizamos técnicas de relaxamento para tornar o processo de perfuração tranquilo e relaxante. Priorizamos sua comodidade e bem-estar durante todo o procedimento. Conte conosco para proporcionar uma experiência positiva e segura em cada etapa do seu caminho na arte corporal. Estamos aqui para transformar suas ideias em realidade.
              </p>
            </div>
          </div>


        </div>

        <div className="w-[90%] max-w-[1080px] direction-col lg:mt-[3em]">
          <div className="titleBox ">
            <h1 className="title">Sobre nós</h1>
            
              <p className="subtitle">Um pouco da nossa história</p>
            
          </div>

          <div className="w-full direction-col-center">

            <div className="w-full lg:w-[65%] px-2 lg:px-4">
              <p className="leading-7 text-center">
              Somos da marca Saddam, com 30 anos de experiência. Temos 5 artistas, cada um com suas especialidades. Metodologia moderna onde simulamos a arte no seu corpo através do Tablet, antes de tatuar. Ambiente 100% familiar, possuímos um espaço ZEN.
              </p>
            </div>
          </div>


        </div>
        <a className="title text-[1.3em] mt-8 hover:underline" href="https://www.instagram.com/stories/highlights/17998672660934026/">Assista mais sobre nossa história</a>
      </section>
    );
  }
  
  export default AboutUs;
  