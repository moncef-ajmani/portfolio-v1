import React from 'react'
import { Row, Col } from 'react-bootstrap'


export default function Card({ ProjectItem }) {
    return (
        
        <div className='project-container'>
            {ProjectItem?.map(el=>{
                const { id, image , title , description , technologies } = el
                return(
                        <div className="project__card" key={id}>
                            <Row>
                                <Col lg='5' md='6' sm='12' className='project__card-img'>
                                    <img src={image} alt="project"/>
                                </Col>
                                <Col lg='7' md='6' sm='12' className='project__card-infos'>
                                    <div className='project__card-body'>
                                        <div className='project__card-title'>{title}</div>
                                        <div className='project__card-description'>{description}</div>
                                        <div className='project__card-stack'>used stack:</div>
                                        <div className='project__technologies'>
                                            {technologies.map(el=>{
                                                return(
                                                    <div className='technologie'>{el}</div>
                                                )
                                            })}
                                        </div>
                                        <div className='project__card-link' href="moncefajmani.com">www.moncefajmani.com</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                )
            })}
        </div>
        
    )
}
