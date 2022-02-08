import { useState } from "react";
import { CardObject } from "../../../types";
import './card.css';

interface Prop {
    card: CardObject
}

const Card: React.FC<Prop> = (prop: Prop) => {


    const [isTurned, setIsTurned] = useState(false);

    return (
        <div onClick={() => setIsTurned(!isTurned)} className={`card ${isTurned ? 'turned' : ''}`}>
            <div className="front">
                <span>{prop.card.title}</span>
                
            </div>
            <div className="back">
                <span>{prop.card.description}</span>
            </div>
        </div>
    )

}

export default Card;