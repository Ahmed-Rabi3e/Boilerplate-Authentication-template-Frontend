import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import axiosInstance from "../../utils/axiosInstance";

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

type RegisterData = z.infer<typeof registerSchema>;

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await axiosInstance.post("/auth/register", data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      toast.success(`Account created for ${variables.username}`);
      navigate("/login");
    },
  });

  const onSubmit = (data: RegisterData) => mutate(data);

  const errorMessage =
    error instanceof AxiosError
      ? error.response?.data?.message || "Something went wrong"
      : "An unexpected error occurred";

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white/60 border border-white/30 backdrop-blur-lg shadow-md rounded-3xl py-20 px-7 w-[30%] min-w-[320px] h-[85vh] md:h-[75vh] flex flex-col justify-center items-center">
          <div className="text-center mb-2 md:mb-8">
            <h4 className="text-3xl md:text-5xl font-bold">Register Now!</h4>
          </div>

          <div className="flex justify-center py-4">
            <FaUser className="w-[100px] md:w-[155px] h-[100px] md:h-[155px] p-1 border-4 border-gray-100 rounded-full shadow-lg hover:border-gray-200" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            {/* Username */}
            <div>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="w-full px-5 py-4 text-lg rounded-xl shadow-sm focus:outline-none"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1 text-right select-none">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full px-5 py-4 text-lg rounded-xl shadow-sm focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-right select-none">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full px-5 py-4 text-lg rounded-xl shadow-sm focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 text-right select-none">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* API Error */}
            {error && (
              <p className="text-red-500 text-center border p-2 border-dashed border-red-500">
                {errorMessage}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 text-xl bg-indigo-500 hover:bg-[#ff6a6a] text-white rounded-lg shadow-sm transition-colors"
            >
              {isPending ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Already a Member?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Login Now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
