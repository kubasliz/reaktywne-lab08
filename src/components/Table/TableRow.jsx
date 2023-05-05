import React from "react";
import Cursor from "../UI/Cursor";

const TableRow = (props) => {
    return (
        <Cursor>
            <li
                onClick={() => props.checkAnswer(props.text, props.currentKey)}
                className={
                    "list-group-item " +
                    (props.markedAnswer.key === props.currentKey ? props.markedAnswer.variant : "")
                }
            >
                {props.text}
            </li>
        </Cursor>
    );
};

export default TableRow;
