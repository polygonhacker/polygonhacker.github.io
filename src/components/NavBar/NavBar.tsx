import './NavBar.css';

export const NavBar: React.FC = () => {
    return (
        <header> 
            <div>Yong Cheol Park</div>
            <div>
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
                </ul>
                <button data-text='Resume'>Resume</button>
            </div>   
        </header>
    )
}

export default NavBar;