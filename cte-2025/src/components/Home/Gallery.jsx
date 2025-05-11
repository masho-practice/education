import React from "react";
import { photos } from "../../data/data";
import GalleryCard from "./GalleryCard";
const Gallery = () => {
  return (
    <div className="my-16">
      <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto ">
        <h1 className="text-2xl font-extrabold text-center my-5 sm:text-3xl md:text-4xl text-purple-900 ">Gallery</h1>
        <p className="text-purple-700 text-lg mb-8">Explore highlights from previous INSA National Ethio Cyber Talent Summer Camps.</p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3  mx-auto">
          {photos.map((photo) => (
            <GalleryCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
