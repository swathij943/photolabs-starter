import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, slug, title, getPhotosByTopic } = props

  return(
    <div className="topic-list__item cursor-pointer" onClick={() => getPhotosByTopic(id)}>
    <span>{title}</span>
  </div>)
}

export default TopicListItem;
