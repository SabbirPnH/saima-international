import { FaChevronRight } from "react-icons/fa";
const HeroSection =()=>{
    return(
        <div className="bg-[#EBEFF3]">
            <div className="font-sans pt-4 sm:py-12 overflow-hidden">
      <div className="px-4 sm:px-16">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-[#1a2d4e] lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">Your Dedicated Partner in Logistics</h2>
            <p className="text-[#596277] mt-6  leading-relaxed text-justify ">Streamlining your logistics with tailored transportation solutions, ensuring timely deliveries and exceptional service worldwide.</p>
            <div className="mt-12">
              <button type='button'
                className="bg-[#F62459] hover:bg-[#1a2d4e] text-white transition-all font-bold text-md rounded px-5 py-3">Learn More <FaChevronRight className="inline-flex" /></button>
             
            </div>
          </div>

          <div>
            <img src='/img/hero-1-img-1__1_-removebg-preview.png' className="" />
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
export default HeroSection;