"use client";
import Image from "next/image";
import { useState } from "react";

function ImagesSwap({ swappedImages, loading }) {
  // console.log(swappedImages.data);
  const image1 = swappedImages?.[0];
  const image2 = swappedImages?.[1];
  const image3 = swappedImages?.[2];
  const image4 = swappedImages?.[3];
  const images = [image1, image2, image3, image4];
  //
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      <div className="w-full">
        {/* big image */}
        <div className="sticky xxs:gap-7 gap-3 top-[89px] flex flex-col">
          {!loading ? (
            <Image
              priority
              src={images[selectedImage]}
              alt="nature"
              width={1000}
              height={1000}
              className="w-full h-[220px] sm:h-[300px] md:h-[390px] rounded-md object-cover"
            />
          ) : (
            <div className="h-[220px] sm:h-[390px] w-full bg-slate-200 animate-pulse"></div>
          )}
          {/* small images */}
          <div className="flex items-center w-full max-h-full gap-3 ">
            {!loading && images ? (
              images.map((image, i) => (
                <Image
                  onClick={() => setSelectedImage(i)}
                  key={i}
                  src={image}
                  alt="nature1"
                  width={1000}
                  height={1000}
                  priority
                  className="cursor-pointer flex-1 xxs:h-[100px] h-[50px] w-[50px] xxs:max-w-full   object-cover  rounded-md"
                />
              ))
            ) : (
              <div className=" h-[40px] sm:h-[100px] w-full bg-slate-200 animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImagesSwap;
