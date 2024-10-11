



import { FaSeedling, FaDrumstickBite } from 'react-icons/fa'; 
import React from "react";
import PropTypes from "prop-types";
import { FaChevronCircleRight } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';
export async function generateMetadata() {
  return {
    title: 'Welcome | Samir Group ',
    description: "Generated by create Service Page",
  }
}


const blogs = [
	{
		title: "Crop Management Services",
		description:
			" involves a range of agricultural practices aimed at optimizing the production of crops while maintaining sustainability.",
		author: "David Miller",
		image: "/img/service (3).jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Pest Control",
		description:
			"Are you asking for information about pest control services, how pest control works, or something else? Let me know how I can assist you!",
		author: "Shawn Paul",
		image: "/img/service (4).jpg",
		date: "26",
		month: "Oct",
		year: "2019",
	},
	{
		title: "Irrigation Systems",
		description:
			" Water is distributed over the surface of the land by gravity. It is one of the oldest and most common methods of irrigation.",
		author: "Elleca Perry",
		image: "/img/service (5).jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Dairy Production",
		description:
			" The most common dairy animal worldwide, known for producing large quantities of milk.",
		author: "Elleca Perry",
		image: "/img/service-img-05-770x570.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Organic Vegetables",
		description:
			" Organic vegetables are grown using farming practices that prioritize natural processes and prohibit the use of synthetic chemicals",
		author: "Elleca Perry",
		image: "/img/service-img-09-770x570.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Soil Fertilization",
		description:
			" Soil fertilization is the process of adding nutrients to the soil to improve its fertility and promote healthy plant growth.",
		author: "Elleca Perry",
		image: "/img/service-img-03-770x570.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
];

const BlogItem = ({ blog }) => {
	const { title, description, author, date, month, year, image } = blog;

	return (
		<article className="rounded-lg">
			<div className="relative">
				<Image
					src={image}
					alt={title}
					className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
					width={400} height={400}
				/>
			</div>
			<div className="py-3">
				
				<h4 className="font-medium text-xl">{title}</h4>
				<p className="opacity-60 mt-3 mb-6">{description}</p>
				<a href="#" className="bg-[#EDDD5E] rounded-full py-2 px-4 text-lg hover:text-black  text-[#404A3D]">Learn More</a>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const ServicePage = () => {
	return (
		<div>
			 <div className="w-full bg-cover bg-center mb-5" style={{backgroundImage: 'url("/img/photorealistic-sustainable-garden-with-home-grown-plants.jpg")'}}>
<div className="bg-black/70  py-10 sm:py-24">
<div className="container mx-auto text-center">
  {/* Heading */}
  <h1 className=" text-4xl sm:text-6xl font-semibold text-white mb-3 animate-slide-in-down">
    Our Service
  </h1>
  {/* Breadcrumb Navigation */}
  <nav aria-label="breadcrumb">
    <ol className="flex justify-center items-center space-x-3 text-sm uppercase text-white pt-2">
      <li>
        <Link href={"/"} className="text-[#EDDD5E] text-lg">Home </Link>
      </li>
      <li><FaChevronCircleRight className="text-xl" /></li>
      <li className="text-white text-lg"> Service</li>
    </ol>
  </nav>
</div>
</div>
</div>
      <div className=" px-4 sm:px-20 flex flex-col md:flex-row space-y-8 md:space-y-0 pt-4">
              {/* First Column */}
              <div className="w-full md:w-1/2 space-y-6 animated fadeInLeft">
                  {/* Heading */}
                  
                  <div>
                      <h2 className="text-2xl font-bold text-justify pt-5">Navigate the Future of Agriculture with Farmica.</h2>
                  </div>
                  <div className="border-b border-gray-300 w-20"></div>
              </div>
  
              {/* Second Column - Icon Boxes */}
              <div className="w-full md:w-1/2 sm:flex gap-5 items-center  animated fadeInUp">
                  {/* Icon Box 1 */}
                  <div className="flex items-center space-x-4">
                      <div className="bg-[#5B8C51] p-4 rounded-full">
                          <FaSeedling className="text-white text-3xl" />
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold">100% Organic</h3>
                          <p className="text-gray-600 text-justify">Our food is grown without the use of synthetic pesticides, herbicides</p>
                      </div>
                  </div>
  
                  {/* Icon Box 2 */}
                  <div className="flex items-center space-x-4">
                      <div className="bg-red-500 p-4 rounded-full">
                          <FaDrumstickBite className="text-white text-3xl" />
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold">Premium Quality</h3>
                          <p className="text-gray-600 text-justify">From farm to table, we ensure that every product meets our high standards of quality.</p>
                      </div>
                  </div>
              </div>
          </div>
      <section className=" light  text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
			<div className=" px-4 sm:px-20">
				<div className="grid grid-cols-12 justify-center">
					
				</div>

				<div className="grid grid-cols-6 mt-12 gap-6">
					{blogs.map((blog, i) => (
						<div
							className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
							key={i}
						>
							<BlogItem blog={blog} />
						</div>
					))}
				</div>

				
			</div>
		</section>
    </div>
	);
};
export default ServicePage;
  
