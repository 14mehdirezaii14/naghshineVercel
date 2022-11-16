import dynamic from "next/dynamic"
import Link from "next/link";
import styles from './Footer.module.css';
import { FaInstagram, FaFacebookF, FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const BgTitleAnimation = dynamic(() => import('../BgTitleAnimation/BgTitleAnimation'))

const Footer = () => {
    return (
        <div className="bg-[#f6f7f9] pt-5">
            <div className="container mx-auto py-5">

                <BgTitleAnimation dir="rtl" keyUnique="4" words={['c', 'o', 'n', 't', 'a', 'c', 't']} />
                <div className="grid grid-cols-12 relative -top-16">
                    <div className="md:col-span-9 sx:col-span-12">
                        <p className={`${styles.footerLeft}`}>
                            DON’T BE SHY, WE DON’T BITE! <br />
                            TELL US ABOUT YOUR
                            <Link href='/'>
                                <a className="bgGreen text-white hover:bg-black px-2">NEW PROJECT</a>
                            </Link>
                            , YOUR FUTURE DREAM
                            <Link href='/'>
                                <a className="bgGreen text-white hover:bg-black px-2">JOB </a>
                            </Link>
                            <br />
                            OR IF YOU SIMPLY WANT TO
                            <Link href='/'>
                                <a className="bgGreen text-white hover:bg-black px-2">TALK OVER COFFEE!</a>
                            </Link>
                        </p>
                    </div>
                    <div className="md:col-span-3 sx:col-span-12 text-right">
                        <div className="socialsFooter flex justify-center">
                            <Link href='/'>
                                <a className="hover:text-color-green px-3">
                                    <FaInstagram size={20} />
                                </a>
                            </Link>
                            <Link href='/'>
                                <a className="hover:text-color-green px-3">
                                    <FaFacebookF size={20} />
                                </a>
                            </Link>
                            <Link href='/'>
                                <a className="hover:text-color-green px-3">
                                    <FaBehance size={20} />
                                </a>
                            </Link>
                            <Link href='/'>
                                <a className="hover:text-color-green px-3">
                                    <FaLinkedinIn size={20} />
                                </a>
                            </Link>
                            <Link href='/'>
                                <a className="hover:text-color-green px-3">
                                    <FaTwitter size={20} />
                                </a>
                            </Link>
                        </div>
                        <div>
                            Bite Size @ Montréal headquarter 4267 Boul.Saint-Laurent Suite 100 Montréal, Quebec, Canada H2W 1Z4 <br />
                        </div>
                        <div className="overflow-hidden">
                            \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                        </div>
                        <div>
                            Toronto - 10 North Rivermede Rd. Vaughan, Ontario, Canada L4K 2H2
                            admin@bitesizeinc.com
                            647-370-6551
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer