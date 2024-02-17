const Header = ({title}) => {
    const headerStyle = {
        backgroundColor: '#f5deb3',
        color: '#000'
    };

    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
        </header>
    )
};

Header.defaultProps = {
    title: "Default Title"
}

export default Header