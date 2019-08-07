import React from "react";

const VideoDetail = ({ video }) => {
  // In the beginning the state is null
  // in the App, and we get an error
  if (!video) {
    return <div>Loading...</div>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
