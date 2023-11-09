export default function Validation(isInputText) {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,20}$/;
    if (isInputText.email === "") {
        errors.email = "email is required";
    }
    else if (!emailPattern.test(isInputText.email)) {
        errors.email = "Email did'nt match"
    }



    return errors
}
