
import React from 'react'
import './VideoItem.css'
export const VideoItem = ({ video, index, setSelectedVideo }) => {

    return (
        <div className="video-item item" onClick={() => setSelectedVideo(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    );
}