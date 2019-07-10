import React from 'react'
import ReactPlayer from 'react-player'

export default function Image(props) {
    return (
        <div>
            {props.data.media_type === "video" ? <ReactPlayer url={props.data.url}/> : <img src={props.data.hdurl} width='400px' />}
        </div>
    )
}
