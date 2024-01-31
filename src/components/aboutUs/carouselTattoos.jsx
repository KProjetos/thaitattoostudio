import { Carousel } from "@material-tailwind/react";
import data_tattos from "./tattooList.js";

function CarouselTattoo(){
    const tattos = data_tattos.tattoos();
    return(
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
            <p className=" py-2 px-4 bg-black/80 rounded-lg">
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
    )
}
export default CarouselTattoo