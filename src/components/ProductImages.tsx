"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/33507836/pexels-photo-33507836.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/32637552/pexels-photo-32637552.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/31646625/pexels-photo-31646625.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/33416419/pexels-photo-33416419.jpeg",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
