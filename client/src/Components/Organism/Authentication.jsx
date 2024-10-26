import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeValue } from '../redux/flag';
import Input from '../atoms/inputElement';
import Button from '../atoms/buttonElement';
function Authenticate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = async (obj) => {
        try {
            const res = await fetch(process.env.REACT_APP_API_URL_ADMIN, {
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
        else {
            alert("inccorect username or password")
            navigate("/login")
        }
    };

    return (
        <>
            <form method="post" onSubmit={formd}>
                <Input
                    inputId="username"
                    inputName="username"
                    inputType="text"
                    placeholder="Username"
                    name="Username"
                />

                <Input
                    inputId="psw"
                    inputName="psw"
                    inputType="password"
                    placeholder="Enter Password"
                    name="Password"
                />


<Button buttonType="submit" buttonName="submit-button" name="Login"/>
            </form>
        </>
    );
}

export default Authenticate;
