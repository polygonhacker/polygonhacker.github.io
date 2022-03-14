import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { Flip, TextPlugin, ScrollTrigger } from 'gsap/all';
import './Intro.css'
import face from './face.png';
import { Item } from '../../types'

gsap.registerPlugin(Flip);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


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

    // header animation
    const headerElement = useRef<HTMLDivElement>(null);
    const p = gsap.utils.selector(headerElement);
    const timeLine = useRef<any | null>(null);

    useEffect(() => {
        timeLine.current = gsap.timeline()
                .to(
                    p(".text1"), {
                        text: {value: "Hi there!<br />"},
                        duration: 0.75,
                        ease: 'none',
                        delay: 1
                    }
                )

                .to(
                    p(".text2"), {
                        text: {value: "Nice to meet you.<br />"},
                        duration: 1.5,
                        ease: 'none',
                        delay: 0.5
                    }
                )

                .to(
                    p(".text3"), {
                        text: {value: "My name is"},
                        duration: 0.75,
                        ease: 'none',
                        delay: 0.5
                    }
                )

                .from(
                    p(".anagramDiv"), {
                        opacity: 0,
                        scale: 0,
                        ease: 'power1',
                        duration: 0.5
                    }
                )

        const cursor = gsap.fromTo(
            p('.cursor'),
            {autoAlpha: 0},
            {autoAlpha: 1, duration: 0.5, repeat: -1}
        )

        gsap.to(
            p(".cursor"), {
                text: {value: ""},
                delay: 9
            }
        )

        ScrollTrigger.create({
            start: 'top',
            onEnter: rearrange,
            toggleActions: 'complete none none none',
            once: true,
        })

    }, [])

    // anagram
    const anagramElement = useRef<HTMLDivElement>(null);
    const q = gsap.utils.selector(anagramElement);
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
        anagramOn = !anagramOn;
        setLayout({
            state: Flip.getState(q("div.char")),
            items: newItems
        });
    }


    return (
        <section className='Intro'>
            <div ref={headerElement}>
                <div className='container'>
                    <div className='texts'>
                        <span className='text1'></span>
                        <span className='text2'></span>
                        <span className='text3'></span>
                        <span className='cursor'>|</span>
                    </div>
                </div>
                <div ref={anagramElement} onClick={rearrange} className='anagramDiv'>
                    { layout.items.map(item => (
                        <div id={`letter-${item.id}`} key={item.id} 
                        className={`char ${item.letter == ' ' ? 'space' : ''}`}>
                            {item.letter}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Intro;