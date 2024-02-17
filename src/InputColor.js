import { useRef } from 'react';

const InputColor = ({ colorValue, setColorValue, isDarkText, setIsDarkText }) => {
    const inputRef = useRef();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input 
        autoFocus
        ref={inputRef}
        id="search"
        type="text"
        role="colorinput"
        placeholder="add color name"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
         />
         <button
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        > toggle text color
        </button>
    </form>
  )
}

export default InputColor
