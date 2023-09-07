import React from 'react';

import PhotoFavButton from './PhotoFavButton';
import PhotoList from './PhotoList';
import photos from '../mocks/photos';
import '../styles/PhotoDetailsModal.scss';

export const PhotoDetailsModal = (props) => {
  console.log('props', props);
  const { isModalOpen, closeModal, openModal, selectedImg, addRemoveLike, likes } = props;
  const { id, location, urls, user } = selectedImg;

  const isLikes = likes.includes(id) ? true : false;
  const photoListClass = "pt-6 grid grid-cols-2 gap-2";

  return (
    <div className={`px-4 photo-details-modal z-50 ${isModalOpen ? '' : 'hidden'}`}>
        <button className='photo-details-modal__close-button' onClick={closeModal}>
        <svg width="18" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="card w-fit m-auto">
        <div className='w-fit m-auto'>
          <PhotoFavButton isLikes={isLikes} addRemoveLike={addRemoveLike} id={id} />
          <img className="card-img photo-details-modal__image" src={urls.full} alt="" />
        </div>
        <div className="p-2 photo-details-modal__user-details">
          <img className="photo-details-modal__user-profile" src={user.profile} alt="" />
          <div className="photo-details-modal__user-info">
            <h1>{user.name}</h1>
            <h2 className="photo-list__user-location">{location.city}, {location.country}</h2>
          </div>
        </div>
      </div>
      <PhotoList photoListClass={photoListClass} photos={photos.slice(0, 4)} likes={likes} addRemoveLike={addRemoveLike} openModal={openModal} />
    </div>
  );
};

export default PhotoDetailsModal;