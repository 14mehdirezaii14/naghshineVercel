import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
const BgTitleAnimation = ({ keyUnique, words, dir }: { keyUnique: string, words: string[], dir: string }) => {
    const ref = useRef<any>(null)
    const [count, setCount] = useState<number>(0)
    const [wordsTotal, setWordsTotal] = useState(words)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const lazyRootTop = ref.current?.getBoundingClientRect()
            if (lazyRootTop) {
                // lazyRootTop.top - 150
                if (lazyRootTop.top > 350) {
                    for (let n = 0; n < words.length; n++) {
                        console.log(document.getElementsByClassName(`R11`)[0].getBoundingClientRect().left + window.scrollX)
                        dir === 'rtl' ? gsap.to(`.${words[n]}${keyUnique}${keyUnique}`, {
                            opacity: `0`,
                            x: `${n + 2}00px`,
                            duration: `1`
                        },) : gsap.to(`.${words[n]}${keyUnique}${keyUnique}`, {
                            opacity: `0`,
                            x: `-${n + 2}00px`,
                            duration: `1`
                        },)
                    }
                }

                else if (lazyRootTop.top < 350) {
                    console.log('27')
                    for (let n = 0; n < words.length; n++) {

                        gsap.to(`.${words[n]}${keyUnique}${keyUnique}`, {
                            opacity: `0.1`,
                            x: `0`,
                            duration: `1`
                        },)
                        console.log(document.getElementsByClassName(`C11`)[0].getBoundingClientRect().x - window.screenLeft , 'line 36')
                    }


                    // console.log(count)
                }



            }
        });
    }, [])
    return (
        < div ref={ref} className="flex relative bgTitle z-0" style={{ top: '-50px', marginBottom: '-100px' }} >
            {
                words.map((word: any, index: any) => {
                    return (
                        <div key={index} className={`relative bgTitle${keyUnique} ${word}${keyUnique}${keyUnique}`} style={{
                            transition: '0.2s all ease-out',
                            fontSize: '150px',
                            letterSpacing: '40px',
                            opacity: `0`,
                            transform: `translate3d(200px, 0px, 0px)`
                        }}>
                            {word}
                        </div>
                    )
                })
            }

        </div >
    )
}

export default BgTitleAnimation