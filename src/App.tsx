import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import * as reactBootstrap from "react-bootstrap";
import img1 from "./testimg.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>I am also a header</h1>
            <reactBootstrap.Container>
                <reactBootstrap.Row>
                    <reactBootstrap.Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Eric Jestel
                        </p>
                        <div id="rectangle"></div>
                    </reactBootstrap.Col>
                    <reactBootstrap.Col>
                        <div>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </div>
                        <img src={img1} alt="A test meme" />
                        <div id="rectangle"></div>
                    </reactBootstrap.Col>
                    <reactBootstrap.Col>
                        <ol>
                            <li>I&#39;m a list item</li>
                            <li>I&#39;m the 2nd list item</li>
                            <li>I&#39;m the last list item</li>
                        </ol>
                        <p>Hello World</p>
                        <div
                            id="rectangle"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </reactBootstrap.Col>
                </reactBootstrap.Row>
            </reactBootstrap.Container>
        </div>
    );
}

export default App;
