import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, addRemoveLike, likes, openModal, photoListClass } = props;
  
  const listPhotos = photos.map(photo => {
    const isLikes = likes.includes(photo.id) ? true : false;
    return <PhotoListItem isLikes={isLikes} likes={likes} {...photo} key={photo.id} addRemoveLike={addRemoveLike} openModal={openModal} />
  });

  return (<ul className={photoListClass}>
    {listPhotos}
  </ul>);
};

export default PhotoList;