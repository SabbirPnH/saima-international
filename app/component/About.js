import Image from "next/image";
import { RxBorderStyle } from "react-icons/rx";
export const About=()=>{
    return(
       <div className="px-4 sm:px-20 py-5 sm:py-12">
  <div className=" lg:flex lg:flex-row items-center gap-10">
    {/* Left Column (Image and Experience Section) */}
    <div className="w-full lg:w-1/2">
  <div className="grid grid-cols-2 gap-2">
    {/* Full-height experience block */}
    <div className="relative bg-[#EDDD5E] text-white rounded wow fadeIn h-full" data-wow-delay="0.7s">
    <div className="wow fadeIn h-full flex items-stretch" data-wow-delay="0.1s">
      <Image className="w-full object-cover rounded" src="/img/2.jpg" alt="Service 1" width={400} height={400}/>
    </div>
    </div>

    {/* Image blocks */}
    <div className="wow fadeIn h-full flex items-stretch" data-wow-delay="0.1s">
      <Image className="w-full object-cover rounded" src="/img/6.jpg" alt="Service 1" width={400} height={400}/>
    </div>
    <div className="wow fadeIn h-full flex items-stretch" data-wow-delay="0.3s">
      <Image className="w-full object-cover rounded" src="/img/14 (1).jpg" alt="Service 2" width={400} height={400}/>
    </div>
    <div className="wow fadeIn sm:h-72 flex items-stretch" data-wow-delay="0.5s">
      <Image className="w-full object-cover rounded" src="/img/4.jpg" alt="Service 3" width={400} height={400}/>
    </div>
  </div>
</div>


    {/* Right Column (Text Content) */}
    <div className="w-full lg:w-1/2 wow fadeIn" data-wow-delay="0.5s">
      <p className="text-[#5B8C51] text-lg font-semibold uppercase text-start bg-white inline-block  py-1 rounded  pt-3 sm:pt-0 sm:mb-2">About Us <RxBorderStyle  className="inline-flex text-2xl font-semibold"/></p>
      <h1 className="text-lg lg:text-2xl font-bold mb-4 text-[#404A3D] text-justify uppercase"> saimon agro & fisheries farm </h1>
      <p className="mb-4 text-[#404A3D] text-justify">is a concern of SAMIR GROUP and it is situated at Noakhali. The project is built on 35 acres of land. We are cultivating fish, Vegetables and Fruits. We have planned to establish a hatchery within this project. We have planned to export fresh water fish to other countries. Besides we have planned to establish a Beef Fattening, Cow Milking and Gardening farm like: Fruits and Vegetables, etc. within this project.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 mb-14">
        {/* First Feature Box */}
        <div>
          <Image className="w-16 h-16 mb-4" src="/img/service.png" alt="Dedicated Services" width={400} height={400}/>
          <h5 className="text-lg font-semibold mb-2 text-[#404A3D]">Dedicated Services</h5>
          <span className="text-justify">Providing consultation services to other farmers</span>
        </div>
        {/* Second Feature Box */}
        <div>
          <Image className="w-16 h-16 mb-4" src="/img/product.png" alt="Organic Products" width={400} height={400}/>
          <h5 className="text-lg font-semibold mb-2 text-[#404A3D]">Organic Products</h5>
          <span className="text-justify">Saimon Agro & Fisheries Farm could supply organic products.</span>
        </div>
      </div>
      <a href="#" className="bg-[#EDDD5E] rounded-full py-4 px-8 text-lg hover:text-black  text-[#404A3D]">Explore More</a>
    </div>
  </div>
</div>

 
    )
}