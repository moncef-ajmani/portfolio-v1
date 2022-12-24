import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

export default function Hello({summary,cv_link}) {
  return (
    <Container id="hello" className='section'>
            <Row>
                <Col md='10' sm='12'>
                    <h2 className='section__title'>Hello_</h2>
                    <div className='section__description' dangerouslySetInnerHTML={{ __html: summary }}></div>
                    <a className='section__btn site-btn' href={cv_link}>download cv</a>
                </Col>
            </Row>
        </Container>
  )
}
