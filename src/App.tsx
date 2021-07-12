import React from "react";

const App = () =>
    <div
        id={"app"}
        style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
        }}
    >
        <div
            id={"header"}
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1 id={"header-title"}>Point to Pointless<span style={{color: "red"}}>.</span></h1>
            <div
                id={"header-subheader"}
                style={{
                    color: "#505050"
                }}
            >
                Getting from point to point; pointlessly
            </div>
        </div>
    </div>

export default App;
