import './Skills.css';
import { GoDatabase } from "react-icons/go";
import { SiJavascript, SiHtml5, SiCss3, SiPython, SiGithubactions } from 'react-icons/si';
import { ImGit } from "react-icons/im";

const Skills: React.FC = () => {
    return (
        <section className='skills' id='skills'>
            <div className='container'>
                <h2>Skills</h2>
                <div className='icons'>
                    <div className='icon'>
                        <div><SiJavascript size={120} /></div>
                        <div className='icon-name'>JavaScript</div>
                        <div>TypeScript, React, Node.js, Express.js, GSAP</div>
                    </div>
                    <div className='icon'>
                        <div><SiPython size={120} /></div>
                        <div className='icon-name'>Python</div>
                        <div>Django</div>
                    </div>
                    <div className='icon'>
                        <div><GoDatabase size={120} /></div>
                        <div className='icon-name'>Database</div>
                        <div>MySQL, PostgreSQL, SQLite, MongoDB</div>
                    </div>
                    <div className='icon'>
                        <div><SiGithubactions size={120} /></div>
                        <div className='icon-name'>CI/CD</div>
                        <div>GitHub Actions, TravisCI</div>
                    </div>
                    <div className='icon'>
                        <div><ImGit size={120} /></div>
                        <div className='icon-name'>Others</div>
                        <div>HTML, CSS, Git, Bash, Zsh</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;