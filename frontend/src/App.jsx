import React, { useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
import topics from './mocks/topics';
import photos from './mocks/photos';

import HomeRoute from './components/HomeRoute';

import PhotoDetailsModal from './components/PhotoDetailsModal';

import './App.scss';


// Note: Rendering a single component to build components in isolation


const App = () => {
  console.log('ApplicationData', useApplicationData());
  const { state } = useApplicationData();
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
    similar_photos: []
  }

  //const [likes, setLikes] = useState(["1","7","3"]);
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

  const openModal = (id, location, urls, user, similar_photos) => {
    setIsModalOpen(true);
    setSelectedImage((prev) => {
      return { ...prev, id, location, urls, user, similar_photos };
    });
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
       <PhotoDetailsModal likes={state.likes} addRemoveLike={addRemoveLike} isModalOpen={isModalOpen} closeModal={closeModal} selectedImg={selectedImg} openModal={openModal} />
      <HomeRoute likes={state.likes} setLikes={state.setLikes} addRemoveLike={addRemoveLike} photos={photos} topics={topics} openModal={openModal} />
    </div>
  );
};

  
export default App;
