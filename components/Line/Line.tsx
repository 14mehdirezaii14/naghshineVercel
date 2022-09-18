import { FunctionComponent } from "react"
import styles from './Line.module.css'
import { gsap } from 'gsap/dist/gsap'
import { useEffect, useState, useRef, useCallback } from "react"

const Line: any = () => {
    const [count, setCount] = useState(0);
    const [lastScroll, setLastScroll] = useState(0)
    const lineSvgElement = useRef<HTMLHeadingElement>(null)
    const lineElement = useRef<HTMLHeadingElement>(null)

    const scrollEvent = useCallback((e: Event) => {
        gsap.to(lineElement.current, { height: '216px' })
        let st = window.pageYOffset || document.documentElement.scrollTop;
        setLastScroll(window.scrollY)
        if (st > lastScroll) {
            setCount(-st)
        }
        else if (st <= 50) {
            setCount(0)
            gsap.to(lineElement.current, { height: '0px' })
        }
        else if (st === window.scrollY) {
            console.log('end')
        }
        else {
            setCount(prev => prev - 1)
        }
    }, [])


    useEffect(() => {
        document.addEventListener("scroll", scrollEvent)
    }, [])

    return (
        <div className={styles.Line} ref={lineElement}>
            <div className={styles.Line__svg} ref={lineSvgElement} style={{ transform: `matrix(1, 0, 0, 1, 0, ${count})` }} >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1064 4569">
                        <path d="M249,0,979,862,0,1556l1038,793L21,3202l1043,608L249,4518">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Line