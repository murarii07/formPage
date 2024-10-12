function Input(props) {
    // Destructuring the props
    const { inputId, inputName, inputType, placeholder, name ,...rest } = props;

    return (
        <>

            <label htmlFor={inputId}>
                {name}<span className="required">*</span>
            </label>
            <input
                type={inputType}
                id={inputId}
                name={inputName}
                placeholder={placeholder}
                {...rest} // Spread any additional props
                required
               
            />
       </>
    );
}
 // Spread any remaining props onto the input element
                // This includes additional attributes or event handlers passed to the Input component
                // {...rest}
export default Input;