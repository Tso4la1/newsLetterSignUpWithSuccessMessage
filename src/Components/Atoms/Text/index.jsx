import React from 'react'

export const Text = (props) => {
    if (props.type === "p") {
        return <p className={props.className}>{props.text}</p>
    }
}
