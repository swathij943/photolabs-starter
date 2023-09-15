import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import './App.scss';

const App = () => {

  const { photos, topics, selectedTopic, state, addRemoveLike, openModal, closeModal, getPhotosByTopic } = useApplicationData();
  const { likes, selectedImg, isModalOpen } = state;

  return (
    <div className="App">
      <PhotoDetailsModal likes={likes}
        addRemoveLike={addRemoveLike}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedImg={selectedImg}
        openModal={openModal}
        photos={photos}
      />
      <HomeRoute
        likes={likes}
        addRemoveLike={addRemoveLike}
        photos={photos}
        topics={topics} 
        selectedTopic={selectedTopic}
        openModal={openModal}
        getPhotosByTopic={getPhotosByTopic}
      />
    </div>
  );
};

export default App;