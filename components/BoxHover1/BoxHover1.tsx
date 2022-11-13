import ImageComponent from "../ImageComponent/ImageComponent"

interface boxHoverType {
    src: string,
    subTItle: string,
    dialog: string,
    classSubTitle?: string,
    classDialog?: string,
    classColSectionBlog?: string
}

const BoxHover1 = ({ src, subTItle, dialog, classSubTitle, classDialog, classColSectionBlog }: boxHoverType) => {
    return (
        <>
            <div className={`colSectionBlog ${classColSectionBlog}`}>
                <ImageComponent src={src} alt='1' width={500} height={500} className={'imgSectionBlog'} />
                <div className='p-3 relaive textColSectionBlog'>
                    <p className={`text-color-green ${classSubTitle} subTitleSectionBlog subTitleBrfore`}>
                        {subTItle}
                    </p>
                    <p className={` ${classDialog} dialogSectionBlog`}>
                        {dialog}
                    </p>
                </div>
            </div>
        </>
    )
}

export default BoxHover1