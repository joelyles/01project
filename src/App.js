import InputColor from './InputColor';
import BackgroundBox from './BackgroundBox';
import Header from "./Header";
import { useState } from "react";

function App() {
    const [colorValue, setColorValue] = useState('');

    return (
        <div className="App">
            <Header title='click to change color'/>
            <BackgroundBox 
                colorValue={colorValue}
            />
            <InputColor 
                colorValue={colorValue}
                setColorValue={setColorValue}
            />
        </div>
    );
}

export default App;