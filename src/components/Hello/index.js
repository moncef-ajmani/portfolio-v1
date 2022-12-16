import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

export default function Hello({summary}) {
  return (
    <Container id="hello" className='section'>
            <Row>
                <Col md='10' sm='12'>
                    <h2 className='section__title'>Hi_</h2>
                    <p className='section__description'>{summary}</p>
                    <a className='section__btn site-btn' href="/">download cv</a>
                </Col>
            </Row>
        </Container>
  )
}
