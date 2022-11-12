import dynamic from "next/dynamic"
const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })
// import {Map} from '../components/Map/Map'
const ContactUs = () => {
    return (
        <div className="text-center">
            <Map />
            <div className="container mx-auto">
                <div className="relative flex justify-center text-center">
                <div style={{ fontSize: '35px', fontWeight: 600, letterSpacing:'0.1em'  }} className="descriptionContactUs  text-center absolute -top-20   bg-white shadow-md px-3 py-6" >
                    DROP BY AND MAKE SURE TO TAKE THE TIME TO DISCOVER THE NEIGHBOURHOOD!
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs