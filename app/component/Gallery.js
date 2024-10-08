

'use client';
import { useState } from 'react';
import Image from 'next/image';

const GalleryWithModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    { src: '/img/6.jpg', alt: 'Gallery Image 5' },
    { src: '/img/2.jpg', alt: 'Gallery Image 1' },
    { src: '/img/gellary (1).png', alt: 'Gallery Image 2' },
    { src: '/img/gellary (5).jpg', alt: 'Gallery Image 6' },
    { src: '/img/gellary (4).jpg', alt: 'Gallery Image 7' },
    { src: '/img/gellary (3).jpg', alt: 'Gallery Image 3' },
    { src: '/img/gellary (2).jpg', alt: 'Gallery Image 4' },
    { src: '/img/gellary (1).jpg', alt: 'Gallery Image 8' },
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="bg-slate-100 py-5 px-4 sm:px-20">
       <h1 className="text-lg lg:text-2xl font-bold mb-4 text-[#404A3D] text-center uppercase sm:py-7 ">Our Photo Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group cursor-pointer wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
            <a onClick={() => handleImageClick(image.src)} className="cursor-pointer">
              <Image
                className="img-fluid object-cover w-full h-32 sm:h-56"
                src={image.src}
                alt={image.alt}
                width={400} // Specify the width
                height={300} // Specify the height
                // Ensure the image is responsive
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg">View Image</span>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Modal Image"
              width={800}
              height={600}
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWithModal;
