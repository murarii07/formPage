import Error from "../atoms/errorelment";
function Field(props) {
    // Destructuring the props
    const { elementobj,error,id} = props;
    return (
        <div className="field">
            
        {elementobj}
        
        {error && (<Error id={`${id}`} />)}
        
        </div>
    );
}
 // Spread any remaining props onto the input element
                // This includes additional attributes or event handlers passed to the Input component
                // {...rest}
export default Field;