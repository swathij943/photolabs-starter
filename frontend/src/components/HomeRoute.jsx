import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photos, topics, openModal, likes, addRemoveLike, getPhotosByTopic } = props;

  const isFavPhotoExist = likes.length > 0 ? true : false; //a condition to whether show a notification

  const photoListClass = "photo-list pt-12 photo-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-4";

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <PhotoList photoListClass={photoListClass} photos={photos} likes={likes} addRemoveLike={addRemoveLike} openModal={openModal} />
    </div>
  );
}

export default HomeRoute;

// if user likes a photo. photo id is pushed into the array. if user unlikes, photo id is removed from the likes array.
