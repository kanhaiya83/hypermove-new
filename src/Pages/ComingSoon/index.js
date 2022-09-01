import "./comingsoon.css"
import useBgEffect from "./useBgEffect"
const ComingSoon=()=>{
    useBgEffect()
    return(
        <>
        <canvas className="canvas-element"></canvas>
        <div className="coming-soon-msg">
        <h1>COMING SOON</h1>
        </div>
        </>
    )
}   

export default ComingSoon