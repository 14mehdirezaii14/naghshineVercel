
import Image from "next/image"
import { FaPlay } from "react-icons/fa";
const VideoColumn = ({ img }: any) => {

    return (
        <div className="md:col-span-8 z-20  shadow-md shadow-black overflow-hidden sm:col-span-12 relative cursor-pointer">
            <div className="hoverScale  flex items-center justify-center align-middle" style={{
                backgroundImage:
                    `url(${img})`, width: '100%', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '400px',
            }}>
                <FaPlay className="text-white block relative text-center  border-2 border-spacing-5 p-1 hover:text-color-green hover:border-green-300" size={80} />
            </div>
        </div>
    )
}

export default VideoColumn