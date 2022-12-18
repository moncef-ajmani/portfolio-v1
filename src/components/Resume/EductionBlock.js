import React from 'react'

export default function EducationBlock({data}) {
    return (
        <div className='resume__block-container'>
            <div className='resume__block'>
                <div className='resume__block-title'>{data.diplome}</div>
                <div className='resume__block-date p-0'>{`${data.start_day && data.start_day+" - "}${data.end_day}`}</div>
                <p>{data.ecole}</p>
            </div>
        </div>
    )
}