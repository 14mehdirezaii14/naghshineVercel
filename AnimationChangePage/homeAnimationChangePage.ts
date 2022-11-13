import Router from "next/router";
import gsap from "gsap";
const homeAnimationChangePage = (e: any, to: string) => {
    e.preventDefault();
    gsap.to('.heroSectionImage', { right: "-800px", duration: 2 })
    gsap.to('.Home', { position: "relative", duration: 0.5 })
    // gsap.to('.Home > span , p, a ', { position: "relative", top: '70px', duration: 0.5 })
    gsap.to('.videoDiv', { right: "800px", duration: 2 })
    gsap.to('.Home', { opacity: 0, duration: 1 })
    gsap.to('.Line_Line__kdL_O', { height:0, duration: 0.5 })
    setTimeout(() => {
        Router.push(`${to}`)
    }, 1000)
}

export default homeAnimationChangePage