
import { FunctionComponent } from "react"
import Image from "next/image"
import { ImSpinner2 } from 'react-icons/im'
import styles from './Loading.module.css'
const Loading: FunctionComponent<{}> = () => {
    return (
        <div style={{ zIndex: 100000 }} className="fixed top-0 w-full h-full bg-white flex justify-center align-middle">
            <ImSpinner2 className={`${styles.spinner} text-blue-600`} size={100} />
        </div>
    )
}

export default Loading