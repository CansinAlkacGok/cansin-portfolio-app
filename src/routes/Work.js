import React,{useContext} from 'react';
import {HomeContext} from '../context/HomeContext';
import works from '../component/workData';
import {BsDot} from 'react-icons/bs'
import '../App.css';

export default function Work (){

    const {textColor} = useContext(HomeContext);

    return(
        <div className='work'>
            {works.map((work,index) => (
                <div key={index}>
                   <a href={work.url}> <img src={work.img} alt=''/> </a> 
                    <p><a href={work.url} style={{color: `${textColor}`}}>{work.name}</a></p>
                    <ul style={{color: `${textColor}`}}> Used Tech:
                        {work.tech.map((data,index) =>(
                            <li key={index} style={{color: `${textColor}`}}><BsDot/>{data}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}