import { Carousel, IconButton } from "@material-tailwind/react";
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

          <Carousel autoplay={true} autoplayDelay={5000} loop={true} 	transition={ { duration: 1 } }
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
            {
              coments.map(coment => {
                return(
                  <div className="w-full direction-col-center">
                    
                    <div className="w-[85%] h-[600px] lg:h-[320px] px-[1em] lg:px-[2em] direction-col bg-second rounded-[27px] shadow-md shadow-details">
                      <p className="text-details text-[1.2em] text-center lg:text-left">{coment.name}</p>
                      <span className="lg:ml-1 mb-4 text-center lg:text-left">⭐ ⭐ ⭐ ⭐ ⭐</span>
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
  