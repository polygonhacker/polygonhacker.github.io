import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import './Intro.css'
import face from './face.png';
import { Item } from '../../types'

gsap.registerPlugin(Flip);


const name = 'YONG CHEOL PARK';
const newPositions = [11, 1, 9, 0, 3, 8, 2, 4, 10, 6, 12, 5, 14, 7, 13];
const originalPosition = [3, 1, 6, 4, 7, 11, 9, 13, 5, 2, 8, 0, 10, 14, 12];
let anagramOn = false;

// type Item = {id: number, letter: string};

const createItemList = (letters: string) => {
    let itemList = []
    for(let i=0; i<letters.length; i++) { 
        let item: Item = {id: i, letter: name[i]};
        itemList.push(item);
    }
    return itemList;
}

const Intro = () => {

    const el = useRef<HTMLDivElement>(null);
    const q = gsap.utils.selector(el);
    const initialLayout: {state: undefined | any, items: Item[]} = {
        state: undefined,
        items: createItemList(name)
    }
    const [layout, setLayout] = useState(initialLayout);

    useLayoutEffect(() => {
        if (!layout.state) return;
        Flip.from(layout.state, {
            duration: 2.5,
        });
    }, [layout]);


    const rearrange = () => {
        let newItems = []
        if (!anagramOn) {
            for (let i=0; i<layout.items.length; i++) {
                newItems.push(layout.items[newPositions[i]]);
            }
        } else {
            for (let i=0; i<layout.items.length; i++) {
                newItems.push(layout.items[originalPosition[i]]);
            }
        }
        anagramOn = ! anagramOn;
        setLayout({
            state: Flip.getState(q("div.char")),
            items: newItems
        });
    }


    return (
        <section className='Intro'>
            <div>
                <div className='container'>
                    <div>
                        <h1>Hi there!</h1>
                        <h1>Nice to meet you.</h1>
                        <h1>My name is</h1>
                    </div>
                    
                </div>
                <div ref={el} onClick={rearrange} className='anagramDiv'>
                    { layout.items.map(item => (
                        <div id={`letter-${item.id}`} key={item.id} className='char'>
                            {item.letter}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Intro;