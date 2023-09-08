import React from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

//PhotoListItem

const PhotoListItem = (props) => {

  const { id, location, urls, user, addRemoveLike, isLikes, likes, openModal, similar_photos} = props;
  return (
    <li className="card photo-list__item m-auto bg-white" key={id}>
      <PhotoFavButton isLikes={isLikes} addRemoveLike={addRemoveLike} id={id} />
      <img className="card-img photo-list__image" src={urls.regular} alt="" onClick={() => openModal(id, location, urls, user, similar_photos)} />
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

export default PhotoListItem;