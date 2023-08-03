import colors from "./colors";

const PlayNumber = props => {
    const handleOnClick = (e) => {
        props.handleOnClick(props.number, props.status);
    }

    return <button className="number"
        style={{ backgroundColor: colors[props.status] }}
        onClick={handleOnClick}>
        {props.number}
    </button >
}

export default PlayNumber;