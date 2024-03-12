import Header from "./Header";
import BackgroundBox from "./BackgroundBox";
import InputColor from "./InputColor";
import { useState } from "react";

function App() {
    const [colorValue, setColorValue] = useState('')
    const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Header title='change the color'/>
      <BackgroundBox 
        colorValue={colorValue}
        isDarkText={isDarkText}
      />
      <InputColor 
        colorValue={colorValue}
        setColorValue={setColorValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
