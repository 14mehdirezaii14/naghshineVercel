import Image from "next/image"
import vercel from '../../public/favicon.ico'
import { useEffect, FunctionComponent, useRef } from "react"
import { gsap } from 'gsap/dist/gsap'
import Link from "next/link"
import styles from './navBar.module.css'
import { listItemNav } from './listItemNav'
const NavBar: FunctionComponent<{}> = () => {
    const navElement = useRef<HTMLHeadingElement>(null)
    const scrollEventNavBar = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollTop > 10 ? gsap.to(navElement.current, { opacity: '1' }) : gsap.to(navElement.current, { opacity: '0' })
    }
    useEffect(() => {
        document.addEventListener("scroll", scrollEventNavBar);
        return () => {
            window.removeEventListener("scroll", scrollEventNavBar);
        };
    }, [])
    return (
        <div ref={navElement} className="shadow-md  py-2     fixed top-0 opacity-0 left-0 right-0 z-20 bg-white">
            <div className="container mx-auto">
                {/* logo */}
                <div className="float-left">
                    <Image priority width={50} height={50} quality={70} src={vercel} alt="Logo" />
                </div>
                {/* item nav */}
                <div className={`flex ${styles.itemNav} items-center pt-3`}>
                    {listItemNav.map((item: any, index: any) => {
                        return (
                            <Link key={index} href={item.path}><a className="mx-3">
                                {item.title}
                            </a></Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NavBar