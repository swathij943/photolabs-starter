import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import topics from './mocks/topics';
import photos from './mocks/photos';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import './App.scss';

const App = () => {
  
  const { state, addRemoveLike, openModal, closeModal } = useApplicationData();
  const { likes, selectedImg, isModalOpen } = state;

  return (
    <div className="App">
      <PhotoDetailsModal likes={likes} addRemoveLike={addRemoveLike} isModalOpen={isModalOpen} closeModal={closeModal} selectedImg={selectedImg} openModal={openModal} />
      <HomeRoute likes={likes} addRemoveLike={addRemoveLike} photos={photos} topics={topics} openModal={openModal} />
    </div>
  );
};
export default App;