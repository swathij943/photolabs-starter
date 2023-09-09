import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const { isLikes, addRemoveLike, id } = props;
  const fill = isLikes ? '#C80000' : '#EEEEEE';

  return (
    <div className="photo-list__fav-icon" onClick={() => {
      addRemoveLike(id);
    }}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={fill} />
      </div>
    </div>
  );
}

export default PhotoFavButton;