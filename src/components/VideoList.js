
import React from 'react'
import { VideoItem } from './VideoItem'
export const VideoList = ({ videos }) => {

    return (
        <div className="">
            {videos ? videos.map((video, index) => <VideoItem video={video} key={index} />) : ""}
        </div>
    );
} 