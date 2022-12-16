import React from 'react'
import Menu from './Menu'
import {  Container } from 'react-bootstrap'
import './style.css'

export default function index({projects,categories}) {
    return (
        <Container id="portfolio" className='section'>
            <h2 className='section__title'>Projects_</h2>
            <Menu projects={projects} categories={categories}/>
        </Container>
        
    )
}
