import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useMemo} from "react";
import CardStack from "./CardStack";
import GameContext, {useGameContext} from './GameContext';
import StackContext, {useStack} from "./StackContext";
import Intro from './Intro';
import StepList from "./StepList";

const App = () => {
    const gameContext = useGameContext()
    const cardStackContext = useStack({first: <Intro/>})

    return (
        <GameContext.Provider value={useMemo(() => gameContext, [gameContext])}>
            <StackContext.Provider value={useMemo(() => cardStackContext, [cardStackContext])}>
                {
                    gameContext.steps.length ?
                        <StepList/>
                        :
                        <CardStack/>
                }
            </StackContext.Provider>
        </GameContext.Provider>
    )
}

export default App;
