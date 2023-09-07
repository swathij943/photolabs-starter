import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';

// import TopicListItem from './components/TopicListItem';
import TopicList from './components/TopicList';

import './App.scss';


// Note: Rendering a single component to build components in isolation


// const arrayPhotos = Array(3).fill(<PhotoListItem />);
const App = () => (
  <div className="App">
    {/* <PhotoListItem/> */}
    {/* {arrayPhotos} */}
    {/* <PhotoList /> */}
    {/* <TopicListItem /> */}
    <TopicList/>
  </div>
);

export default App;
