const Button = ({text, onClick}: {text: string; onClick: () => void}) => {
    return <button onClick={onClick}>{text}</button>
}

const ParentChildCommunication = () => {
    const onButtonClick = () => {
        console.log("onButtonClick in parent");
    }
    return <div>
        <Button onClick={onButtonClick} text="Howdy"></Button>
    </div>
}

export default ParentChildCommunication;