import React, { useEffect, useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
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
  const GET_PHOTOS_BY_TOPICS = "http://localhost:8001/api/topics/photos/:topic_id";

  useEffect(() => {
    fetch(GET_PHOTOS)
      .then(res => res.json())
      .then(data => setPhotos([...data]))
      .catch(err => console.log(err));

    fetch(GET_TOPICS)
      .then(res => res.json())
      .then(data => setTopics([...data]))
      .catch(err => console.log(err));
  }, []);

  const getPhotosByTopic = function(topicId) {
    const endpoint = GET_PHOTOS_BY_TOPICS.replace(":topic_id", topicId);
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => setPhotos([...data]))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <PhotoDetailsModal likes={likes}
        addRemoveLike={addRemoveLike}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedImg={selectedImg}
        openModal={openModal}
      />
      <HomeRoute
        likes={likes}
        addRemoveLike={addRemoveLike}
        photos={photos}
        topics={topics}
        openModal={openModal}
        getPhotosByTopic={getPhotosByTopic}
        />
    </div>
  );
};
export default App;