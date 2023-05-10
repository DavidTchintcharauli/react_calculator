import { useState } from "react";
import PropTypes from 'prop-types'
import './styles/ChangeStyle.css'
import { MODES } from "./utils/modes";

export default function ChangeStyle({ change }) {
    const firstMode = 2 //px
    const secondMode = 20 //px
    const thirdMode = 38 //px

    const [left, setLeft] = useState(firstMode)

    const spanStyle = {
        left: left,
    }

    function handleClick() {
        setLeft (
            left === firstMode
                ? secondMode
                : left === secondMode
                ? thirdMode
                : firstMode
        )
        change(
            left === firstMode
                ? MODES.blue
                : left === secondMode
                ? MODES.green
                : MODES.purple
        )
    }

    return (
        <div className="mode-container">
            <div className="button-mode" onClick={handleClick}>
                <span className="button-circle" style={spanStyle}></span>
            </div>
        </div>
    )
}

ChangeStyle.protoTypes = {
    change: PropTypes.func,
}