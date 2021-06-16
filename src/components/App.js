import React, { Component } from "react"

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

export default class App extends Component {
  state = { videos: [], selectedVideo: null, isLoading: false }

  componentDidMount() {
    this.onSearchSubmit("python")
  }

  onSearchSubmit = async (term) => {
    this.setState({ isLoading: true })
    const res = await youtube.get("/search", { params: { q: term } })
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
      isLoading: false,
    })
  }

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    if (this.state.selectedVideo) {
      return (
        <>
          <div className="ui container">
            <SearchBar
              onSearchSubmit={this.onSearchSubmit}
              isLoading={this.state.isLoading}
            />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetails video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList
                    videos={this.state.videos}
                    onSelectVideo={this.onSelectVideo}
                  />
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
}
