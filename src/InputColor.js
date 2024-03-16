import { useRef } from "react";

const InputColor = ({ colorValue, setColorValue, colorValueTwo, setColorValueTwo }) => {
    const inputRef = useRef();

    return (
        <div>
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
        <section>
            <form>
                <input 
                    type="text"
                    ref={inputRef}
                    name="hex input"
                    id="hex input"
                    placeholder="type hex number here"
                    value={ colorValueTwo }
                    onChange={(e) => setColorValueTwo(e.target.value)}
                 />
            </form>
        </section>
        </div>
    )
}

export default InputColor