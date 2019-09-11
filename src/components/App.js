import React, { useState } from 'react'
import youtube, { KEY } from '../api/youtube'
import { SearchBar } from './SearchBar'
import { VideoList } from './VideoList'

export const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)


    const onSearchSubmit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 6,
                key: KEY
            }
        })
        setVideos(response.data.items)

    }
    console.log(selectedVideo)
    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
        </div>
    );

} 