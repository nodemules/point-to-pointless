import React, {useEffect, useState} from "react";

import GameData from "./GameData.json"

type GC = {
    game: string,
    setGame: (game: string) => void,
    playstyle: string,
    setPlaystyle: (game: string) => void,
    steps: Array<Step>,
    complete: (step: Step) => void
}

export type Step = {
    num: number,
    requires?: Array<number>,
    required?: boolean,
    text: string,
    completed?: boolean
}

export const useGameContext = (): GC => {
    const [game, setGame] = useState<string>()
    const [playstyle, setPlaystyle] = useState<string>()
    const [steps, setSteps] = useState<Array<Step>>([])

    useEffect(() => {
        if (game && playstyle)
            setSteps((GameData as Record<string, Step[]>)[game].filter(it => playstyle === "100" || it.required) || [])
    }, [game, playstyle])

    const complete = (step: Step) => {
        const found = steps.find(it => it.num === step.num)
        if (found) {
            found.completed = true
            setSteps([...steps])
        }
    }

    return {
        game,
        setGame,
        playstyle,
        setPlaystyle,
        steps,
        complete
    } as GC
}

const GameContext = React.createContext<GC>({} as GC)

export default GameContext
