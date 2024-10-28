
const About = () => {
    return (
      <div
        className="bg-cover bg-center grid grid-cols-1 sm:grid-cols-2 " id="about"
        style={{ backgroundImage: "url('/img/bg-shape.png')" }}
      >
        <div className="relative px-4 sm:px-16 py-8 sm:pb-20 bg-gray-100/90">
          {/* Section Title */}
          <div className="mb-12">
            <h5 className="text-2xl uppercase font-bold pb-5 text-[#F62459]">About us</h5>
            <h2 className="text-[#1a2d4e] lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px] text-justify">
              Export and general supplies domestic and international.
            </h2>
            <p className="text-[#596277] mt-6  leading-relaxed text-justify  ">
            Providing a comprehensive range of export and general supply solutions for both domestic and international markets. Our services are tailored to meet the diverse needs of our clients, ensuring reliable and efficient delivery for all types of products, wherever they&aposre needed
             
            </p>
          </div>
  
          {/* Features */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-start gap-4">
              <div>
                <img src="https://themexriver.com/wp/logistify/wp-content/uploads/2024/09/illus-1.svg" alt="Icon 1" className="w-12 h-12" />
              </div>
              <div>
                <p className=" text-[#596277] text-justify">At saima international, we are your premier partner for global export and supply solutions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <img src="https://themexriver.com/wp/logistify/wp-content/uploads/2024/09/illus-2.svg" alt="Icon 2" className="w-12 h-12" />
              </div>
              <div>
                <p className="text-[#596277] text-justify">At Saima International, we are dedicated to being your reliable partner for both global and domestic supply solutions.</p>
              </div>
            </div>
          </div>
  
          
        </div>
  
        {/* Placeholder for additional content */}
        <div className="relative hidden sm:block p-14 bg-gray-100/90">
      
        <div className="relative flex justify-end items-center">
  {/* First image */}
  <img
    src="/img/circle-shape.webp"
    alt="Icon 1"
    className="h-96 relative "
  />
  {/* Second image on top of the first */}
  <img
    src="/img/ship.webp"
    alt="Icon 2"
    className=" mt-52 absolute right-0 transform translate-x-2"
  />
</div>

        </div>
      </div>
    );
  };
  
  export default About;
  