import React, { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';
import { FaHtml5, FaCss3, FaSass, FaBootstrap, FaReact, FaNode, FaAngular } from 'react-icons/fa';
import {SiExpress, SiMongodb,SiJavascript, SiTypescript, SiNestjs, SiTailwindcss, SiMysql} from 'react-icons/si';


export default function About() {

    const { textColor } = useContext(HomeContext);

    const iconsFontSize  = {fontSize: "1.5em", marginRight:"0.5rem"}

    return (

        <div className='about' style={{ color: `${textColor}` }} >
            <h2>About Me</h2>
            <p>Hi! My name is Cansin. I live in Berlin. I am really happy to be able to create this page and tell you
                something about myself as a fullstack web developer.</p>
            <p>I am an enthusiastic and quick-learning Full Stack Web Developer who is passionate about life-long learning. My work experience in various fields, as you can see in my Resume, has exposed me to different industries, allowed me to work cooperatively with people of diverse backgrounds on multinational projects, and shaped my ability seek solutions from different perspectives.</p>
            <p>I can define my self well-organized, neat, solution oriented, open-minded, motivated and always trying to look at things from the bright side. I love spending my free time being with my family, traveling, reading, meditating and trekking. </p>
            <p>There are few technologies below I have been working so far: </p>

            <ul>
                <li><FaHtml5 style={iconsFontSize}/>HTML</li>
                <li><FaCss3 style={iconsFontSize}/>CSS</li>
                <li><FaSass style={iconsFontSize}/>SASS</li>
                <li><SiTailwindcss style={iconsFontSize}/>Tailwind CSS</li>
                <li><FaBootstrap style={iconsFontSize}/>Bootstrap</li>
                <li><SiJavascript style={iconsFontSize}/>JavaScript</li>
                <li><SiTypescript style={iconsFontSize}/>TypeScript</li>
                <li><FaReact style={iconsFontSize}/>React</li>
                <li><FaAngular style={iconsFontSize}/>Angular</li>
                <li><FaNode style={iconsFontSize}/>Node.js</li>
                <li><SiNestjs style={iconsFontSize}/>NestJS</li>
                <li><SiExpress style={iconsFontSize}/>Express.js</li>
                <li><SiMongodb style={iconsFontSize}/>MongoDB</li>
                <li><SiMongodb style={iconsFontSize}/>Mongoose</li>
                <li><SiMysql style={iconsFontSize}/>MySQL</li>
            </ul>

        </div>
    )
}