
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="relative px-4 sm:px-20 text-white pt-5 mt-5" style={{
            backgroundImage: "url('/img/sl_112119_25250_25.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="absolute inset-0 bg-black opacity-90"></div>
            <div className='relative'>
                <div className=" container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Address Section */}
                        <div>
                        <Image  src="/img/saima-logo.png" alt="" width={400} height={400}/>
                            <p className="py-3">Welcome to Saima International and enjoy our services.</p>
                            <div className="flex pt-2">
                                <a className="mr-2 border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#F62459]" href=""><FaTwitter /></a>
                                <a className="mr-2 border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#F62459]" href=""><FaFacebookF /></a>
                                <a className="mr-2 border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#F62459]" href=""><FaYoutube /></a>
                                <a className='border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#F62459]' href=""><FaLinkedinIn /></a>
                            </div>
                        </div>

                        {/* Opening Hours Section */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4 uppercase">RECENT POSTS</h4>
                            <ul class="image-list">
              <li className="flex gap-5">
                <figure className="overlay">
                  <Image className="img-fluid h-16 w-20" src="/img/a1.jpg" alt="" width={400} height={400}/>
                </figure>
                <div className="post-content">
                  <h6 className="post-title text-sm"><a href="blog-single.html">Saima International</a> </h6>
                  <div className="meta text-sm pt-2 text-slate-500"><span className="date">Nov 19, 2019</span></div>
                </div>
              </li>
            </ul>
                        </div>

                        {/* Services Section */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4 uppercase">Quick Links</h4>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"#"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">SM Foreign Consultancy</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"#"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">Samir Textile Pvt. Ltd.</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"#"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">SM Motor Corporation</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"#"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">Samir Tex</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"#"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest"> Saimon Agro & Fisheries.</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"#"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest"> Saima International.</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"#"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">Saif Air International</Link>
                            </li>
                            




                        </div>

                        {/* Newsletter Section */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4 uppercase"> Subscribe Us</h4>
                           
                            <div className="relative mx-auto " style={{ maxWidth: '400px' }}>
                                <input className="form-input rounded-md border-0 w-full py-4 pl-4 pr-10 text-[#596277] outline-none placeholder:text-[#596277]" type="text" placeholder="Your email" />
                                <button type="button" className="absolute top-0 rounded-md right-0 mr-2 bg-[#F62459] text-white mt-2  py-2 px-4 uppercase">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="container mx-auto">
                    <div className="border-t border-gray-700 py-4">
                        <div className="sm:flex justify-between items-center">
                        <div className="text-center text-md-start mb-3 mb-md-0">
    &copy; <a className="border-b border-gray-400 hover:border-white" href="#" target="_blank"> </a>  
    Designed and Developed by   

    <Link className="border-b border-gray-400 hover:border-white font-semibold ml-2" href={"https://www.pnhbd.com/"} target="_blank"> 
         PnH Corporation
    </Link>
</div>

                            <div className="text-center text-md-end">
                                <div className="footer-menu">
                                    <a className=" mr-4" href="">Home</a>
                                    <a className=" mr-4" href="">Cookies</a>
                                    <a className=" mr-4" href="">Help</a>
                                    <a className="" href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
