import React, { useState } from 'react'
import youtube, { KEY } from '../api/youtube'
import { SearchBar } from './SearchBar'
import { VideoList } from './VideoList'

export const App = () => {
    const [videos, setVideos] = useState([])


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
    console.log(videos)
    return (

        <div className="ui container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <VideoList videos={videos} />
        </div>
    );

} 