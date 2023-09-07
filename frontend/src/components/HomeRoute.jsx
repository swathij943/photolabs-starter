import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {
  return(
    <>
    <TopNavigation/>
    <PhotoList/>
    </>
  );
}

export default HomeRoute;