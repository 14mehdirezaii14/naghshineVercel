import { useEffect, useState, useRef, FunctionComponent, useCallback } from "react"
import styles from './Line.module.css'
import { gsap } from 'gsap/dist/gsap'


const Line: FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const lineElement = useRef<HTMLHeadingElement>(null)

    const scrollEvent = useCallback(() => {
        const scrollY = window.scrollY
        const allHeightPage = window.innerHeight + window.scrollY
        setCount(scrollY)
        if (scrollY < 30) {
            gsap.to(lineElement.current, { height: '0px' })
        }
        else if (allHeightPage === document.body.offsetHeight) {

            gsap.to(lineElement.current, { height: '100%' })
        }
        else {
            gsap.to(lineElement.current, { height: '400px' })
        }
    }, [])


    useEffect(() => {
        document.addEventListener("scroll", scrollEvent);
        return () => {
            document.removeEventListener("scroll", scrollEvent);
        };
    }, [])


    return (
        <div className={`${styles.Line} z-0`} ref={lineElement}>
            <div className={styles.Line__svg} style={{ transform: `matrix(1, 0, 0, 1, 0, -${count})` }} >
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