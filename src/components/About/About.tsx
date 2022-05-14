import React from 'react';
import './About.css';
import { HashLink } from 'react-router-hash-link';

const About: React.FC = () => {

    const scrollWithOffset = (el : HTMLElement) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -70; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <section className='About' id='about'>
            <div className='container'>
                <h2>About</h2>
                <p>
                    I am <span>Yong Cheol Park</span>, also known as <span>Polygon Hacker</span>. But most people call me <span>Mark</span>.
                    <br/><br/>
                    Graduated with an Honours Bachelor of Science degree in <span>computer science</span> and <span>philosophy</span> from the <span>University of Toronto</span>, St. George Campus, I am passionate about building software that enrich our lives. 
                    <br/><br/>
                    My main interests are <span>web development</span> and <span>system design</span> for making scalable applications.
                    <br/><br/>
                    Other than being a tech enthusiast, I also love jazz, Muay Thai boxing and diving in the ocean.
                    <br/><br/>
                    Feel free to <HashLink to='#contact' scroll={el => scrollWithOffset(el)} style={{ textDecoration: 'none' }}><a><span>contact</span></a></HashLink> me anytime!
                </p>
            </div>
        </section>
    )
}

export default About;