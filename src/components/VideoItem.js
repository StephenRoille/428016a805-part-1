import React from "react"

// style
import "./VideoItem.css"

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
        onClick={() => onSelectVideo(video)}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
