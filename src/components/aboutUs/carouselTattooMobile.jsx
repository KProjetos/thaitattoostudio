import { Carousel } from "@material-tailwind/react";
import data_tattos from "./tattooList.js";
function CarouselTattooMobile(){
    const tattos = data_tattos.tattoos();
    return(
        <Carousel autoplay={true} autoplayDelay={5000} loop={true} 	transition={ { duration: 1 } } className="mobile:relative mobile:bottom-16 lg:hidden w-full max-w-[520px]">
        
        {
            tattos.map(element => {
                return (
                    <div className="w-full direction-row text-white">
                        <img
                        src={element.image}
                        alt={element.name}
                        className="h-[500px] w-full object-cover"
                        />
                        <p className="absolute top-[3em] py-2 px-4 bg-black/80 rounded-lg">
                        {element.name}
                        </p>
                    </div>
                )

            })
        }
      </Carousel>
    )
}

export default CarouselTattooMobile