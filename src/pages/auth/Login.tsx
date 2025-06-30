import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import axiosInstance from "../../utils/axiosInstance";

// 🔐 Schema Validation with Zod
const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(5, "Password must be at least 5 char"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await axiosInstance.post("/auth/login", data);
      localStorage.setItem("token", response.data.token);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      navigate("/profile");
      toast.success(`Logged in successfully as ${variables.email}`);
    },
  });

  const onSubmit = (data: LoginData) => mutate(data);

  const errorMessage =
    error instanceof AxiosError
      ? error.response?.data?.message || "Login failed"
      : "Something went wrong";

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white/60 border border-white/30 backdrop-blur-lg shadow-md rounded-3xl py-20 px-7 w-[30%] min-w-[320px] h-[95vh] md:h-[75vh] flex flex-col justify-center items-center">
          <div className="text-center mb-2 md:mb-8">
            <h4 className="text-3xl md:text-5xl font-bold">Hello Again!</h4>
            <span className="py-2 md:py-4 block text-xl text-gray-500 w-full md:w-2/3 mx-auto">
              Explore More by connecting with us.
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="flex justify-center py-4">
              <FaUser className="w-[90px] md:w-[155px] h-[90px] md:h-[155px] p-1 border-4 border-gray-100 rounded-full shadow-lg hover:border-gray-200" />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full px-5 py-4 text-lg rounded-xl shadow-sm focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 mt-0.5 text-sm text-right select-none">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full px-5 py-4 text-lg rounded-xl shadow-sm focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 mt-0.5 text-sm text-right select-none">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 text-xl bg-indigo-500 hover:bg-[#ff6a6a] text-gray-50 rounded-lg shadow-sm transition-colors"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-center mt-3 border p-2 border-dashed border-red-500">
                {errorMessage}
              </p>
            )}

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member?{" "}
                <Link to="/register" className="text-[#ff6a6a] hover:underline">
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
