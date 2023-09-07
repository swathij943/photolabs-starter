import React, { useState } from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

//PhotoListItem

const PhotoListItem = (props) => {

  console.log('waldo', props);
  const { id, location, urls, user, addRemoveLike, isLikes, likes, openModal} = props;
  return (
    <li className="card photo-list__item m-auto" key={id}>
      <PhotoFavButton isLikes={isLikes} addRemoveLike={addRemoveLike} id={id} />
      <img className="card-img photo-list__image" src={urls.regular} alt="" onClick={() => openModal(id, location, urls, user, isLikes)} />
      <div className="card-body photo-list__user-details p-2">
        <img className="photo-list__user-profile" src={user.profile} alt="" />
        <div className="profile-info photo-list__user-info">
          <h1>{user.name}</h1>
          <h2 className="photo-list__user-location">{location.city}, {location.country}</h2>
        </div>
      </div>
    </li>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;