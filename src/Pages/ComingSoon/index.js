import "./comingsoon.css"
import useBgEffect from "./useBgEffect"
const ComingSoon=({pageAddress})=>{
    useBgEffect()
    return(
        <>
        <canvas className="canvas-element"></canvas>
        <div className="coming-soon-msg">
            <span>{pageAddress}</span>
        <h1>COMING SOON</h1>
        </div>
        </>
    )
}   

export default ComingSoon