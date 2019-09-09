
import React from 'react'

export const VideoItem = ({ video }) => {

    return (
        <div className="search-bar ui segment">
            Video Title : {video.snippet.title}
            Video Description : {video.snippet.description}
        </div>
    );
}