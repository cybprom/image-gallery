import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ImgContainer({ image }) {
  const tags = image.tags.split(",");

  const widthHeightRatio = image.webformatHeight / image.webformatWidth;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <>
      <div
        className="w-[350px] justify-center mx-auto touch-none"
        style={{ gridRow: `span ${photoSpans}` }}
      >
        <div className=" rounded-xl overflow-hidden touch-none group">
          {/* <img
              key={image.id}
              src={image.webformatURL}
              width={image.webformatWidth}
              height={image.webformatHeight}
              sizes="350px"
              alt=""
              className="w-full group-hover:opacity-75 relative"
            /> */}
          <div className="px-6 py-4 absolute z-10 ">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="hidden group-hover:inline-block transition bg-slate-200 rounded-full px3 px-[10px] py-1 text-sm font-semibold text-gray-700 textwhite mr2 mr-[6px]"
              >
                {tag}
              </div>
            ))}
          </div>
          <img
            key={image.id}
            src={image.webformatURL}
            width={image.webformatWidth}
            height={image.webformatHeight}
            sizes="350px"
            alt=""
            className="w-full group-hover:opacity-75 transition relative pointereventsnone"
          />
        </div>
      </div>
    </>
  );
}
