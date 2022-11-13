import HeaderTitle1 from "../components/HeaderTitle1/HeaderTitle1"
import BoxHover1 from "../components/BoxHover1/BoxHover1"
const Work = () => {
    return (
        <div className="container mx-auto">
            <HeaderTitle1 bgTitle="W,O,R,K,S" title="F,R,E,S,H     N,E,W,S" />
            <div className="grid gap-6 md:grid-cols-3 sx:grid-cols-1  relative">
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                {/*  */}
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                {/*  */}
                <BoxHover1 src='/blog.webp' classColSectionBlog="hover:text-white text-black boxWork" subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
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