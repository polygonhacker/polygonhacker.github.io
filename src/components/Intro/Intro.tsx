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

const mql = window.matchMedia('min-width: 1000px');

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
    const animationTextsElement = useRef<HTMLDivElement>(null);
    const p = gsap.utils.selector(animationTextsElement);
    const timeLine = useRef<any | null>(null);

    const introElement = useRef<HTMLDivElement>(null);
    const q = gsap.utils.selector(introElement);

    useEffect(() => {
        console.log(window.innerWidth);
        console.log(window.screen.width);
        if (window.innerWidth > 1000) {
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
                        q(".anagramDiv"), {
                            opacity: 0,
                            scale: 0,
                            ease: 'power1',
                            duration: 0.5
                        }
                    )
                    .from(
                        q(".postAnimationName"), {
                            opacity: 0,
                            y: -300,
                            duration: 3,
                            delay: 5
                        }
                    )
                    .fromTo(
                        q(".postAnimationDetails"), {
                            opacity: 0,
                            y: 400,
                            duration: 2,
                        },
                        {
                            opacity: 1,
                            y: 300
                        }
                    )

            gsap.fromTo(
                p('.cursor'),
                {autoAlpha: 0},
                {autoAlpha: 1, duration: 0.5, repeat: -1}
            )

            // gsap.to(
            //     p(".cursor"), {
            //         text: {value: ""},
            //         delay: 9
            //     }
            // )
        }

        setTimeout(() => {rearrange()}, 7000)

        setTimeout(() => {
            // gsap.to(
            //     p(".cursor"), {
            //         text: {value: ""},
            //         repeat: 0,
            //         autoAlpha: 0
            //     }
            // )
            removeCursor();
            // Flip.fit(".anagramDiv", ".texts", {
            //     duration: 1,
            // })

            const t1 = gsap.timeline();
            const anagram = document.querySelector('.anagramDiv');

            t1.set('span', {perspective: 400}) ;
            if (anagram) {
                t1.to(anagram.getElementsByTagName('div'), {
                    duration: 3,
                    opacity: 0,
                    y: gsap.utils.random(-1000, 1000, true),
                })
            }
            removeTexts();


        }, 10000)
        
        // setTimeout(() => {
        //     gsap.from(
        //         q(".postAnimationName"), {
        //             opacity: 0,
        //             y: gsap.utils.random(-1000, 1000, true),
        //             duration: 3
        //         }
        //     )

        // }, 13000)
        

    }, [])

    // Remove Cursor
    const removeCursor = () => {
        const cursor = document.getElementsByClassName('cursor');
        if (cursor[0].parentNode) {
            cursor[0].parentNode.removeChild(cursor[0]);
        }
    }

    // Remove Texts
    const removeTexts = () => {
        let text;
        for (let i=1; i<4; i++) {
            text = document.querySelector(`.text${i}`);
            if (text) text.remove();
        }

    }

    // anagram
    // const anagramElement = useRef<HTMLDivElement>(null);
    // const q = gsap.utils.selector(anagramElement);
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

    const animationTexts = 
        <div className='texts' ref={animationTextsElement}>
            <span className='text1'></span>
            <span className='text2'></span>
            <span className='text3'></span>
            <span className='cursor'>|</span>
        </div>;

    const smallScreenTexts = 
        <div className='smallScreenTexts'>
            <span className='name'>PolygonHacker<br/></span>
            <span className='details'>
                Software Developer<br/>
                Creator of Doubdle<br/>
                Vancouver, BC<br/>
                University of Toronto '21
            </span>
        </div>;

    const postAnimationName = <span className='postAnimationName'>PolygonHacker</span>

    const postAnimationDetails = 
        <span className='postAnimationDetails'>
            Software Developer<br/>
            Creator of Doubdle<br/>
            Vancouver, BC<br/>
            University of Toronto '21
        </span>

    return (
        <section className='Intro'>
            <div ref={introElement}>
                <div className='container'>
                    {window.innerWidth > 1000 && postAnimationName}
                    {window.innerWidth > 1000 && postAnimationDetails}
                    {window.innerWidth > 1000 && animationTexts}
                    {window.innerWidth <= 1000 && smallScreenTexts}
                </div>
                {
                    window.innerWidth > 1000 &&
                    <div className='anagramDiv'>
                        { layout.items.map(item => (
                            <div id={`letter-${item.id}`} key={item.id} 
                            className={`char ${item.letter == ' ' ? 'space' : ''}`}>
                                {item.letter}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}

export default Intro;