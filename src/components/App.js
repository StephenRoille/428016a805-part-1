import React, { useState, useEffect } from "react"

// components
import Footer from "./Footer"
import SearchBar from "./SearchBar"
import Spinner from "./Spinner"
import VideoDetails from "./VideoDetails"
import VideoList from "./VideoList"

// styles
import "./App.css"
// hooks
import useVideo from "../hooks/useVideos"

const App = () => {
  const [isLoading, videos, setVideos] = useVideo("python")
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  if (selectedVideo) {
    return (
      <>
        <div className="ui container">
          <SearchBar onSearchSubmit={setVideos} isLoading={isLoading} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetails video={selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
  return <Spinner />
}

export default App
