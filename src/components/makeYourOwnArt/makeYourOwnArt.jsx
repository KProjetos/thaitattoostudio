import { useEffect } from 'react';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

function MakeYourOwnArt() {

  useEffect(() => {
    AOS.init({duration:1200})
  })

    return (
      <section className="w-full direction-col-center pt-10 bg-principal text-second">
        <div className="w-[90%] max-w-[1080px] direction-col">
          <div className="titleBox">
            <h1 className="title">Faça sua própria arte</h1>
            <p className="subtitle text-second">Eternize um significado, uma arte, ou uma homenagem. Desenhe sua história.</p>
          </div>

          <div className="w-full direction-col lg:direction-row">
            <div className="w-full lg:w-[45%] h-[250px] direction-col-center bg-second text-principal lg:mt-8 my-6 rounded-lg">
              vídeo
            </div>
            <div className="w-full lg:w-[45%] px-2 lg:px-4">
              <p>
              No nosso estúdio, cada tatuagem é uma obra de arte exclusiva, criada sob medida para contar a sua história. Utilizamos tablets para simular a tatuagem na sua pele antes mesmo do primeiro traço, assegurando que cada detalhe esteja perfeitamente alinhado. Aqui, não seguimos tendências, nós as criamos. Sua expressão, nossa paixão.
              </p>
            </div>
          </div>

          <div className="w-full direction-col text-center lg:direction-row relative top-16 gap-4 lg:gap-0 z-50">

          <div data-aos="fade-down" className="w-full lg:w-[28%] px-2 lg:px-4 flex flex-row items-center justify-start p-4 rounded-lg gap-3 bg-white shadow-md shadow-details">
            <div className="text-details text-[1.7em]">1.</div>
            <div className="text-principal">Criação de arte exclusiva</div>
          </div>
          <div data-aos="fade-down"  data-aos-delay="200" className="w-full lg:w-[28%] px-2 lg:px-4 flex flex-row items-center justify-start p-4 rounded-lg gap-3 bg-white shadow-md shadow-details lg:relative lg:top-6">
            <div className="text-details text-[1.7em]">2.</div>
            <div className="text-principal">Simulação da arte na sua pele</div>
          </div>
          <div data-aos="fade-down"  data-aos-delay="300" className="w-full lg:w-[28%] px-2 lg:px-4 flex flex-row items-center justify-start p-4 rounded-lg gap-3 bg-white shadow-md shadow-details">
            <div className="text-details text-[1.7em]">3.</div>
            <div className="text-principal" >Texto</div>    
          </div>

        </div>

        </div>
        
      </section>
    );
  }
  
  export default MakeYourOwnArt;
  