import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  if (token !== null) return children;
  else return <Navigate to="/login" />;
};

// prop validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
