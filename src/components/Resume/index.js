import React from 'react'
import { Row, Col, Container, ProgressBar } from 'react-bootstrap'
import ResumeBlock from './EductionBlock'
import ExperienceBlock from './ExperienceBlock'
// import { dataResume, dataSkills } from '../../services/AppService'
import './style.css'

export default function index({skills,education,experience}) {
    return (
        <Container id="resume" className='section'>
            <Row>
                <Col md='10' sm='12'>
                    <h2 className='section__title'>Resume_</h2>
                    <p className='section__description'>strong technical and problem-solving skills. Highly motivated and passionate about technology with a comprehensive understanding of programming languages, computer hardware and software, and algorithms. Possess excellent communication and interpersonal skills with the ability to work with teams and independently.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md='8' sm='12'>
                    <div className='resume-title'>education</div>
                    <div className='resume-list'>
                        {education?.map(el=><ResumeBlock data={el}/>)}   
                    </div>
                </Col>
                <Col md='8' sm='12'>
                    <div className='resume-title'>experience</div>
                    <div className='resume-list'>
                        {experience?.map(el=><ExperienceBlock data={el}/>)}   
                    </div>
                </Col>
            </Row>
            <Row className='progress__list'>
                <Col sm='12'>
                    <div className='progress__list-title'>GENERAL SKILLS</div>
                </Col>
                {skills?.map((el,i)=>{
                    return(
                        <Col md='5' sm='12' key={i}>
                            <div className='progress__list-skill'>
                                <p>
                                    <div className='progress__list-name'>{el.title}</div>
                                    <div className='progress__list-value'>{el.percentage}%</div>
                                </p>
                                <ProgressBar now={el.percentage} />
                            </div>
                        </Col>
                    )
                })}
                
            </Row>
        </Container>
    )
}
