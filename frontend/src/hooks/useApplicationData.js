import { useState } from "react";

const useApplicationData = () => {

  const [likes, setLikes] = useState(["1","7","3"]);
  
  const state = {
    likes: likes,
    setLikes: setLikes
    
  };

  return {
    state
    
  };
};

export default useApplicationData;

