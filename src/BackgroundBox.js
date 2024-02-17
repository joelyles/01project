import InputColor from "./InputColor"

const BackgroundBox = ({ colorValue, isDarkText }) => {
  return (
    <section 
        className="square"
        style={{ 
            backgroundColor: colorValue, 
            color: isDarkText ? '#000' : "#fff"
        }} 
        >
        <p>{colorValue ? colorValue : "empty value"}</p>
    </section>
  )
}

BackgroundBox.defaultProps = {
    colorValue: "empty color value"
}

export default BackgroundBox
