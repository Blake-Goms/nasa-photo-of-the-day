import React from 'react'
import ReactPlayer from 'react-player'

export default function Content(props) {
    return (
        <div>
            {props.data.media_type === "video" ? <ReactPlayer url={props.data.url} controls /> : <img src={props.data.hdurl} width='720px' />}
        </div>
    )
}
