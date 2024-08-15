function Select(props) {
    // Destructuring the props
    const { selectId, selectName, selectType, name, accept, options, ...rest } = props;

    return (
        <>
            <label htmlFor={selectId}>
                {name}<span className="required">*</span>
            </label>
            <select
                id={selectId}
                name={selectName}
                required
                {...rest} // Spread any additional props>
            >
                {options.map((field, index) => (
                    <option value={field} key={index}>{field}</option>
                ))}
            </select>
        </>
    );
}
// Spread any remaining props onto the select element
// This includes additional attributes or event handlers passed to the select component
// {...rest}
export default Select;