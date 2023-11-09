import React from 'react'
import { Link } from 'react-router-dom'

export const Btn2 = (props) => {
    return (
        <Link to="/">
            <div>
                <button className={props.className}>Dismiss message</button>
            </div>
        </Link>
    )
}
