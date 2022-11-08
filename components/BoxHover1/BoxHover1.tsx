import ImageComponent from "../ImageComponent/ImageComponent"

export default function ({ src, subTItle, dialog }: { src: string, subTItle: string, dialog: string }) {
    return (
        <>
            <div className='colSectionBlog '>
                <ImageComponent src={src} alt='1' width={500} height={500} className={'imgSectionBlog'} />
                <div className='p-3 relaive textColSectionBlog'>
                    <p className='text-color-green subTitleSectionBlog subTitleBrfore'>
                        {subTItle}
                    </p>
                    <p className='text-white dialogSectionBlog'>
                        {dialog}
                    </p>
                </div>
            </div>
        </>
    )
}