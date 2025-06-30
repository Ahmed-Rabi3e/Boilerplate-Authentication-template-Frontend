import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import axiosInstance from "../../utils/axiosInstance";
import LogoutButton from "./Logout";

const Profile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/profile");
      return response.data;
    },
  });

  if (isLoading) return <Loader />;
  if (error)
    return <p className="text-center text-red-500">Error fetching profile</p>;

  return (
    <>
      <div className="flex justify-center items-center min-h-[92.3vh] p-4">
        <div className="w-full max-w-5xl bg-white shadow-lg text-white rounded-3xl p-8 relative overflow-hidden">
          {/* Left accent line */}
          <div className="absolute left-0 top-16 bottom-16 w-1 bg-black rounded-r-full"></div>

          {/* Header */}
          <div className="flex justify-between items-center mb-10 text-black">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-black rounded-full"></div>
              <h1 className="text-2xl font-medium">Profile Details</h1>
            </div>
            <div className="flex gap-3">
              <Link
                to="/"
                className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full font-medium"
              >
                <GiTomato className="text-2xl" />
                <span>Home</span>
              </Link>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-black/75">
                <FaUser
                  size={50}
                  className="w-full h-full object-cover text-black rounded-full"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col md:flex-row gap-8 w-full text-neutral-800">
              <div className="flex-1">
                <h2 className="text-3xl font-medium mb-6">{data.username}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  <div>
                    <p className="text-gray-400 mb-1">ID:</p>
                    <p className="text-xl">{data._id}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-1">Email Adress</p>
                    <p className="text-xl">{data.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
