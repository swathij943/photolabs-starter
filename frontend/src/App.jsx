import React, { useEffect, useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
// import topics from './mocks/topics';
// import photos from './mocks/photos';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  const { state, addRemoveLike, openModal, closeModal } = useApplicationData();
  const { likes, selectedImg, isModalOpen } = state;

  const GET_PHOTOS = "http://localhost:8001/api/photos";
  const GET_TOPICS = "http://localhost:8001/api/topics";

  useEffect(() => {
    fetch(GET_PHOTOS)
      .then(res => res.json())
      .then(data => setPhotos([...data]))
      .catch(err=> console.log(err))

    fetch(GET_TOPICS)
      .then(res => res.json())
      .then(data => setTopics([...data]))
      .catch(err=> console.log(err))
  }, []);

  return (
    <div className="App">
      <PhotoDetailsModal likes={likes} addRemoveLike={addRemoveLike} isModalOpen={isModalOpen} closeModal={closeModal} selectedImg={selectedImg} openModal={openModal} />
      <HomeRoute likes={likes} addRemoveLike={addRemoveLike} photos={photos} topics={topics} openModal={openModal} />
    </div>
  );
};
export default App;