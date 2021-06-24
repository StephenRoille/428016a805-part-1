import React, { useState, useEffect } from "react"

// apis
import youtube from "../apis/youtube"

// components
import Footer from "./Footer"
import SearchBar from "./SearchBar"
import Spinner from "./Spinner"
import VideoDetails from "./VideoDetails"
import VideoList from "./VideoList"

// styles
import "./App.css"

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    onSearchSubmit("python")
  }, [])

  const onSearchSubmit = async (term) => {
    setIsLoading(true)
    const res = await youtube.get("/search", { params: { q: term } })
    setVideos(res.data.items)
    setSelectedVideo(res.data.items[0])
    setIsLoading(false)
  }

  if (selectedVideo) {
    return (
      <>
        <div className="ui container">
          <SearchBar onSearchSubmit={onSearchSubmit} isLoading={isLoading} />
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
