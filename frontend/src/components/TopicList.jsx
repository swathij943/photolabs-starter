import React from "react";

import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topics, getPhotosByTopic } = props;
  const topicList = topics.map((topic) => {
    return <TopicListItem {...topic} key={topic.slug} getPhotosByTopic={getPhotosByTopic} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );

};

// TopicList.defaultProps = {
//   topics: [
//     {
//       "id": "1",
//       "slug": "topic-1",
//       "title": "Nature"
//     },
//     {
//       "id": "2",
//       "slug": "topic-2",
//       "title": "Travel"
//     },
//     {
//       "id": "3",
//       "slug": "topic-3",
//       "title": "People"
//     },
//   ]
// };
export default TopicList;
