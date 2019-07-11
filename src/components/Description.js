import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

export default function Description(props) {
    return (
        <Modal
        trigger={<Button>Show Description</Button>}
        header='Description'
        content={<p>{props.data.explanation}</p>}
        actions={[{ key: 'done', content: 'Done', positive: true }]}
        className='Modal-Description'
        />
    )
}