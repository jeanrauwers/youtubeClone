import React from 'react'

export const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Please Search for a video...</div>
    }

    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;


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