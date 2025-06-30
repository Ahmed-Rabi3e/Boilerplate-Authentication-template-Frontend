import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";
const Home = lazy(() => import("./pages/Home/Home"));
const Profile = lazy(() => import("./pages/auth/Profile"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const ForgetPassword = lazy(() => import("./pages/auth/ForgetPassword"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const protectedRoutes = [
  { path: "/", component: <Home /> },
  { path: "/profile", component: <Profile /> },
];

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            {protectedRoutes.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Route>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster position="top-center" />
    </Router>
  );
};

export default App;
