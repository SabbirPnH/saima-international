import Image from "next/image";
import { LuFish } from "react-icons/lu";
import { RxBorderStyle } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io"
const WhyUs = () => {
  return (
    <div className="px-4 sm:px-20 py-5 sm:pt-20 sm:pb-10">
      <div className="flex flex-wrap -mx-5">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 px-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-lg lg:text-2xl font-bold mb-4 text-[#404A3D] text-justify sm:text-left uppercase">
          Summary of the project is given below:
          </h1>
          
          <div className="flex items-center mb-3">
          <p className="text-justify text-md"><span className="font-bold">Corporate Office : </span> Wakil Tower(10th Floor) Ta-131,Gulshan Badda Link Road, Dhaka – 1212.</p>
          </div>
          <div className="flex items-center mb-3">
          <p className="text-justify text-md"><span className="font-bold">Legal Entity : </span> Proprietorship Farm.</p>
          </div>
          <div className="flex items-center mb-3">
          <p className="text-justify text-md"><span className="font-bold">Nature of business : </span> Fish culture, Hatchery, Beef Fattening, Cow Milking and Gardening for Fruits and Vegetables, etc.</p>
          </div>
          <div className="flex items-center mb-3">
          <p className="text-justify text-md"><span className="font-bold">Total Areas of Land : </span> 25 acres.</p>
          </div>
          <div className="flex items-center mb-3">
          <p className="text-justify text-md "><span className="font-bold">Present Status : </span> Successfully running.</p>
          </div>
          
        </div>

        {/* Right Side Cards */}
        <div className="w-full lg:w-1/2 px-5 mt-10 sm:mt-0">
        <div className="flex justify-center">
                    <Image
                      className="img-fluid w-full mb-4 object-contain"
                      src="/img/5.jpg"
                      alt="Experience"
                      width={70}
                      height={70}
                    />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;



