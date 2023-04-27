import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext} from "./components/Contexts/AuthContext"

export default function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? children : <Navigate to="/sign-in" />;
}
