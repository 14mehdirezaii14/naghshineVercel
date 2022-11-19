import HeaderTitle1 from "../components/HeaderTitle1/HeaderTitle1"
import BoxHover1 from "../components/BoxHover1/BoxHover1"
import BgTitleAnimation from "../components/BgTitleAnimation/BgTitleAnimation"
const Work = () => {
    return (
        <div className="container mx-auto mb-7">
            <HeaderTitle1 bgTitle="W,O,R,K,S" title="W,E M,A,D,E T,H,I,S H,A,P,P,E,N" />
            <div className="grid gap-6 md:grid-cols-3 sx:grid-cols-1  relative">
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                {/*  */}
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                {/*  */}
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                <div className="absolute top-28">
                    <BgTitleAnimation keyUnique={'10'} className="-z-10 top-96" dir="ltr" words={['h', 'e', 'l', 'l', 'o']} />
                </div>
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                {/*  */}
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                {/*  */}
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
            </div>
        </div>
    )
}

export default Work