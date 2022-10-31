import { ClickEventValue } from "google-map-react"
import dynamic from "next/dynamic"
import styles from '../styles/blog.module.css'
import gsap from "gsap"
import { useState, useMemo } from "react"
const data = [
    {
        category: 'project',
        count: 2,
        posts: [
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
        count: 3,
        posts: [
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
            },
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
            <div className="headBlog  text-center">
                <div className="bgTitleStatic">
                    blog
                </div>
                <div className="relative text-center">
                    <h1 className={`${styles.titleBlogPage} w-full  text-center`}>
                        FRESH NEWS
                    </h1>
                </div>
            </div>
            {/*  */}
            <div className="grid  md:grid-cols-12 sx:grid-cols-1">
                <div className=" col-span-4 ">

                    <ul className="  -mb-px text-sm  " id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li onClick={() => setActiveTab('all')} className="mr-2" role="presentation">
                            <button className={`inline-block p-4 rounded-t-lg ${activeTab === 'all' ? styles.activeTabBlog : null}  ${styles.btnTabBlog}`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">all</button>
                        </li>
                        {data.map((category,index) => {
                            return (
                                <li key={index} onClick={changeTab} className={`mr-2 ${styles.btnTabBlog}`} role="presentation">
                                    <button className={`inline-block p-4 rounded-t-lg ${category.category} ${activeTab === category.category ? styles.activeTabBlog : null} `} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{category.category} <span className="font-normal text-sm">{category.count}</span></button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/*  */}
                <div id="myTabContent" className="col-span-8">
                    {/* tabs all */}
                    <div className={`${styles.tabContentBlog} ${activeTab === 'all' ? 'block' : 'hidden'} `} id="allContentBlog">
                        {data.map((category,index) => {
                            return (
                                <div key={index}>
                                    {category.posts.map((post,index) => {
                                        return (
                                            <div key={index} className=" p-4 bg-gray-50 rounded-lg dark:bg-gray-800" role="tabpanel" aria-labelledby="profile-tab">
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{post.title}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    {/*  */}
                    {data.map((category,index) => {
                        return (
                                <div key={index} className={`${styles.tabContentBlog} ${activeTab === category.category ? 'block' : 'hidden'}  `} id={`${category.category}`} role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{category.posts.map((post,index) => {
                                        return(
                                            <div key={index}>{post.title}</div>
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