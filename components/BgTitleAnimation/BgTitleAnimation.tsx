import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
const BgTitleAnimation = ({ keyUnique, words, dir, color = '#000' }: { keyUnique: string, words: string[], dir: string, color?: string }) => {
    const ref = useRef<any>(null)
    const [count, setCount] = useState<number>(0)
    const [wordsTotal, setWordsTotal] = useState(words)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const lazyRootTop = ref.current?.getBoundingClientRect()
            if (lazyRootTop) {
                // lazyRootTop.top - 150
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
                            opacity: `0.1`,
                            x: `0`,
                            duration: `1`
                        },)
                    }


                    // console.log(count)
                }



            }
        });
    }, [])
    return (
        < div ref={ref} className="flex bgTitle relative z-0" style={{ top: '-50px', marginBottom: '-100px' }} >
            {
                words.map((word: any, index: any) => {
                    return (
                        <div key={index} className={`relative bgTitle${keyUnique} ${word}${keyUnique}${index} bgTitle `}  >
                            {word}
                        </div>
                    )
                })
            }

        </div >
    )
}

export default BgTitleAnimation