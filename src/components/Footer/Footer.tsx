import './Footer.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaAngellist } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='left'>
                    <h2>Follow me</h2>
                    <div className='social-media'>
                        <a href='https://github.com/polygonhacker'><BsGithub size={40} /></a>
                        <a href='#'><BsLinkedin size={40} /></a>
                        <a href='#'><FaAngellist size={40} /></a>
                        <a href='https://www.instagram.com/polygonhacker/'><BsInstagram size={40} /></a>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <h2>Yong Cheol Park</h2>
                        <a>polygonhacker@gmail.com</a>
                    </div>
                    <div className='copyright'>
                        <h4>© Copyright 2022. Yong Cheol Park</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer;