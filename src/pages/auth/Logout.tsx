import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/auth";

const LogoutButton = () => {
  const navigate = useNavigate();

  const mutation = useMutation<void, Error>({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigate("/login");
    },
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
      className="px-4 py-2 bg-gradient-to-b from-red-500 to-red-800 text-white w-full"
    >
      {mutation.isPending ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
