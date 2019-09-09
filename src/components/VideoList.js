
import React from 'react'
import { VideoItem } from './VideoItem'
export const VideoList = ({ videos }) => {
    const renderedList = videos.map((video, index) => <VideoItem video={video} key={index} />)

    return <div className="ui relaxed divided list">{renderedList}</div>
} 