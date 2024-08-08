import { UseAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
function Authenticate() {
    
    const {login}=UseAuth();
    const navigate = useNavigate();

    const formd = async (e) => {
        e.preventDefault();
        const form = document.querySelector('form');
        const formdata = new FormData(form);
        const flag=await login(formdata);
        form.reset();
        if(flag)
            navigate('/details')
        else{
            console.log("error")
        }
        
    }
    return (

        <>
            <form method="post" onSubmit={(e) => formd(e)}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" required />
                <label htmlFor="psw">password:</label>
                <input type="password" name="psw" required />
                <button type="submit">login</button>
            </form>
        </>
    )
}
export default Authenticate;