import CanvasDotsBackground from "../CanvasDotsBackground/CanvasDotsBackground"
import BgTitleAnimation from "../BgTitleAnimation/BgTitleAnimation"
import BoxHover1 from "../BoxHover1/BoxHover1"

const SectionDotsBg = () => {
    return (
        <>
            <div className='  overflow-hidden  sectionBlog pb-10' style={{
                background: '#1d1d20',
                color: 'black !important'
            }} >
                <div className='container  mx-auto  relative' >
                    <CanvasDotsBackground />
                    <BgTitleAnimation keyUnique={'4'} words={['b', 'l', 'o', 'g']} dir={'rtl'} />
                    <div className='text-white relative md:-top-20 sx:top-0 text-center  grid grid-cols-12 -mb-16'>
                        <div className='md:col-span-4 sx:col-span-12 ' ><p className='text-left' style={{
                            position: 'relative',
                            fontSize: '35px',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                            letterSpacing: '.06em',

                        }}>BREAKING NEWS</p></div>
                        <div className="md:col-span-8 sx:col-span-12">
                            <p className='text-left' style={{
                                fontWeight: 400

                            }}>Whats going on at Bite Size, you ask?
                                <br />
                                Well, here are some of the stories our team is proud to share with the world.</p>
                        </div>
                    </div>
                    <div className="container mx-auto md:mt-0 sx:mt-20">
                        <div className="grid  gap-6 md:grid-cols-3 sx:grid-cols-1  relative">
                            <BoxHover1 classDialog="text-white" src='/blog.webp' subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                            {/*  */}
                            <BoxHover1 classDialog="text-white" src='/blog.webp' subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />
                            {/*  */}
                            <BoxHover1 classDialog="text-white" src='/blog.webp' subTItle="4th of October 2022" dialog="Gen Z in Canada - A Starting Point  For A Dialogue." />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionDotsBg