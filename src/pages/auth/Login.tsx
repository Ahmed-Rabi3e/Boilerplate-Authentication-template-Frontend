import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { usernameValidate } from '../helper/validate';
// import { useAuthStore } from '../store/store';
import { FaUser } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  // const setUsername = useAuthStore(state => state.setUsername);

  const formik = useFormik({
    initialValues: { username: "" },
    // validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      // setUsername(values.username);
      console.log(values);
      navigate("/password");
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white/60 border border-white/30 backdrop-blur-lg shadow-md rounded-3xl py-20 px-7 w-[30%] min-w-[320px] h-[85vh] md:h-[75vh] flex flex-col justify-center items-center">
          <div className="text-center mb-2 md:mb-8">
            <h4 className="text-3xl md:text-5xl font-bold">Hello Again!</h4>
            <span className="py-2 md:py-4 block text-xl text-gray-500 w-full md:w-2/3 mx-auto">
              Explore More by connecting with us.
            </span>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col items-center"
          >
            <div className="flex justify-center py-4">
              <FaUser className="w-[155px] h-[155px] p-1 border-4 border-gray-100 rounded-full shadow-lg cursor-pointer hover:border-gray-200" />
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <input
                {...formik.getFieldProps("username")}
                type="text"
                placeholder="Username"
                className="w-full md:w-3/4 px-5 py-4 text-lg rounded-xl shadow-sm focus:outline-none"
              />
              <button
                type="submit"
                className="w-full md:w-3/4 py-4 text-xl bg-indigo-500 hover:bg-[#ff6a6a] text-gray-50 rounded-lg shadow-sm transition-colors"
              >
                Let's Go
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member?{" "}
                <Link to="/register" className="text-red-500 hover:underline">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
