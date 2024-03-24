import React, { useContext } from 'react';
import { FaLightbulb, FaGithubSquare, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { TbMinusVertical } from 'react-icons/tb'
import '../App.css';
import { HomeContext } from '../context/HomeContext';
import { NavLink, Outlet } from 'react-router-dom';
import CV from '../assets/CV.pdf';


export default function Home() {

    const { backgroundImage, backgroundColor, navColor, textColor, handleClick } = useContext(HomeContext)

    return (

        <div className='app' style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundColor: `${backgroundColor}` }}>
            <div>
                <button
                    onClick={handleClick}>
                    <FaLightbulb style={{ color: `${navColor}` }} />
                </button>
            </div>
            <header className='header'>
                <nav>
                    <NavLink to='/' className='navLink' style={{ color: `${navColor}` }}>Home</NavLink>
                    <NavLink to='/about' className='navLink' style={{ color: `${navColor}` }}>About</NavLink>
                    <NavLink to='/work' className='navLink' style={{ color: `${navColor}` }}>Work</NavLink>
                </nav>
                <div className='aside'>
                    <TbMinusVertical style={{ color: `${navColor}`, fontSize: '2rem' }} />
                    <a href='https://github.com/CansinAlkacGok' target="_blank" rel="noreferrer"><FaGithubSquare style={{ color: `${navColor}` }} /></a>
                    <a href='https://www.linkedin.com/in/cansinalkac/' target="_blank" rel="noreferrer"><FaLinkedin style={{ color: `${navColor}` }} /></a>
                    <a href={CV} target= "_blank" rel="noreferrer"><FaFilePdf style={{ color: `${navColor}` }} /></a>
                    <TbMinusVertical style={{ color: `${navColor}`, fontSize: '2rem' }} />
                </div>
            </header>
            <Outlet />
            <footer style={{ color: `${textColor}` }}>
                <p>&copy;2022, created by Cansin Alkac Gök. All rights reserved. </p>
            </footer>
        </div>

    )
}