import React from "react";
import Image from "next/image";

const CardSection = () => {  
  return (
    <section className="bg-[#FAF4F4]  h-auto p-5 flex flex-raw gap-5 justify-center mx-auto">
      {/* Card 1 */}
      <div className="bg-[#FAF4F4] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/shop/Granite square side table 1.png"
            alt="Granite square side table"
            width={275}
            height={275}
            className="object-cover"
          />
        </div>
        <h5 className="font-bold text-[20px] mt-2 ml-12">Side table</h5>
        <p className="mt-2 ml-12  text-black font-semibold border-b-2 border-black hover:text-gray-700 w-max">
          View More
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#FAF4F4] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/shop/Cloud sofa three seater + ottoman_3 1.png"
            alt="Cloud sofa three seater"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <h5 className="font-bold text-[20px] mt-2  ml-12">Side table</h5>
        <p className="mt-2 ml-12 text-black font-semibold border-b-2 border-black hover:text-gray-700 w-max">
          View More
        </p>
      </div>
    </section>
  );
};

export default CardSection;
