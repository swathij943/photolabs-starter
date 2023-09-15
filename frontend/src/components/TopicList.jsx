import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const { topics, getPhotosByTopic, selectedTopic } = props;
  const topicList = topics.map((topic) => {
    return <TopicListItem {...topic} key={topic.slug} getPhotosByTopic={getPhotosByTopic} selectedTopic={selectedTopic} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );

};

export default TopicList;
