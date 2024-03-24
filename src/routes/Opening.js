import React, { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';
import '../App.css';
import profile from '../assets/profile.jpg'
import CV from '../assets/CV.pdf';

export default function Opening() {

    const { textColor } = useContext(HomeContext)

    return (
        <div>
            <header className='opening' style={{ color: `${textColor}` }}>
                Hello, I am
                <h1>Cansın Alkaç Gök</h1>
                Fullstack Web Developer
            </header>
            <main>
                <img src={profile} alt='profile' />
                <a href={CV} download style={{color:`${textColor}`}}>Download CV</a>
            </main>
        </div>
    )
}