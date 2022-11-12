
import Image from "next/image"
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import styles from './VideoColumn.module.css'
const VideoColumn = ({ img }: any) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)} className=" md:col-span-8     md:order-2 sx:order-1  shadow-md overflow-hidden sm:col-span-12 relative cursor-pointer">
                <div className="hoverScale  flex items-center justify-center align-middle videoDiv relative" style={{
                    backgroundColor: "black",
                    backgroundImage:
                        `url(${img})`, width: '100%', backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '400px',
                }}>
                    <FaPlay className="text-white block relative text-center  border-2 border-spacing-5 p-1 hover:text-color-green hover:border-green-300" size={80} />
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center  items-center w-100 h-100 flex bg-white overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none"
                    >
                        <button
                            className={`${styles.modalClose} absolute w-14 h-14 float-right top-16 right-0`}
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                        </button>
                        <div className="relative my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <video className="w-full"  controls poster={img}>
                                        <source type="video/mp4" src="https://player.vimeo.com/progressive_redirect/download/334460326/container/50be48b1-89e2-4ac5-9835-eb1ebcb49829/35fde052/jack_daniel%27s_barrel_showroom%20%28240p%29.mp4?expires=1665817182&loc=external&oauth2_token_id=922225440&signature=64a5ed7516f4c067afeffbd8134735b56e3d69ed006e84a7e9e4718560f93f0b" />
                                    </video>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0  bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default VideoColumn