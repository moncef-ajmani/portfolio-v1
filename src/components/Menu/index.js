import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
// import { FontAwesomeIcon } from 'react-fontawesome'
import './style.css'

export default function Menu() {
    const [background,setBackground] = useState("")
    const [display,setDisplay] = useState("none")
    const links = ["hello","resume","portfolio","contact"]

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const background = window.scrollY > 20 ? "active" : "";
            setBackground(background);
          });
    }, [])
    
    const closeMobileMenu = () =>{
        setDisplay("none")
    }
    const openMobileMenu = () =>{
        setDisplay("flex")
    }
    return (
        <>
            <div className={`menu ${background}`}>
                <Container>
                    <div className={`menu__wrapper ${background}`}>
                            <ul>
                                {links.map((el,i)=><li key={i}><a href={`#${el}`}>{el}</a></li>)}
                            </ul>
                    </div>
                    <div className={`menu__wrapper-mobile d-lg-none ${background}`} onClick={openMobileMenu}>
                        <div className='menu__mobile-button'>
                            <span>
                                <i className="fas fa-bars"></i>
                            </span>
                            
                        </div>
                    </div>
                </Container>
            </div>
            <div className='menu__mobile' style={{display}}>
                <div className='menu__mobile-close' onClick={closeMobileMenu}><i class="fa-solid fa-bars"></i></div>
                <ul>
                    {links.map((el,i)=><li onClick={closeMobileMenu}key={i}><a href={`#${el}`}>{el}</a></li>)}
                </ul>
            </div>
        </>
    )
}
