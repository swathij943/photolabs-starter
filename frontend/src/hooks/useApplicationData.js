import { useState } from "react";

const useApplicationData = () => {

  const [likes, setLikes] = useState(["1", "7", "3"]);
  const [selectedImg, setSelectedImage] = useState(getInitialSelectedImgState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getInitialSelectedImgState() {
    return {
      id: ``,
      location: {
        city: ``,
        country: ``
      },
      urls: {
        full: ``,
        regular: ``
      },
      user: {
        id: ``,
        username: ``,
        name: ``,
        profile: ``
      },
      similar_photos: []
    };
  }
  const addRemoveLike = function(id) {
    setLikes((prevLikes) => {
      if (prevLikes.includes(id)) {
        return prevLikes.filter(likeId => likeId !== id);
      } else {
        return [...prevLikes, id];
      }
    });
  };
  const openModal = (id, location, urls, user, similar_photos) => {
    setIsModalOpen(true);
    setSelectedImage((prev) => {
      return { ...prev, id, location, urls, user, similar_photos };
    });
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const state = {
    likes,
    selectedImg,
    isModalOpen
  };

  return {
    state,
    addRemoveLike,
    openModal,
    closeModal
  };
};

export default useApplicationData;

