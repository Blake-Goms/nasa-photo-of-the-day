import React from 'react'

export default function Image(props) {
    return (
        <div>
            <img width="400" src= {`${props.data.hdurl}`} alt='nasa photo' />
        </div>
    )
}
