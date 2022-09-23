import React from "react";
import { useFetchImages } from "../hook/useFetchImages";
import Card from "./Card";
import SearchImage from "./SearchImage";

export default function Container() {
  const [images, loading, handleSubmit] = useFetchImages();

  return (
    <>
      <SearchImage handleSubmit={handleSubmit} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {images.map((singleImage) => {
          return (
            <div key={singleImage.id}>
              <Card
                user={singleImage.user.first_name}
                userImage={singleImage.user.profile_image.large}
                bio={singleImage.user.bio}
                twitter={singleImage.user.social.twitter_username}
                img={singleImage.urls.regular}
                like={singleImage.likes}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
