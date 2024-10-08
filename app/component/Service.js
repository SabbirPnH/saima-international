
import Link from "next/link";
import React from "react";

const Service = () => {
  return (


<div className="px-4 sm:px-20">
<h6 className="text-[#5B8C51] sm:pb-10 text-lg font-semibold uppercase flex justify-center bg-white inline-block  py-1 rounded  pt-3 sm:pt-0 sm:mb-2">Our Services</h6>
<div className=" flex flex-wrap ">
  <div className="w-full md:w-1/2  animated fadeInLeft">
    <div className="mb-6">
    </div>
    <div className="mb-6">
      <h2 className="text-lg lg:text-2xl font-bold mb-4 text-[#404A3D] text-justify uppercase">Start Your Urban Farming Journey Today!</h2>
    </div>
    <div className="mb-6">
      <p className="text-gray-700 text-justify">
      Urban farming is more than just a trend it&aposs a sustainable lifestyle choice that allows you to grow your own fresh, organic produce right from your balcony, rooftop, or backyard. Whether you&aposre living in the heart of the city or a suburban area, you can transform small spaces into flourishing gardens filled with vegetables, herbs, and even fruits.
      </p>
    </div>
    <div className="mb-4">
  <div className="mb-2">
    {/* Flex container to align percentage and label */}
    <div className="flex justify-between mb-4">
      <span className="font-semibold">Urban Food Security Rates</span>
      <span className="ml-2">57%</span>
    </div>
    
    {/* Progress bar */}
    <div className="relative w-full h-2 bg-gray-200 rounded">
      <div
        className="absolute top-0 left-0 h-2 bg-[#5B8C51] rounded"
        style={{ width: '57%' }} // 57% width for 57% progress
      />
    </div>
  </div>
</div>
<div className="mb-4">
  <div className="mb-2">
    {/* Flex container to align percentage and label */}
    <div className="flex justify-between mb-4">
      <span className=" font-semibold ">Community Engagement and Participation</span>
      <span className="ml-2">65%</span>
    </div>
    
    {/* Progress bar */}
    <div className="relative w-full h-2 bg-gray-200 rounded">
      <div
        className="absolute top-0 left-0 h-2 bg-[#5B8C51] rounded"
        style={{ width: '65%' }} // 87% width for 87% progress
      />
    </div>
  </div>
</div>
<div className="mb-4">
  <div className="mb-2">
    {/* Flex container to align percentage and label */}
    <div className="flex justify-between mb-4">
      <span className="font-semibold">Produce Yield and Crop Quality Improvement</span>
      <span className="ml-2">81%</span>
    </div>
    
    {/* Progress bar */}
    <div className="relative w-full h-2 bg-gray-200 rounded">
      <div
        className="absolute top-0 left-0 h-2 bg-[#5B8C51] rounded"
        style={{ width: '81%' }} // 25% width for 25% progress
      />
    </div>
  </div>
</div>

    <div className="my-5 sm:mt-8 ">
    <Link href={"/service"} className="bg-[#EDDD5E] rounded-full py-3 px-6 text-lg hover:text-black  text-[#404A3D]">Read More</Link>
    </div>
  </div>
  <div className="w-full md:w-1/2 sm:px-4">
    <div className="mb-6 animated fadeInUp">
      <img className="w-full h-auto rounded sm:pt-8" src="https://demo.creativemox.com/urbangrove/wp-content/uploads/sites/5/2023/09/woman-in-a-apron-working-in-a-greenhouse-e1694264229766.jpg" alt="Woman in a apron working in a greenhouse" />
    </div>
    <div className="absolute -top-16 left-4">
      <div className="bg-white p-4 rounded shadow-lg">
        <div className="flex items-center mb-4">
          <span className="text-green-500 text-3xl">
            <i className="fas fa-seedling" />
          </span>
          <div className="ml-2">
            <h3 className="text-lg font-semibold">Discover the Future of Agriculture</h3>
            <p className="text-gray-600">Gravida rutrum metus erat porta natoque consectetuer lorem luctus sapien pretium felis</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
)};

export default Service;
