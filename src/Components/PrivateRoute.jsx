import { Navigate, Route} from "react-router-dom";
import { UseAuth } from "../context/AuthContext";


function PrivateRoute({ element, ...rest }) {
    const { resultFlag } = UseAuth();
    if (!resultFlag) {
        return <Navigate to="/login" />;
    }
    return <Route {...rest} element={element} />;
}


export default PrivateRoute;