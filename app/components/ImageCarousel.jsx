import React, { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ images, mainTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHideInfo, setShowHideInfo] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleImageClick = () => {
    setShowHideInfo(!showHideInfo);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (carouselRef.current.requestFullscreen) {
        carouselRef.current.requestFullscreen();
      } else if (carouselRef.current.mozRequestFullScreen) { // Firefox
        carouselRef.current.mozRequestFullScreen();
      } else if (carouselRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
        carouselRef.current.webkitRequestFullscreen();
      } else if (carouselRef.current.msRequestFullscreen) { // IE/Edge
        carouselRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextClick();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      handlePrevClick();
    }
  };

  return (
    <div ref={carouselRef} className="relative w-full max-w-lg mx-auto flex items-center justify-center overflow-hidden">
      <button
        className="absolute left-0 menu-background text-white font-black p-2 z-20 m-2"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <div
        className="relative flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: '100%' }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center relative mt-10 mb-10">
            <img
              src={image.url}
              className={`m-4 ${isFullscreen ? 'max-h-[90vh] max-w-[90vw]' : 'max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'}`}
              alt={`carousel image ${index + 1}`}
              onClick={handleImageClick}
              onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd} 
            />
                
            {showHideInfo && (
              <div className="absolute bottom-0 mb-2 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                {image.description}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 menu-background text-white font-black p-2 z-20 m-2"
        onClick={handleNextClick}
      >
        &gt;
      </button>
      
      {showHideInfo && (
        <h3 className="absolute top-0 bg-black bg-opacity-50 text-white font-bold p-2 w-full text-center">{mainTitle}</h3>
      )}
       <button
        className="absolute top-0 left-0 text-white font-black p-2 z-20 m-2"
        onClick={toggleFullscreen}
      >
        ⛶
      </button>
    </div>
  );
};

export default ImageCarousel;