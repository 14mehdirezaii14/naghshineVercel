import Link from "next/link"
import ImageComponent from "../ImageComponent/ImageComponent"
const HeroSection = ({ src, infoTitle, subTitle, to, textBtn }: { src: string, infoTitle: string, subTitle: string, to: string, textBtn: string }) => {
    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-x-12 heroSectionDiv   items-center ">
                <div className="my-box-shadow md:col-span-8 overflow-hidden sm:col-span-12 relative text-right" >
                    <Link href='/'>
                        <a>
                            <div className="divImg relative heroSectionImage my-box-shadow">
                                <ImageComponent src={src} alt='1' width={800} height={400} className={'hoverScale shadow-lg right-0'} />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="md:col-span-4  sm:col-span-12">
                    <Link href='/'>
                        <a>
                            <p className={`text-color-green relative mb-0 subTitle subTitleBrfore`}>hello</p>
                            <p className='infoTitle'>
                                {infoTitle}
                            </p>
                        </a>
                    </Link>
                    <Link href={to} >
                        <a className='btnGreen ' >{textBtn}</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default HeroSection