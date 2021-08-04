import {Button, Card, Form, FormControl} from "react-bootstrap";
import React, {useContext} from "react";
import GameContext from "./GameContext";

const ChooseGame = () => {
    const {game, setGame, playstyle, setPlaystyle} = useContext(GameContext)
    return (
        <Card style={{minWidth: "50vw", minHeight: "20vh"}}>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Choose a game</Form.Label>
                        <FormControl
                            as={"select"}
                            onChange={({target: {value}}) => setGame(value)}
                        >
                            <option value={undefined} style={{display: "none"}}/>
                            <option value={"RE1"}>Resident Evil</option>
                            <option value={"SH1"}>Silent Hill</option>
                            <option value={"HG"}>Haunting Ground</option>
                        </FormControl>
                    </Form.Group>
                    {
                        game &&
                        <Form.Group>
                          <Form.Label>Choose a playstyle</Form.Label>
                          <FormControl
                              as={"select"}
                              onChange={({target: {value}}) => setPlaystyle(value)}
                          >
                            <option value={undefined} style={{display: "none"}}/>
                            <option value={"ANY"}>Any%</option>
                            <option value={"100"}>100%</option>
                            <option disabled value={"RND"}>Random</option>
                          </FormControl>
                        </Form.Group>
                    }
                </Form>
            </Card.Body>
            <Card.Footer>
                <Button disabled={!playstyle}>
                    Let's a go!
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default ChooseGame
