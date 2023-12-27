import { Carousel } from "@material-tailwind/react";
import data_coments from "./comentsList.js";


function Coments() {

    const coments = data_coments.coments();


    return (
      <section className="w-full direction-col-center bg-principal">
        <div className="w-[90%] max-w-[1080px] direction-col">
          <div className="titleBox ">
            <h1 className="title">Quem conhece,</h1>
            <p className="subtitle text-second">Recomenda</p>
          </div>

          <Carousel className="rounded-xl py-8">

            {
              coments.map(coment => {
                return(
                  <div className="w-full direction-col-center">
                    <div className="w-[65%] h-[350px] lg:h-[250px] px-[1em] lg:px-[2em] direction-col bg-second rounded-[27px] shadow-md shadow-details">
                      <p className="text-details text-[1.2em] mb-4 text-center lg:text-left">{coment.name}</p>
                      <p className="text-[1.2em] text-center">"{coment.coment}"</p>
                    </div>
                  </div>
                )
              })
            }

          </Carousel>
        </div>

        
      </section>
    );
  }
  
  export default Coments;
  