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
            <p className="subtitle text-second">Eternize uma arte, ou uma homenagem.</p>
          </div>

          <div className="w-full direction-col lg:direction-row mt-8">
            <div className="w-full lg:w-[45%] h-[250px] direction-col-center rounded-lg">
              <video preload="none" controls className='w-full  h-[350px] direction-col-center  text-principal lg:mt-8 my-6 rounded-lg'>
                <source src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/videoTattoo.mp4?alt=media&token=448778ca-e988-4e93-b88e-42738266cf96"/>
              </video>
            </div>
            <div className="w-full lg:w-[45%] px-2 lg:px-4 mt-6 lg:mt-0">
              <p className='leading-7'>
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
            <div className="text-principal" >Agendamento da sessão</div>    
          </div>

        </div>

        </div>
        
      </section>
    );
  }
  
  export default MakeYourOwnArt;
  