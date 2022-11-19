import { useRef, useEffect } from "react"
import gsap from "gsap"


interface bgTitleType { keyUnique: string, words: string[], dir: string, color?: string, className?: string, parentPosition?: string }


const BgTitleAnimation = ({ keyUnique, words, dir, className, parentPosition }: bgTitleType) => {
    const ref = useRef<any>(null)

    const scrollEvent = () => {
        const lazyRootTop = ref.current?.getBoundingClientRect()
        if (lazyRootTop) {
            if (lazyRootTop.top > 750) {
                for (let n = 0; n < words.length; n++) {
                    dir === 'rtl' ? gsap.to(`.${words[n]}${keyUnique}${n}`, {
                        opacity: `0`,
                        x: `${n + 2}00px`,
                        duration: `1`
                    },) : gsap.to(`.${words[n]}${keyUnique}${n}`, {
                        opacity: `0`,
                        x: `-${n + 2}00px`,
                        duration: `1`
                    },)
                }
            }
            else if (lazyRootTop.top < 750) {
                console.log('27')
                for (let n = 0; n < words.length; n++) {
                    gsap.to(`.${words[n]}${keyUnique}${n}`, {
                        opacity: `1`,
                        x: `0`,
                        duration: `1`
                    },)
                }
            }
        }
        return
    }
    useEffect(() => {
        document.addEventListener("scroll", scrollEvent);
        return () => {
            document.removeEventListener("scroll", scrollEvent);
        };
    }, [])
    return (
        < div ref={ref} className={`${dir === "rtl" ? 'text-right' : 'text-left'} bgTitle ${parentPosition === 'absolute' ? 'absolute' : 'relative'} `} style={{ top: '-50px', marginBottom: '-100px', color: '#f6f7f9' }} >
            {
                words.map((word: any, index: any) => {
                    return (
                        <div key={index} className={`relative  ${className} opacity-1 inline-block bgTitle${keyUnique} ${word}${keyUnique}${index} bgTitle ${className} `}  >
                            {word}
                        </div>
                    )
                })
            }

        </div >
    )
}

export default BgTitleAnimation