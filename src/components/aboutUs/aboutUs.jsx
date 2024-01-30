import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";
import IconAmbiente from "../faq/arrowAmbiente.jsx";
import data_tattos from "./tattooList.js";
import data_piercings from "./piercingList.js";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  const tattos = data_tattos.tattoos();
  const piercings = data_piercings.piercings();


  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="w-full direction-col-center bg-second">
      
      <div className="hidden direction-col w-[90%] max-w-[1080px] items-center text-center lg:direction-row mt-4 gap-2 ">
        <Carousel autoplay={true} autoplayDelay={5000} loop={true} 	transition={ { duration: 1 } }>
          <div>
            <div>
              <div className="w-full direction-row">
                <img
                  className="w-[33.33%] h-[425px]"
                  data-aos="fade-down"
                  src={tattos[0].image}
                  alt={tattos[0].name}
                />
                <img
                  className="w-[33.33%] h-[425px]"
                  data-aos="fade-down"
                  src={tattos[1].image}
                  alt={tattos[1].name}
                />
                <img
                  className="w-[33.33%] h-[425px]"
                  data-aos="fade-down"
                  src={tattos[2].image}
                  alt={tattos[2].name}
                />
              </div>
              <div className="w-full direction-row justify-around absolute top-[2em] text-white ">
                <p className="py-2 px-4 bg-black/80 rounded-lg">
                  {tattos[0].name}
                </p>
                <p className=" py-2 px-4 bg-black/80 rounded-lg">
                  {tattos[1].name}
                </p>
                <p className=" py-2 px-4 bg-black/80 rounded-lg">
                  {tattos[2].name}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full direction-row">
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[3].image}
                alt={tattos[3].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[4].image}
                alt={tattos[4].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[5].image}
                alt={tattos[5].name}
              />
            </div>
            <div className="w-full direction-row justify-around absolute top-[2em] text-white ">
              <p className="py-2 px-4 bg-black/80 rounded-lg">
                {tattos[3].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[4].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[5].name}
              </p>
            </div>
          </div>

          <div>
            <div className="w-full direction-row">
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[6].image}
                alt={tattos[6].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[7].image}
                alt={tattos[7].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[8].image}
                alt={tattos[8].name}
              />
            </div>
            <div className="w-full direction-row justify-around absolute top-[2em] text-white ">
              <p className="py-2 px-4 bg-black/80 rounded-lg">
                {tattos[6].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[7].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[8].name}
              </p>
            </div>
          </div>

          <div>
            <div className="w-full direction-row">
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[9].image}
                alt={tattos[9].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[10].image}
                alt={tattos[10].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[11].image}
                alt={tattos[11].name}
              />
            </div>
            <div className="w-full direction-row justify-around absolute top-[2em] text-white ">
              <p className="py-2 px-4 bg-black/80 rounded-lg">
                {tattos[9].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[10].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[11].name}
              </p>
            </div>
          </div>

          <div>
            <div className="w-full direction-row">
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[12].image}
                alt={tattos[12].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[13].image}
                alt={tattos[13].name}
              />
              <img
                className="w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[14].image}
                alt={tattos[14].name}
              />
            </div>
            <div className="w-full direction-row justify-around absolute top-[2em] text-white ">
              <p className="py-2 px-4 bg-black/80 rounded-lg">
                {tattos[12].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[13].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[14].name}
              </p>
            </div>
          </div>

          <div>
            <div className="w-full direction-row">
              <img
                className="max-w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[15].image}
                alt={tattos[15].name}
              />
              <img
                className="max-w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[16].image}
                alt={tattos[16].name}
              />
              <img
                className="max-w-[33.33%] h-[425px]"
                data-aos="fade-down"
                src={tattos[17].image}
                alt={tattos[17].name}
              />
            </div>
            <div className="w-full direction-row justify-around absolute top-[2em] text-white ">
            <p className="py-2 px-4 bg-black/80 rounded-lg">
                {tattos[15].name}
              </p>
              <p className=" py-2 px-4 bg-black/80 rounded-lg">
                {tattos[16].name}
              </p>
              <p className=" py-2 px-4">
              
              </p>

            </div>
          </div>
        </Carousel>
      </div>

      <Carousel autoplay={true} autoplayDelay={5000} loop={true} 	transition={ { duration: 1 } } className="mobile:relative mobile:bottom-16 lg:hidden w-full max-w-[520px]">
        <div className="w-full direction-row text-white">
          <img
            src={tattos[0].image}
            alt={tattos[0].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[0].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[1].image}
            alt={tattos[1].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[1].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[2].image}
            alt={tattos[2].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[2].name}
          </p>
        </div>
        <div className="w-full direction-row text-white">
          <img
            src={tattos[3].image}
            alt={tattos[3].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[3].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[4].image}
            alt={tattos[4].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[4].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[5].image}
            alt={tattos[5].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[5].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[6].image}
            alt={tattos[6].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[6].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[7].image}
            alt={tattos[7].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[7].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[8].image}
            alt={tattos[8].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[8].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[9].image}
            alt={tattos[9].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[9].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[10].image}
            alt={tattos[10].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[10].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[11].image}
            alt={tattos[11].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[11].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[12].image}
            alt={tattos[12].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[12].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[13].image}
            alt={tattos[13].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[13].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[14].image}
            alt={tattos[14].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[14].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[15].image}
            alt={tattos[15].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[15].name}
          </p>
        </div>

        <div className="w-full direction-row text-white">
          <img
            src={tattos[16].image}
            alt={tattos[16].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[16].name}
          </p>
        </div>
        <div className="w-full direction-row text-white">
          <img
            src={tattos[17].image}
            alt={tattos[17].name}
            className="h-[500px] w-full object-cover"
          />
          <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
            {tattos[17].name}
          </p>
        </div>
      </Carousel>
      

      <div className="w-[90%] max-w-[1080px] direction-col lg:mt-[3em]">
        <div className="titleBox ">
          <h1 className="title">Piercing</h1>

          <p className="subtitle">Com método de relaxamento</p>
        </div>

        <div className="w-full direction-col-center">
          <div className="w-full lg:w-[45%] h-[250px] direction-col-center bg-principal lg:mt-8 rounded-lg text-second">
            <video preload="none" controls className='w-full  h-[350px] direction-col-center  text-principal lg:mt-8 my-6 rounded-lg'>
                <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/videoPiercing.mp4?alt=media&token=7f7503b9-bbdf-4aa3-8d79-5048c061af16"/>
            </video>
          </div>
        </div>
      </div>


      <div className="w-full direction-col-center flex-col-reverse lg:py-0 bg-principal text-white">
        
        <Carousel className="lg:hidden w-full max-w-[520px]">
            <img
                className="w-full max-w-[520px] overflow-hidden object-contain"
                data-aos="fade-down"
                src={piercings[0].image}
                alt={piercings[0].name}
            />
            <img
                className="w-full max-w-[520px] overflow-hidden object-contain "
                data-aos="fade-down"
                src={piercings[1].image}
                alt={piercings[1].name}
            />
            <img
                className="w-full max-w-[520px] overflow-hidden object-contain "
                data-aos="fade-down"
                src={piercings[2].image}
                alt={piercings[2].name}
            />
            <img
                className="w-full max-w-[520px] overflow-hidden object-contain"
                data-aos="fade-down"
                src={piercings[3].image}
                alt={piercings[3].name}
            />
            
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
      <a
        className="title text-[1.3em] mt-8 hover:underline"
        href="https://www.instagram.com/stories/highlights/17998672660934026/"
      >
        Assista mais sobre nossa história
      </a>
    </section>
  );
}

export default AboutUs;
