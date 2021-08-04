import React, {ReactNode, ReactNodeArray, useState} from "react";

type Stack = {
    stack: ReactNodeArray,
    add: (node: ReactNode) => void,
    set: (nodes: ReactNodeArray) => void
}


type UseStackProps = {
    first: ReactNode
}

export const useStack = ({first}: UseStackProps): Stack => {
    const [stack, setStack] = useState<ReactNodeArray>([first])
    const add = (node: ReactNode) => setStack(stack => [node, ...stack])
    return {
        stack,
        add,
        set: setStack
    } as Stack
}

const StackContext = React.createContext({} as Stack)

export default StackContext
