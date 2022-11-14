import dynamic from "next/dynamic"
const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })
import { motion } from "framer-motion";
const ContactUs = () => {
    return (
        <div className="text-center mt-16">
            <Map />
            <div className="container mx-auto">
                <div className="relative flex justify-center text-center">
                    {/* <div style={{ fontSize: '35px', fontWeight: 600, letterSpacing: '0.1em' }} className="descriptionContactUs  text-center absolute -top-20   bg-white shadow-md px-3 py-6" >
                        DROP BY AND MAKE SURE TO TAKE THE TIME TO DISCOVER THE NEIGHBOURHOOD!
                    </div> */}
                    <div style={{ fontSize: '35px', fontWeight: 600, letterSpacing: '0.1em' }} className="descriptionContactUs overflow-hidden  text-center absolute -top-20   bg-white shadow-md px-3 py-6">
                        <motion.div
                            initial={{ x: "10000px" }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.9,
                                ease: "anticipate"
                            }}

                        >
                            DROP BY AND MAKE SURE TO TAKE THE TIME TO DISCOVER THE NEIGHBOURHOOD!

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs