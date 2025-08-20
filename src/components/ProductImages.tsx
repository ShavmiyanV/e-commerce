import Image from "next/image";

const ProductImages = () => {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/18731626/pexels-photo-18731626.jpeg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProductImages;
