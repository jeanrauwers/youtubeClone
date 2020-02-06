
import React from 'react'
import { VideoItem } from './VideoItem'
export const VideoList = ({ videos, setSelectedVideo }) => {

    const renderedList = videos.map((video, index) => {
        if (video.id.kind !== 'youtube#channel') {
           return <VideoItem video={video} key={index} setSelectedVideo={setSelectedVideo} />
        }

    })

    return <div className="ui relaxed divided list">{renderedList}</div>
} 