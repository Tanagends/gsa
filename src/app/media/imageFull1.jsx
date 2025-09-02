'use client';
import { useState } from 'react';
import { PrismicNextImage } from '@prismicio/next';

const ImageFull = ({ image }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      <button onClick={openFullScreen} className="absolute bottom-12 -right-6 btn-main">
        View
      </button>
      {isFullScreen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <PrismicNextImage
            field={image}
            className="w-full h-full max-w-4xl max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default ImageFull;
