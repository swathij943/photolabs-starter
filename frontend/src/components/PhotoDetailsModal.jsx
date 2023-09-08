import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import PhotoList from './PhotoList';
import '../styles/PhotoDetailsModal.scss';
export const PhotoDetailsModal = (props) => {
  const { isModalOpen, closeModal, openModal, selectedImg, addRemoveLike, likes, photos } = props;
  const { id, location, urls, user, similar_photos } = selectedImg;
  const isLikes = likes.includes(id) ? true : false;

  //tailwind css --> coming from modal
  const photoListClass = "text-xs pt-1 grid grid-cols-2 xl:grid-cols-3 gap-2";

  //Retrieve similar photos
  const similarPhotosId = similar_photos.map(photo => photo.id); //get the ids of similar photos to an array.
  const similarPhotos = photos.filter(photo => similarPhotosId.includes(photo.id)); //filter through original photos for photos that are included in the array

  return (
    <>
      <div className={`overlay z-50 ${isModalOpen ? '' : 'hidden'}`}></div>
      <div className={`photo-details-modal pt-0 p-6 z-50 ${isModalOpen ? '' : 'hidden'}`}>
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
        <section className="card w-fit mx-auto mb-2">
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
        </section>
        <section className='similar'>
          <h4 className='text-xs'>You might like...</h4>
          <PhotoList photoListClass={photoListClass} photos={similarPhotos} likes={likes} addRemoveLike={addRemoveLike} openModal={openModal} />
        </section>
      </div>
    </>
  );
};
export default PhotoDetailsModal;