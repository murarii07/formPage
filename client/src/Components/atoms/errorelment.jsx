function Error(props){
    const{id}=props
    return(
        <div className="error"  id={`${id}-error`}>
            invalid {id}
        </div>
    );
}
export default Error;