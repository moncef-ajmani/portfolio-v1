import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../../images/img2.jpg'
import './style.css'

export default function Header({data,social}) {
    return (
        <header className='header'>
            <Container>
                <Row className='profile'>
                    <div className='col-4 profile__avatar'>
                        <img src={img} alt="avatar"/>
                    </div>
                    <Col sm='12' md='8'>
                        <p className='profile__name'>{data['full_name']}_</p>
                        <p className='profile__work'>{data['title']}</p>
                        <div className='profile__contact'>
                           <table>
                               <tbody>
                                <tr>
                                    <td>age:</td>
                                    <td>{data['age']}</td>
                                </tr>
                                <tr>
                                    <td>phone:</td>
                                    <td>{data['phone']}</td>
                                </tr>
                                <tr>
                                    <td>email</td>
                                    <td>{data['email']}</td>
                                </tr>
                                <tr>
                                    <td>address:</td>
                                    <td>{data['country']}, {data['city']}</td>
                                </tr>                  
                               </tbody>
                           </table>
                        </div>
                        <div className='profile__social'>
                            <a href={social['github']} target='_blank' rel="noopener"><i className="fab fa-github"></i></a>
                            <a href={social['linkedin']} target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href={social['codepen']} target='_blank' rel="noopener"><i class="fa-brands fa-codepen"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
