import './Footer.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='left'>
                <div>
                    <h2>Yong Cheol Park</h2>
                    <h3>polygonhacker [at] gmail [dot] com</h3>
                </div>
                <div className='copyright'>
                    <h4>© Copyright 2022. Yong Cheol Park</h4>
                </div>
            </div>
            
            
            <div className='right'>
                <h2>Follow me</h2>
                <div className='social-media'>
                    <a href='#'><BsGithub size={40} /></a>
                    <a href='#'><BsInstagram size={40} /></a>
                    <a href='#'><BsLinkedin size={40} /></a>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer;