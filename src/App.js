import InputColor from './InputColor';
import BackgroundBox from './BackgroundBox';
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function App() {
    const [colorValue, setColorValue] = useState('');
    const [colorValueTwo, setColorValueTwo] = useState('');

    return (
        <div>
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
        <div className='App'>
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
        <Footer />
        </div>
    );
}

export default App;