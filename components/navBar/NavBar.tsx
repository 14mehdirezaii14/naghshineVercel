import Image from "next/image"
import vercel from '../../public/favicon.ico'
import { useEffect, FunctionComponent, useRef } from "react"
import { gsap } from 'gsap/dist/gsap'
// import CSSRulePlugin from "gsap/CSSRulePlugin"
import Link from "next/link"
import styles from './navBar.module.css'
import { listItemNav } from './listItemNav'
import { FiMenu } from "react-icons/fi";
import { useRouter } from 'next/router'
import homeAnimationChangePage from "../../AnimationChangePage/homeAnimationChangePage"
const NavBar: FunctionComponent<{}> = () => {
    const router = useRouter()
    const navElement = useRef<HTMLHeadingElement>(null)
    const navSx = useRef<HTMLHeadingElement>(null)
    const refSpanBtnSx = useRef<any>(null)
    const scrollEventNavBar = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollTop > 10 ? gsap.to(navElement.current, { opacity: '1' }) : gsap.to(navElement.current, { opacity: '0' })
    }
    useEffect(() => {
        console.log(router)
        document.addEventListener("scroll", scrollEventNavBar);
        return () => {
            window.removeEventListener("scroll", scrollEventNavBar);
        };
    }, [])
    // 
    const clickMenu = () => {
        let right = navSx.current?.style.right
        let classListSpan = [...refSpanBtnSx.current?.classList]
        if (classListSpan.includes('activeSpan')) {
            refSpanBtnSx.current?.classList.remove('activeSpan')
        } else {
            refSpanBtnSx.current?.classList.add('activeSpan')
        }
        console.log('click')
        console.log(navSx.current?.style.right)
        right !== "0px" ? gsap.to(navSx.current, { right: 0, duration: 0.5 }) : gsap.to(navSx.current, { right: -300, duration: 0.5 })
    }
    return (
        <>
            <div ref={navElement} className=" fixed shadow-md  py-2 z-50  top-0  left-0 right-0 bg-white">
                <div className="container mx-auto">
                    {/* logo */}
                    <div className="float-left">
                        <Image placeholder='blur' blurDataURL='/download-min.jpg' priority width={50} height={50} quality={70} src={vercel} alt="Logo" />
                    </div>
                    {/* item nav */}
                    <div className={` ${styles.itemNav} items-center pt-3 sx:hidden md:flex`}>
                        {listItemNav.map((item: any, index: any) => {
                            return (
                                <a key={index} href={item.path} onClick={router.asPath === '/' ? (e) => homeAnimationChangePage(e,item.path) : (e) => homeAnimationChangePage(e,item.path)} className="mx-3">
                                    {item.title}
                                </a>
                            )
                        })}
                    </div>
                    {/* sx btn nav */}
                    <div onClick={clickMenu} className={`${styles.itemNav} relative items-center top-0 pt-3 sx:flex md:hidden`}>
                        <button className="btn " >
                            <span ref={refSpanBtnSx} className={`${styles.spanBtnNav} top-5 spanBtnNav`}></span>
                        </button>
                    </div>

                </div>

            </div>
            {/* navBar sx */}
            <div ref={navSx} className="sx:fixed md:hidden top-14 pt-5 w-2/4 text-right z-50 bg-white shadow-lg h-full -right-80 ">
                <ul>
                    {listItemNav.map((item: any, index: any) => {
                        return (
                            <li onClick={clickMenu} key={index}>
                                <Link href={item.path}>
                                    <a className="mx-3">
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </>
    )
}

export default NavBar