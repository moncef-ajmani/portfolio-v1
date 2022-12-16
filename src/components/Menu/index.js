import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
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
                                {links.map(el=><li><a href={`#${el}`}>{el}</a></li>)}
                            </ul>
                    </div>
                    <div className={`menu__wrapper-mobile d-lg-none ${background}`} onClick={openMobileMenu}>
                        <div className='menu__mobile-button'>
                            <span>
                                <i class="fas fa-bars"></i>
                            </span>
                            
                        </div>
                    </div>
                </Container>
            </div>
            <div className='menu__mobile' style={{display}}>
                <div className='menu__mobile-close' onClick={closeMobileMenu}><i class="fas fa-times"></i></div>
                <ul>
                    {links.map(el=><li onClick={closeMobileMenu}><a href={`#${el}`}>{el}</a></li>)}
                </ul>
            </div>
        </>
    )
}
