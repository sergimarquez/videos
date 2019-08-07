import React from "react";

const VideoDetail = ({ video }) => {
  // In the beginning the state is null
  // in the App, and we get an error
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="videp player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
