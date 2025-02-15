import signupImg from "../../assets/images/purpleImage.png";
import Template from "../Auth/Template";
import { useSelector } from "react-redux";

function Signup() {
  const { loading } = useSelector((state) => state.auth);
  return loading ? (
    <div className="flex justify-center items-center">
      <div className="custom-loader"></div>
    </div>
  ) : (
    <Template
      title="Welcome To Signup"
      description1="Build skills for today, tomorrow, and beyond."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
