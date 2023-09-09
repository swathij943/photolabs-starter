import React from 'react';
import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { id, slug, title, getPhotosByTopic, selectedTopic } = props

  return(
  <div className={`topic-list__item cursor-pointer ${selectedTopic === id ? 'overline' : ''}`} onClick={() => getPhotosByTopic(id)}>
    <span>{title}</span>
  </div>)
}

export default TopicListItem;