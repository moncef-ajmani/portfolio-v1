import React from 'react'

export default function ResumeBlock(props) {
    return (
        <div className='resume__block-container'>
            <div className='resume__block'>
                <div className='resume__block-title'>{props.data.title}</div>
                <div className='resume__block-date'>{props.data.date}</div>
                <p>{props.data.description}</p>
            </div>
        </div>
    )
}