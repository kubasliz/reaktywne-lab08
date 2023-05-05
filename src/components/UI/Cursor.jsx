import "./Cursor.css";

function Cursor(props) {
    const classes = "cursor " + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Cursor;
