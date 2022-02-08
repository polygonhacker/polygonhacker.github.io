import Card from "./Card/Card";
import { CardObject } from "../../types";

interface Prop {
    cardList: CardObject[]
}

const CardDiv: React.FC<Prop> = (prop: Prop) => {

    const cardDivProp = prop.cardList
    console.log(cardDivProp);

    return (
        <div className="cardDiv">
            {cardDivProp.map(card => {return <Card card={card}/>})}
        </div>
    )
}

export default CardDiv;