import React from 'react'

export const VideoDetail = ({ video }) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

    if (!video) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="ui embed">
                <iframe width="560" height="315" src={videoUrl} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </>
    )
}