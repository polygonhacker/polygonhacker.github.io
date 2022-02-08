import CardDiv from "../CardDiv/CardDiv";
import { CardObject } from "../../types";
import "./Projects.css";

const cardList: CardObject[] = [
    {
        title: '1',
        description: 'blah',
    },
    {
        title: '2',
        description: 'blah blah',
    },
    {
        title: '3',
        description: 'abc',
    }
]

const Projects: React.FC = () => {

    return (
        <section className="Projects">
            <h2>Projects</h2>
            <CardDiv cardList={cardList} />
        </section>
    )
}

export default Projects;