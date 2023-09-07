import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [likes, setLikes] = useState(["1","2","3"]);
  const addRemoveLike = function(id) {
    setLikes((prevLikes) => {
      if (prevLikes.includes(id)) {
        return prevLikes.filter(likeId => likeId !== id);
      } else {
        return [...prevLikes, id];
      }
    });
  };

  const { photos, topics } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} likes={likes} addRemoveLike={addRemoveLike} />
    </div>
  );
}

export default HomeRoute;

// if user likes a photo. photo id is pushed into the array. if user unlikes, photo id is removed from the likes array.
