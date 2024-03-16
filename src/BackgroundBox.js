import InputColor from "./InputColor"

const BackgroundBox = ({ colorValue, colorValueTwo, isDarkText }) => {
  return (
    <section 
        className="square"
        style={{ 
            backgroundColor: `#${colorValueTwo}`, 
            color: isDarkText ? '#000' : "#fff"
        }} 
        >
        <p>{`#${colorValueTwo}` ? `#${colorValueTwo}` : "empty value"}</p>
    </section>
  )
}

BackgroundBox.defaultProps = {
    colorValue: "empty color value"
}

export default BackgroundBox
