import Image from "next/image";

const Service =()=>{
    return(
        <div id="service">
        <div className="px-4 sm:px-16 font-[sans-serif]">
        <h5 className="text-2xl text-center py-8 uppercase font-bold pb-5 text-[#F62459]"> our Service </h5>
        <p className="text-[#596277] text-justify sm:text-center pb-6 leading-relaxed   ">
        Export from any website like alibaba.com Ebay.com or any website you went. 
             
            </p>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 py-7">
  <div className="relative text-center rounded-lg p-5 rounded-sm bg-cover" style={{ backgroundImage: "url('/img/handshake.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
    <div className="relative z-10"> {/* Content Wrapper */}
       <div className="flex justify-center py-2"><Image src="/img/stock-market.png" className="h-20 w-20" alt="icon-img" width={400} height={400}/></div>
        <h3 className="text-white text-xl font-semibold mb-3">Global Trade Facilitation</h3>
        <p className="text-white text-sm">Streamlining international trade processes to ensure efficient and timely deliveries.</p>
    </div>
</div>


<div className="relative text-center rounded-lg p-5 rounded-sm bg-cover" style={{ backgroundImage: "url('/img/Image-3.jpeg')" }}>
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
    <div className="relative z-10"> {/* Content Wrapper */}
       <div className="flex justify-center py-2"><Image src="/img/customs-clearance.png" className="h-20 w-20" alt="icon-img" width={400} height={400}/></div>
        <h3 className="text-white text-xl font-semibold mb-3">Customs Clearance Expertise</h3>
        <p className="text-white text-sm">Navigating customs regulations and paperwork for hassle-free imports and exports.</p>
    </div>
</div>

<div className="relative text-center rounded-lg p-5 rounded-sm bg-cover" style={{ backgroundImage: "url('/img/strategic-sourcing-solutions-for-the-retail-indust.jpeg')" }}>
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
    <div className="relative z-10"> {/* Content Wrapper */}
       <div className="flex justify-center py-2"><Image src="/img/sourcing.png" className="h-20 w-20" alt="icon-img" width={400} height={400}/></div>
        <h3 className="text-white text-xl font-semibold mb-3">Sourcing and Procurement Services</h3>
        <p className="text-white text-sm">Assisting businesses in sourcing quality products from global suppliers.</p>
    </div>
</div>

<div className="relative text-center rounded-lg p-5 rounded-sm bg-cover" style={{ backgroundImage: "url('/img/images (1).jfif')" }}>
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
    <div className="relative z-10"> {/* Content Wrapper */}
       <div className="flex justify-center py-2"><Image src="/img/quality-assurance.png" className="h-20 w-20" alt="icon-img" width={400} height={400}/></div>
        <h3 className="text-white text-xl font-semibold mb-3">Product Quality Assurance</h3>
        <p className="text-white text-sm">Ensuring product quality through inspections and testing before shipment.</p>
    </div>
</div>

<div className="relative text-center rounded-lg p-5 rounded-sm bg-cover" style={{ backgroundImage: "url('/img/international-shipping.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
    <div className="relative z-10"> {/* Content Wrapper */}
       <div className="flex justify-center py-2"><Image src="/img/transportation.png" className="h-20 w-20" alt="icon-img" width={400} height={400}/></div>
        <h3 className="text-white text-xl font-semibold mb-3">International Freight Forwarding</h3>
        <p className="text-white text-sm">Reliable shipping solutions with a focus on speed and cost-effectiveness.</p>
    </div>
</div>

<div className="relative text-center rounded-lg p-5 rounded-sm bg-cover" style={{ backgroundImage: "url('/img/img.jfif')" }}>
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
    <div className="relative z-10"> {/* Content Wrapper */}
       <div className="flex justify-center py-2"><Image src="/img/warehouse.png" className="h-20 w-20" alt="icon-img" width={400} height={400}/></div>
        <h3 className="text-white text-xl font-semibold mb-3">Warehousing and Distribution</h3>
        <p className="text-white text-sm">Secure storage and efficient distribution solutions for your products.</p>
    </div>
</div>
  </div>
</div>

        </div>
    )
}
export default Service ;