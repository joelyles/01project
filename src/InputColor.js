import { useRef } from "react";

const InputColor = ({ colorValue, setColorValue }) => {
    const inputRef = useRef();

    return (
        <form>
            <input 
                type="text"
                ref={inputRef}
                name="color input"
                id="color input"
                placeholder="type color here"
                value={ colorValue }
                onChange={(e) => setColorValue(e.target.value) }
            />
        </form>
    )
}

export default InputColor