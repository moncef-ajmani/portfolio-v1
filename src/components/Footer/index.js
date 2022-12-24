import React, {useState} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import './style.css'

export default function Footer({data,social}) {

    return (
        <div id="contact" className='footer'>
            <Container className='contact section'>
                <Row>
                    <Col sm='12'>
                        <div className='section__title'>Get in touch_</div>
                    </Col>
                </Row>
                <Row className='contacts'>
                    <Col lg='4' md='5' sm='12' className='mb-sm-5'>
                        <div className='contacts__list'>
                        <table>
                               <tbody>
                                <tr>
                                    <td>phone:</td>
                                    <td>{data['phone']}</td>
                                </tr>
                                <tr>
                                    <td>email</td>
                                    <td>{data['email']}</td>
                                </tr>                
                               </tbody>
                           </table>
                        </div>
                        <div className='contacts__social'>
                            <ul>
                                <li><a href={social['github']}>Github</a></li>
                                <li><a href={social['linkedin']}>Linkedin</a></li>
                                <li><a href={social['codepen']}>CodePen</a></li>
                                <li><a href={social['instagram']}>Instagram</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg='5' md='7' sm='12'>
                        <div className='contacts__form'>
                            <p className='contacts__form-title'>Or just write me a letter here_</p>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Your name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Your e-mail" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control as="textarea" rows="4" placeholder="Type the message here"/>
                                </Form.Group>
                                <button className="site-btn site-btn--form" type="submit" value="Send">Send Email</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <div className='copyright'>© {new Date().getFullYear()} Moncef Ajmani. All Rights Reserved</div>
            </Container>
            
        </div>
    )
}
