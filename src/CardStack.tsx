import React, {useContext} from "react";
import StackContext from "./StackContext";

const CardStack = () => {
    const {stack, add} = useContext(StackContext)
    return (
        <div
            style={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {
                stack.map((child, i) => {
                    const vh = i * 10
                    const vw = i * 10
                    const opacity = 1 - (0.4 * Math.min(i, 1)) - (0.1 * i)
                    const zIndex = -1000 * Math.min(i, 1) - i
                    return (
                        i < 3 &&
                        <div key={i} style={{
                            transform: `translate(-${vw}vw, -${vh}vh)`,
                            opacity,
                            zIndex,
                            position: i > 0 ? "absolute" : "relative"
                        }}>
                            {React.cloneElement(child as React.ReactElement, {next: () => add(<></>)})}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CardStack
