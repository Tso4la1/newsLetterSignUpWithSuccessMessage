import React from 'react';
import { Link } from 'react-router-dom';




export const Button = ({ className, setErrors, isInputText }) => {

    return (
        <Link to="/success">
            <div className={className}

                onSubmit={(e) => {

                    setErrors(Validation(isInputText))

                    e.preventDefault();
                }}>Subscribe to monthly newsletter</div>
        </Link>
    )

}
