import Image from 'next/image';
import galleryData from '../data/gallery.json';

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryData.images.map((image) => (
        <div key={image.id} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
            <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
              {image.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

