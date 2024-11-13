import { Link } from "react-router-dom";
import errorImage from "../assets/images/attractive-young-girl-student-studying-at-the-college-library-1@2x.png"; // Replace with your chosen image

const ErrorPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen  bg-black text-white pt-16 pb-8 text-center">
      {/* 404 Illustration */}
      <div className="mb-8 pt-7">
        <img
          src={errorImage}
          alt="404 Error"
          className="w-64 h-64 mx-auto transition-transform transform hover:scale-105"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-purple-700 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg lg:text-xl text-gray-700 max-w-md mx-auto mb-8">
        Looks like you’re a bit lost. Don’t worry, we’ll help you find your way
        back to your learning journey!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col lg:flex-row gap-4">
        <Link
          to="/"
          className="bg-yellow hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
        >
          Back to Homepage
        </Link>
        <Link
          to="/courses"
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
        >
          Explore Courses
        </Link>
      </div>

      {/* Fun Fact Section */}
      <div className="mt-12 p-6 bg-pink-100 rounded-lg shadow-md text-purple-800 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Did You Know?</h2>
        <p className="text-md">
          The term computer bug was inspired by an actual bug — a moth found in
          a computer by Grace Hopper in 1947!
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
