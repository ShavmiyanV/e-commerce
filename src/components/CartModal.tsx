"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div className="">
          <Image
            src="https://images.pexels.com/photos/33269728/pexels-photo-33269728.jpeg"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="">
            {/* TOP */}
            <div className="">
              {/* TITLE */}
              <div className="">
                <h3>Product Name</h3>
                <div>$49</div>
              </div>
              {/* DESCRIPTION */}
              <div className="">avilable</div>
            </div>
            {/* BOTTOM */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
