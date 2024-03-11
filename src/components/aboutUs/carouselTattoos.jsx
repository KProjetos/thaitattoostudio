import { Carousel } from "@material-tailwind/react";
import data_tattos from "./tattooList.js";

function CarouselTattoo(){
    const tattos = data_tattos.tattoos();
    return(

      <div className="w-full direction-col-center">
        <div className="w-[90%] max-w-[1080px] grid grid-cols-3">
          
          {tattos.map(image => {
            return(
              <img className="w-[350px] h-[350px] object-fill" src={image.image} alt={image.name} />
            )
          })}
        </div>

      </div>
    )
}
export default CarouselTattoo