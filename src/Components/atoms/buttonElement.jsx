
function Button(props) {
    // Destructuring the props
    const {buttonType,buttonName,name } = props;

    return (
        <button type={buttonType} className={buttonName}>{name}</button>
    );
}
 // Spread any remaining props onto the input element
                // This includes additional attributes or event handlers passed to the Input component
                // {...rest}
export default Button;