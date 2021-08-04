import React, {useContext, useMemo, useState} from "react";
import "@djthoms/pretty-checkbox"
import GameContext, {Step} from "./GameContext";
import {Checkbox as PrettyCheckbox, useCheckboxState} from "pretty-checkbox-react";
import {Card} from "react-bootstrap";

const StepListItem = ({step, size: fontSize = 20}: { step: Step, size?: number }) => {
    const {complete} = useContext(GameContext)
    const [checked, setChecked] = useState(useMemo(() => !!step.completed, [step.completed]))
    const checkbox = useCheckboxState({
        state: useMemo(() => checked, [checked]),
        onChange: ({target: {checked}}) => {
            checked && setTimeout(() => complete(step), 200)
        }
    })

    return (
        <div>
            <div style={{display: "inline-flex"}}>
                {/* @ts-ignore */}
                <PrettyCheckbox
                    {...checkbox}
                    color={"danger"}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" className="bi bi-check"
                             viewBox="0 0 16 16">
                            <path
                                d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                    }
                    style={{fontSize, marginTop: fontSize / 2 - 10, marginRight: "0.5em"}}
                >
                </PrettyCheckbox>
                <span
                    style={{fontSize, display: "inline-block", cursor: "pointer"}}
                    onClick={() => {
                        checkbox.setState(true)
                        setChecked(true)
                        setTimeout(() => complete(step), 200)
                    }}
                >
                {step.text}
            </span>
            </div>
        </div>
    )
}

const StepList = () => {
    const {game, playstyle, steps} = useContext(GameContext)
    return (
        <div
            style={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card style={{maxWidth: "70vw"}}>
                <Card.Header>
                    <Card.Title>{game}</Card.Title>
                    <Card.Subtitle>{playstyle}%</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <style>
                        {
                            `.pretty .state label::after, .pretty .state label::before, .pretty .state .svg { top: 0 !important; }`
                        }
                    </style>
                    {
                        steps
                        .filter(it => it.completed)
                        .sort((a, b) => a.completed!! < b.completed!! ? -1 : 1)
                        .map(step => <StepListItem key={step.num} step={step}/>)
                    }
                    {
                        steps.filter(it => !it.completed)
                        .slice(0, 1)
                        .map(step => <StepListItem key={step.num} step={step} size={40}/>)
                    }
                    {
                        steps.filter(it => !it.completed)
                        .slice(1, steps.length)
                        .map(step => <StepListItem key={step.num} step={step}/>)
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default StepList
