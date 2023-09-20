"use client";
import Image from "next/image";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ImgContainer from "./ImgContainer";
import Link from "next/link";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableUser = ({ image }) => {
  const widthHeightRatio = image.webformatHeight / image.webformatWidth;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  const style2 = { gridRow: `span ${photoSpans}` };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div style={style2}>
      <div
        // className="w-[350px] justify-self-center"
        style={style}
        // style={{ gridRow: `span ${photoSpans}`, style }}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <ImgContainer key={image.id} image={image} />
      </div>
    </div>
  );
};

export default function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = "39525801-3dc1daabce86bff41201d817d";
        const response = await fetch(
          `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        const images = data.hits;
        // console.log(data.hits);
        setImages(images);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, [term]);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    // setImages((users) => {
    //   const oldIndex = users.findIndex((user) => user.id === active.id);
    //   const newIndex = users.findIndex((user) => user.id === over.id);
    //   return arrayMove(users, oldIndex, newIndex);
    // });
    const newImage = images.slice();
    const oldIndex = images.findIndex((image) => image.id === active.id);
    const newIndex = images.findIndex((image) => image.id === over.id);
    newImage.splice(oldIndex, 1);
    newImage.splice(newIndex, 0, images[oldIndex]);
    setImages(newImage);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar searchText={(text) => setTerm(text)} />
          <div className="w-full h-[50px]"></div>

          {!isLoading && images.length === 0 && (
            <h1 className="flex items-center justify-center text-3xl sm:text-5xl text-center mx-auto mt-60">
              Oops! No Images Found...
            </h1>
          )}
          <section className=" px-1 my-3 grid justify-center gap3 grid-cols-gallery auto-rows-[10px] max-w-6xl mx-auto scroll-smooth transition-all">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext items={images} strategy={rectSortingStrategy}>
                {images.map((image) => (
                  // <ImgContainer key={image.id} image={image} />
                  <SortableUser key={image.id} image={image} />
                ))}
              </SortableContext>
            </DndContext>
          </section>
        </>
      )}
    </>
  );
}
