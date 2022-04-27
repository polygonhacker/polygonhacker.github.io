import React, {useState} from 'react';
import './NavBar.css';
import { ReactComponent as Burger } from '../../assets/menu.svg';
import { ReactComponent as Download } from '../../assets/download.svg';
import logo from '../../assets/face.png';



export const NavBar: React.FC = () => {
    const [burgerOn, setBurgerOn] = useState(false);

    return (
        <header className='NavBar'> 
            <div className='name'><p>PolygonHacker</p><img src={logo} alt="PolygonHacker" /></div>
            <div className={'menu-list ' + (burgerOn && 'nav-active')}>
                <ul>
                    <li>
                        <a href='#' data-text='About'>About</a>
                    </li>
                    <li>
                        <a href='#' data-text='Projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#' data-text='Skills'>Skills</a>
                    </li>
                    <li>
                        <a href='#' data-text='Contact'>Contact</a>
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