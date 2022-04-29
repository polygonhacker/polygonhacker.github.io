import React, {useState} from 'react';
import './NavBar.css';
import { ReactComponent as Burger } from '../../assets/menu.svg';
import { ReactComponent as Download } from '../../assets/download.svg';
import logo from '../../assets/face.png';
import { HashLink, NavHashLink } from 'react-router-hash-link';



export const NavBar: React.FC = () => {
    const [burgerOn, setBurgerOn] = useState(false);

    const scrollWithOffset = (el : HTMLElement) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -70; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <header className='NavBar'> 
            <HashLink to='/' style={{ textDecoration: 'none', color: 'black'}} onClick={() => {window.scrollTo(0, 0)}}>
                <div className='name'><p>PolygonHacker</p><img src={logo} alt="PolygonHacker" /></div>
            </HashLink>
            <div className={'menu-list ' + (burgerOn && 'nav-active')}>
                <ul>
                    <li>
                        <HashLink to='#about' scroll={el => scrollWithOffset(el)} style={{ textDecoration: 'none' }}>
                            <div data-text='About'>About</div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to='#projects' scroll={el => scrollWithOffset(el)} style={{ textDecoration: 'none' }}>
                            <div data-text='projects'>Projects</div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to='#skills' scroll={el => scrollWithOffset(el)} style={{ textDecoration: 'none' }}>
                            <div data-text='projects'>Skills</div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to='#contact' scroll={el => scrollWithOffset(el)} style={{ textDecoration: 'none' }}>
                            <div data-text='projects'>Contact</div>
                        </HashLink>
                    </li>
                    <li className='download-button'>
                        <button data-text=''>
                            <Download style={{ height: '1.2rem', width: '1.2rem' }} />
                            <span>&nbsp;Resume</span></button>
                    </li>
                </ul>
            </div>   
            <div className='burger' onClick={() => setBurgerOn(!burgerOn)}>
                <Burger />
            </div>
        </header>
    )
}

export default NavBar;