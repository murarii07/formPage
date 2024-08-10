import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeValue } from './redux/flag';

function Authenticate() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const login = async (obj) => {
        try {
            const res = await fetch("http://localhost:5000/admin", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj),
            });
            const result = await res.json();
        
            return result.success;
        } catch (error) {
            console.log(error)
        }
    };

    const formd = async (e) => {
        e.preventDefault();
        const form = document.querySelector('form');
        const formdata = new FormData(form);
        const obj = { 'username': formdata.get('username'), 'psw': formdata.get('psw') };
        const flag = await login(obj); // Assuming login() returns a boolean value
        form.reset();
        dispatch(changeValue(flag))
        // Navigate if login is successful (optional)
        if (flag) {
            navigate('/details'); // Change to your intended route
        }
        else{
            navigate("/login")
        }
    };

    return (
        <>
            <form method="post" onSubmit={formd}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" required />
                <label htmlFor="psw">Password:</label>
                <input type="password" name="psw" required />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Authenticate;
