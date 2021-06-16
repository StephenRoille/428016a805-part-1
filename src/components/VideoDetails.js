import React from "react"

const VideoDetails = ({ video }) => {
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetails
