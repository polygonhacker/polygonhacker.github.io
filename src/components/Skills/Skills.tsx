import './Skills.css';
import { DiDjango, DiHtml5, DiCss3, DiReact,  } from "react-icons/di";
import { SiJavascript, SiDjango, SiHtml5, SiCss3, SiReact, SiPython, SiSass } from 'react-icons/si';

const Skills: React.FC = () => {
    return (
        <section className='skills'>
            <div className='container'>
                <h2>Skills</h2>
                <div className='icons'>
                    <SiReact size={120} color={'#61DBFB'} />
                    <SiJavascript size={120} color={'Ronchi'} />
                    <SiHtml5 size={120} />
                    <SiCss3 size={120} />
                    <SiSass size={120} />
                    <SiPython size={120} />
                    <SiDjango size={120} />
                </div>
            </div>
        </section>
    )
}

export default Skills;