import HeaderTitle1 from "../components/HeaderTitle1/HeaderTitle1"
import { motion } from 'framer-motion'
const careers = () => {
    return (
        <>
            <HeaderTitle1 bgTitle="c,a,r,e,e,r,s" title="J,O,I,N U,S !" />
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 sx:grid-cols-1">
                    {/* title */}
                    <motion.div
                        initial={{
                            x: '-1000px',
                            opacity: 0,
                        }}
                        animate={{ x: 0, opacity: 1, }}
                        transition={{
                            duration: 0.9,
                            delay: 0.9,
                            ease: "anticipate"
                        }}
                        className="md:col-span-3 md:order-1 sx:order-2  sm:col-span-12 text-left">
                        <p className="subTitle  subTitleBrfore">
                            FULL TIME
                        </p>
                        <p className="infoTitle  ">
                            CHARGÉ.E DE PROJETS ÉVÉNEMENTS
                        </p>
                    </motion.div>
                    {/* End title */}
                    {/* description */}
                    <motion.div initial={{
                        x: '1000px',
                        opacity: 0,
                    }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.9,
                            ease: "anticipate"
                        }}
                        className="md:col-span-9 md:order-1 sx:order-2  sm:col-span-12 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore provident minima velit accusamus quo, nisi veniam quam eveniet perspiciatis repellendus exercitationem sint unde modi fuga odit ut voluptatum soluta ad, laboriosam delectus earum? Harum, a culpa repellendus omnis praesentium at similique dolorem maxime laboriosam corporis in quo quos quibusdam minima consectetur. Perferendis enim voluptates mollitia accusantium iusto atque, beatae doloribus, quod tempore illum commodi, animi nam optio nihil dolores at! Dolorum non suscipit ducimus accusamus iure optio exercitationem excepturi vel, nulla natus unde nihil voluptatem maxime veniam, labore officia fuga ex adipisci! Magni fuga sint quae. Assumenda mollitia officia voluptates. Mollitia molestias ab accusamus vero fuga ea, eligendi assumenda corporis similique quas consequatur iste facilis voluptatum expedita repellat? Minima, incidunt consequatur repellendus dicta sapiente ipsum illo provident minus explicabo hic nemo fugiat, quaerat dolor harum est soluta quidem vel! Dolore atque obcaecati repudiandae, sapiente consequuntur fuga temporibus officiis nisi iure quibusdam molestiae sunt sit ducimus deserunt modi libero amet corporis, minus commodi hic. Aut illum perferendis, repellendus eum repellat obcaecati tempora adipisci tempore vero necessitatibus vitae tenetur, fugit soluta. Doloribus voluptas, iusto iste delectus laudantium aperiam adipisci, incidunt dolorum fuga odio nobis sed nesciunt eum, rerum expedita tempora? Assumenda asperiores est soluta debitis tempore. Expedita rem suscipit deserunt molestias aliquam dignissimos dolorem saepe a quod, totam commodi, blanditiis aspernatur exercitationem odio alias eius similique aut soluta eligendi. Voluptatem ipsum quibusdam quod ut perferendis. Expedita, quia? Commodi sequi corrupti dolore pariatur. Voluptatum placeat est, exercitationem explicabo magnam porro delectus nisi aliquam assumenda id ipsa veniam sed sapiente officiis deserunt deleniti possimus repellat, eius illum provident in laborum ea. Obcaecati, voluptatibus vel non minus, atque temporibus at vero consequatur labore debitis tenetur consequuntur incidunt, eius quidem animi neque molestias quos hic. Rerum facere vitae ipsa, necessitatibus in non magnam dicta tenetur voluptas ratione similique quam dignissimos, aspernatur eos at suscipit quod, iste ad nobis illo aperiam cupiditate est officiis et. Delectus nemo perferendis ex facere quod ea pariatur, aspernatur laudantium autem sit inventore doloribus ratione omnis quam molestias repellendus neque quis vel ipsa consequatur ad eius possimus! Maxime repellat laboriosam iusto provident dolores numquam quas rem! Tenetur atque laborum earum, facilis inventore deleniti totam quo modi sed non ab hic ea cum. Non, iure illum! Doloribus laudantium facere animi officiis nesciunt cupiditate id adipisci perspiciatis recusandae soluta enim fugit, accusantium sequi accusamus a quam! Tenetur deserunt ipsa et quasi a. Nulla cum vel harum exercitationem impedit, similique animi qui ipsum eius eos, odio illum accusantium maxime asperiores quidem quod dicta praesentium nobis fugiat alias aspernatur officiis voluptatum. Inventore, dolore. Tempore ex deleniti doloremque totam officiis blanditiis! Nobis quidem ex, dignissimos eum consequuntur architecto id necessitatibus dolor, expedita velit magnam earum eveniet quia illo quisquam! Omnis necessitatibus vitae cumque sapiente libero provident nam aperiam dolorem eos sunt accusamus ea blanditiis aliquam ullam nihil ratione nemo, distinctio atque dolores dolorum reiciendis qui veritatis? Ipsum repellendus, commodi aspernatur asperiores veniam nobis. Ipsa exercitationem pariatur at enim ab nisi, minima, voluptate harum perspiciatis laborum incidunt numquam.
                    </motion.div>
                    {/* End description */}
                </div>
            </div>
        </>
    )
}


export default careers