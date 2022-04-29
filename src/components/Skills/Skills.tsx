import './Skills.css';
import { DiDjango, DiHtml5, DiCss3, DiReact,  } from "react-icons/di";
import { SiJavascript, SiDjango, SiHtml5, SiCss3, SiReact, SiPython, SiSass } from 'react-icons/si';

const Skills: React.FC = () => {
    return (
        <section className='skills' id='skills'>
            <div className='container'>
                <h2>Skills</h2>
                <div className='icons'>
                    <div className='react-icon'>
                        <SiReact size={120} />
                        <div>React</div>
                    </div>
                    <div className='js-icon'>
                        <SiJavascript size={120} />
                    </div>
                    <div className='html-icon'>
                        <SiHtml5 size={120} />
                    </div>
                    <div className='css-icon'>
                        <SiCss3 size={120} />
                    </div>
                    <div className='sass-icon'>
                        <SiSass size={120} />
                    </div>
                    <div className='python-icon'>
                        <SiPython size={120} />
                    </div>
                    <div className='django-icon'>
                        <SiDjango size={120} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;