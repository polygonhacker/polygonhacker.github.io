import './NavBar.css';

export const NavBar: React.FC = () => {
    return (
        <header className='NavBar'> 
            <div className='name'>Yong Cheol Park</div>
            <div className='menu-list'>
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
                    <li>
                        <button data-text='Resume'>Resume</button>
                    </li>
                </ul>
            </div>   
        </header>
    )
}

export default NavBar;