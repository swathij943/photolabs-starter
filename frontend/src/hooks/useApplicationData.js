import { useReducer, useState, useEffect } from "react";
import urls from "../env";


const useApplicationData = () => {
  function getInitialSelectedImgState() {
    return {
      id: ``,
      location: {
        city: ``,
        country: ``
      },
      urls: {
        full: ``,
        regular: ``
      },
      user: {
        id: ``,
        username: ``,
        name: ``,
        profile: ``
      },
      similar_photos: []
    };
  }

  const initialState = {
    likes: [],
    selectedImg: getInitialSelectedImgState(),
    isModalOpen: false
  };

  const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          ...state,
          likes: state.likes.includes(action.payload)
            ? state.likes.filter(likeId => likeId !== action.payload)
            : [...state.likes, action.payload]
        };
      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          selectedImg: {
            ...state.selectedImg,
            id: action.payload.id,
            location: action.payload.location,
            urls: action.payload.urls,
            user: action.payload.user,
            similar_photos: action.payload.similar_photos
          }
        };
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          selectedImg: action.payload
        };
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {
          ...state,
          isModalOpen: true
        };
      case ACTIONS.CLOSE_PHOTO_DETAILS:
        return {
          ...state,
          isModalOpen: false
        }
      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(0)


  
  //URL requests
  const { GET_PHOTOS, GET_TOPICS, GET_PHOTOS_BY_TOPICS } = urls;
  useEffect(() => {
    fetch(GET_PHOTOS)
      .then(res => res.json())
      .then(data => setPhotos([...data]))
      .catch(err => console.log(err));

    fetch(GET_TOPICS)
      .then(res => res.json())
      .then(data => setTopics([...data]))
      .catch(err => console.log(err));

  }, []);

  const getPhotosByTopic = function(topicId) {
    const endpoint = GET_PHOTOS_BY_TOPICS.replace(":topic_id", topicId);
    setSelectedTopic(topicId)
    fetch(endpoint)
      .then(res => res.json())
      .then(data => setPhotos([...data]))
      .catch(err => console.log(err));
  };

  //Dispatches
  const addRemoveLike = function(id) {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
  };
  const openModal = (id, location, urls, user, similar_photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { id, location, urls, user, similar_photos } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };
  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_PHOTO_DETAILS});
  };

  return {
    photos,
    topics,
    selectedTopic,
    state,
    getPhotosByTopic,
    addRemoveLike,
    openModal,
    closeModal
  };
};

export default useApplicationData;