import React, { useState } from 'react'
import youtube, { KEY } from '../api/youtube'
import { SearchBar } from './SearchBar'
import { VideoList } from './VideoList'
import { VideoDetail } from './VideoDetail'

export const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)


    const onSearchSubmit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 11,
                key: KEY
            }
        })
        const responseArr = response.data.items;
        const firstVideo = responseArr[0].id.kind !== 'youtube#channel' ? responseArr[0] : responseArr[1]
        setVideos(responseArr)
        setSelectedVideo(firstVideo)

    }

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );

} 