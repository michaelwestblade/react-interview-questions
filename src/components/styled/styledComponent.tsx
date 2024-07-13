import './styledComponent.css'
const StyledComponent = ({bold = false}) => {
    const appStyles = {
        'background': 'blue',
        marginTop: '20px'
    }
    return <div className="styled-component">
        <hr/>
        <h1>Styled Component</h1>
        <p className={`${bold ? 'conditional' : ''}`}>Hello</p>
        <p style={appStyles}>Goodbye</p>
    </div>
}

export default StyledComponent;