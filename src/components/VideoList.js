import React from "react"

// components
import VideoItem from "./VideoItem"

const VideoList = ({ videos, onSelectVideo }) => {
  const videoItems = videos.map((video) => (
    <VideoItem key={video.id.videoId} video={video} onSelectVideo={onSelectVideo} />
  ))
  return <div className="ui relaxed divided list">{videoItems}</div>
}

export default VideoList
