import React, { useCallback, useEffect, useState } from 'react'

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { likes, toggleLike} = props;
  const fill = likes ? '#C80000' : '#EEEEEE';

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon fill={fill} />
      </div>
    </div>
  );
}

export default PhotoFavButton;