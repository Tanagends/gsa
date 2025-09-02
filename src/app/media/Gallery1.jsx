import { PrismicNextImage } from '@prismicio/next';
import dynamic from 'next/dynamic';

const ImageFull = dynamic(() => import('./imageFull'), { ssr: false });

const Gallery = ({ images }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden bg-gray-200">
            <PrismicNextImage
              field={image.data.image}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
            <ImageFull image={image.data.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
