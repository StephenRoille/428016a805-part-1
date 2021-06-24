import { useEffect, useState } from "react"
//
// apis
import youtube from "../apis/youtube"

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    searchVideos(defaultSearchTerm)
  }, [defaultSearchTerm])

  const searchVideos = async (term) => {
    setIsLoading(true)
    const res = await youtube.get("/search", { params: { q: term } })
    setVideos(res.data.items)
    setIsLoading(false)
  }
  console.log(videos)
  return [isLoading, videos, searchVideos]
}

export default useVideo
