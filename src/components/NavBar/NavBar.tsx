import './NavBar.css';

const NavBar = () => {
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
                <button>Resume</button>
            </div>   
        </header>
    )
}

export default NavBar;