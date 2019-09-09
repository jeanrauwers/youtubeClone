
import React from 'react'
import { VideoItem } from './VideoItem'
export const VideoList = ({ videos }) => {

    return (
        <div className="search-bar ui segment">
            {videos ? videos.map((video, index) => <VideoItem video={video} index={index} />) : ""}
        </div>
    );
}