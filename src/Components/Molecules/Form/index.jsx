import React, { useState } from 'react';
import { Text } from '../../Atoms';
import { Button } from '../Button';
import Validation from '../../../Validation';


export const Form = ({ errors, setErrors, isInputText, setInputText }) => {

    const [field, setField] = useState("");
    function handleChange(e) {
        const newObj = { ...isInputText, [e.target.name]: setField }
        setInputText(newObj);
        setField(() => e.target.value)

    }

    return (

        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setErrors(Validation(isInputText));
                setField("");
            }}>

                <label htmlFor="email">
                    <Text type="p" text="Email address" />
                    {errors.email ? <p style={{ color: "red", float: "right", position: "relative", bottom: "13px" }}>{errors.email}</p> : ""}
                </label>
                <input style={field === "light" ? { color: "hsl(231, 7%, 60%)" } : { color: "hsl(235, 18%, 26%)", paddingLeft: "16px", fontSize: "11px", fontWeight: "700" }} value={field} onClick={() => setField(field === "light" ? light : email)} type="email" name="email" className="email" placeholder='email@company.com' onChange={handleChange} />


                <Button isInputText={isInputText} setInputText={setInputText} errors={errors} setErrors={setErrors} setField={setField} className="firstbutton" />


            </form>
        </div>
    )
}
