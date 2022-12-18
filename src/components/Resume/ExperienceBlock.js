import React from 'react'

export default function ExperienceBlock({data}) {
  return (
    <div className='resume__block-container'>
        <div className='resume__block'>
            <div className='resume__block-title'>{data.title}</div>
            <div className='resume__block-date p-0'>{`${data.type} -  ${data.entreprise} ${data.lieu} | ${data.start_day && data.start_day+" - "}${data.end_day}`}</div>
            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
    </div>
  )
}
