
import React from 'react'

export const VideoItem = ({ video }) => {

    return (
        <div className="search-bar ui segment">
            Video = {video.snippet.description}
        </div>
    );
}