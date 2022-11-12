import Image from "next/image"

interface ImageType {
    src: string, alt: string, width: number, height: number, className?: string
}
const ImageComponent = ({ src, alt, width, height, className }: ImageType) => {
    return (
        <>
            <Image placeholder='blur' alt={alt} src={src} blurDataURL={src} height={height} width={width} className={`hoverScale ${className} right-0 bg-gray-500 w-full block`} />
        </>
    )
}

export default ImageComponent