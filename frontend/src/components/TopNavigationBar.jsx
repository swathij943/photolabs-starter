import React from 'react';

import TopicList from './TopicList';

import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const { topics, isFavPhotoExist } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="flex flex-row items-center mr-6">

<TopicList topics={topics} /> {/*TopicList should be getting an array of topics. else, defaults are used */}
<FavBadge isFavPhotoExist={isFavPhotoExist} />
</div>
</div>  
  )
}

export default TopNavigation;