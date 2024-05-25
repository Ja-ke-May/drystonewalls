import React, { useState } from 'react';

const ImageCarousel = ({ images, mainTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center overflow-hidden">
      <button
        className="absolute left-0 bg-green-800 text-white p-2 rounded-full z-20 m-2"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <div
        className="relative flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: '100%' }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center relative">
            <img
              src={image.url}
              className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
              alt={`carousel image ${index + 1}`}
            />
             
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
              {image.description}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 bg-green-800 text-white p-2 rounded-full z-20 m-2"
        onClick={handleNextClick}
      >
        &gt;
      </button>
      
      <h3 className="absolute top-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">{mainTitle}</h3>
    </div>
  );
};

export default ImageCarousel;
