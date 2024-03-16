import InputColor from './InputColor';
import BackgroundBox from './BackgroundBox';
import Header from "./Header";
import { useState } from "react";

function App() {
    const [colorValue, setColorValue] = useState('');
    const [colorValueTwo, setColorValueTwo] = useState('');

    return (
        <div className="App">
            <Header title='click to change color'/>
            <BackgroundBox 
                colorValue={colorValue}
                colorValueTwo={colorValueTwo}
            />
            <InputColor 
                colorValue={colorValue}
                setColorValue={setColorValue}
                colorValueTwo={colorValueTwo}
                setColorValueTwo={setColorValueTwo}
            />
        </div>
    );
}

export default App;