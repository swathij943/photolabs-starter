import React, { useState } from 'react';

import topics from './mocks/topics';
import photos from './mocks/photos';

import HomeRoute from './components/HomeRoute';

import PhotoDetailsModal from './components/PhotoDetailsModal';

import './App.scss';


// Note: Rendering a single component to build components in isolation


const App = () => {

  const initialSelectedImgState = {
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
    isLikes: false
  }

  const [likes, setLikes] = useState(["1","7","3"]);
  const [selectedImg, setSelectedImage] = useState(initialSelectedImgState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addRemoveLike = function(id) {
    setLikes((prevLikes) => {
      if (prevLikes.includes(id)) {
        return prevLikes.filter(likeId => likeId !== id);
      } else {
        return [...prevLikes, id];
      }
    });
  };

  const openModal = (id, location, urls, user) => {
    setIsModalOpen(true);
    setSelectedImage((prev) => {
      return {...prev, id, location, urls, user};
    });
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <PhotoDetailsModal likes={likes} addRemoveLike={addRemoveLike} isModalOpen={isModalOpen} closeModal={closeModal} selectedImg={selectedImg} />
      <HomeRoute likes={likes} setLikes={setLikes} addRemoveLike={addRemoveLike} photos={photos} topics={topics} openModal={openModal} />
    </div>
  );
};

  
export default App;
