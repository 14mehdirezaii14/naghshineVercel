import { ClickEventValue } from "google-map-react"
import dynamic from "next/dynamic"
import styles from '../styles/blog.module.css'
import gsap from "gsap"
import { useState, useMemo } from "react"
import Image from "next/image"
import HeaderTitle1 from "../components/HeaderTitle1/HeaderTitle1"
const data = [
    {
        category: 'project',
        count: 3,
        posts: [
            {
                title: 'Project',
                date: '17TH OF JULY 2020',
                image: '/blog.webp',
                description: 'The kraft cardboard box, printed with biodegradable inks, includes a log journal, a memory aid bracelet, a gift certificate for an organic food basket and a sprouting pencil.'
            },
            {
                title: 'GUTENBERG 2020: BITE SIZE WINS A PRESTIGIOUS AWARD!',
                date: '17TH OF JULY 2020',
                image: '/blog.webp',
                description: 'The kraft cardboard box, printed with biodegradable inks, includes a log journal, a memory aid bracelet, a gift certificate for an organic food basket and a sprouting pencil.'
            },
            {
                title: 'GUTENBERG 2020: BITE SIZE WINS A PRESTIGIOUS AWARD!',
                date: '17TH OF JULY 2020',
                image: '/blog.webp',
                description: 'The kraft cardboard box, printed with biodegradable inks, includes a log journal, a memory aid bracelet, a gift certificate for an organic food basket and a sprouting pencil.'
            }
        ]
    },
    {
        category: 'Initiatives',
        count: 4,
        posts: [
            {
                title: 'Initiatives',
                date: '17TH OF JULY 2020',
                image: '/blog.webp',
                description: 'The kraft cardboard box, printed with biodegradable inks, includes a log journal, a memory aid bracelet, a gift certificate for an organic food basket and a sprouting pencil.'
            },
            {
                title: 'GUTENBERG 2020: BITE SIZE WINS A PRESTIGIOUS AWARD!',
                date: '17TH OF JULY 2020',
                image: '/blog.webp',
                description: 'The kraft cardboard box, printed with biodegradable inks, includes a log journal, a memory aid bracelet, a gift certificate for an organic food basket and a sprouting pencil.'
            },
            {
                title: 'GUTENBERG 2020: BITE SIZE WINS A PRESTIGIOUS AWARD!',
                date: '17TH OF JULY 2020',
                image: '/blog.webp',
                description: 'The kraft cardboard box, printed with biodegradable inks, includes a log journal, a memory aid bracelet, a gift certificate for an organic food basket and a sprouting pencil.'
            }
            ,
            {
                title: 'GUTENBERG 2020: BITE SIZE WINS A PRESTIGIOUS AWARD!',
                date: '17TH OF JULY 2020',
                image: '/blog.webp',
                description: 'The kraft cardboard box, printed with biodegradable inks, includes a log journal, a memory aid bracelet, a gift certificate for an organic food basket and a sprouting pencil.'
            }
        ]
    }
]
const Blog = () => {
    const [activeTab, setActiveTab] = useState<string>('all')
    const changeTab = (e: any) => {
        console.log(e.target.classList[3])
        setActiveTab(e.target.classList[3])
    }
    return (
        <div className="container mx-auto">
            {/* head blog */}
            <HeaderTitle1 bgTitle="B,L,O,G" title="F,R,E,S,H   N,E,W,S" />
            {/*  */}
            <div className="grid relative   md:grid-cols-12 sx:grid-cols-1">
                <div className="sticky col-span-2 ">

                    <ul className="   -mb-px text-sm   " id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li onClick={() => setActiveTab('all')} className="mr-2" role="presentation">
                            <button className={`inline-block px-4 rounded-t-lg ${activeTab === 'all' ? styles.activeTabBlog : null}  ${styles.btnTabBlog}`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">all</button>
                        </li>
                        {data.map((category, index) => {
                            return (
                                <li key={index} onClick={changeTab} className={`mr-2 ${styles.btnTabBlog}`} role="presentation">
                                    <button className={`inline-block px-4 rounded-t-lg ${category.category} ${activeTab === category.category ? styles.activeTabBlog : null} `} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{category.category} <span className="font-normal text-sm">{category.count}</span></button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/*  */}
                <div id="myTabContent" className="col-span-10">
                    {/* tabs all */}
                    <div className={`${styles.tabContentBlog} ${activeTab === 'all' ? 'block' : 'hidden'} `} id="allContentBlog">
                        {data.map((category, index) => {
                            return (
                                <div key={index}>
                                    {category.posts.map((post, index) => {
                                        return (
                                            <div key={index} className="grid grid-cols-2 gap-12 items-center mt-5">
                                                <Image width={500} height={500} src={post.image} alt="" />
                                                <div className="contentPostBlog mt-5">
                                                    {/* date */}
                                                    <p className="text-color-green subTitleBrfore myTextmd relative fontWeight6">{post.date}</p>
                                                    {/* title */}
                                                    <div className={`mt-5 ${styles.titleBlogPost}`} key={index}>{post.title}</div>
                                                    {/* description */}
                                                    <p className={`mt-5 ${styles.descriptionBlogPost}`}>{post.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    {/*  */}
                    {data.map((category, index) => {
                        return (
                            <div key={index} className={`${styles.tabContentBlog} ${activeTab === category.category ? 'block' : 'hidden'}  `} id={`${category.category}`} role="tabpanel" aria-labelledby="profile-tab">
                                <div className=" text-gray-500 ">
                                    {category.posts.map((post, index) => {
                                        return (
                                            <div key={index} className="grid grid-cols-2 gap-12 items-center mt-5">
                                                <Image width={500} height={500} src={post.image} alt="" />
                                                <div className="contentPostBlog mt-5">
                                                    {/* date */}
                                                    <p className="text-color-green subTitleBrfore myTextmd relative fontWeight6">{post.date}</p>
                                                    {/* title */}
                                                    <div className={`mt-5 ${styles.titleBlogPost}`} key={index}>{post.title}</div>
                                                    {/* description */}
                                                    <p className={`mt-5 ${styles.descriptionBlogPost}`}>{post.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div >
    )
}

export default Blog