import React from "react";
import TestComponent from "./TestCompornent";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <TestComponent text="hello from app"/>
            </header>
        </div>
    );
};

export default App;