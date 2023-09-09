import React, { useEffect, useState } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, getPhotosByTopic, selectedTopic } = props;
  const [isAtTop, setIsAtTop] = useState(true);

  //nav bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 50;
      setIsAtTop(scrollTop <= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className={`top-nav-bar fixed top-0 left-0 right-0 z-40 ${isAtTop ? 'bg-white' : 'bg-opacity-75 bg-white'}`}>
      <span className="top-nav-bar__logo mt-2 cursor-pointer" onClick={handleLogoClick}>PhotoLabs</span>
      <div className="flex flex-row items-center mr-6">
        <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} selectedTopic={selectedTopic} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;