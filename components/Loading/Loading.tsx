
import { FunctionComponent } from "react"
const Loading: FunctionComponent<{}> = () => {
    return (
        <div style={{zIndex:100000}} className="absolute w-full h-full bg-green-300">
            loading ...
        </div>
    )
}

export default Loading