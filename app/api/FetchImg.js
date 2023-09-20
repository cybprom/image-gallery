import React from "react";

export default async function FetchImg() {
  try {
    const apiKey = "39525801-3dc1daabce86bff41201d817d";
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`
    );
    const data = await response.json();
    const images = data.hits;
    return images;
    // console.log(data.hits);
    // setImages(images);
    // setIsLoading(false);
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}
