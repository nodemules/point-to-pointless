import {Button, Card} from "react-bootstrap";
import ChooseGame from "./ChooseGame";
import React from "react";
import StackContext from "./StackContext";

const Intro = () =>
    <StackContext.Consumer>
        {({add}) =>
            <Card style={{minWidth: "50vw", minHeight: "20vh"}}>
                <Card.Body>
                    <div id={"header"}
                         style={{justifyContent: "center", alignItems: "center",}}>
                        <h1 id={"header-title"}>Point to Pointless<span
                            style={{color: "red"}}>.</span></h1>
                        <div id={"header-subheader"} style={{color: "#505050"}}>
                            Getting from point to point; pointlessly
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => add(<ChooseGame/>)}>
                        Get Started
                    </Button>
                </Card.Footer>
            </Card>

        }

    </StackContext.Consumer>

export default Intro
