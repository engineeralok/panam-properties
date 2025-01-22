import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-[16/9] overflow-hidden rounded-xl">
        <img
          src={images[currentImage]}
          alt={`Property image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={previousImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="mt-4 grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`aspect-square rounded-lg overflow-hidden ${
              currentImage === index ? 'ring-2 ring-purple-600' : ''
            }`}
          >
            <img
              src={image}
              alt={`Property thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}