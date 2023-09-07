import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';

// import TopicListItem from './components/TopicListItem';
// import TopicList from './components/TopicList';

// import TopNavigation from './components/TopNavigationBar';

import topics from './mocks/topics';
import photos from './mocks/photos';

import HomeRoute from './components/HomeRoute';

import PhotoDetailsModal from './components/PhotoDetailsModal';

import './App.scss';


// Note: Rendering a single component to build components in isolation


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <PhotoDetailsModal isModalOpen={isModalOpen} />
      <HomeRoute photos={photos} topics={topics} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default App;
