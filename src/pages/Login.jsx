import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { loginUser } from "../services/authService";
import useAuthStore from "../stores/useAuthStore";

const Login = () => {
  const navigate = useNavigate();

  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==============================
  // LOGIN FUNCTION
  // ==============================

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log({
      email,
      password,
    });

    setError("");
    setLoading(true);

    try {
      const response = await loginUser({
        email,
        password,
      });

      const { token, user } = response.data;

      setAuth(token, user);

      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* ==============================
            LOGIN HEADING
        ============================== */}

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to your account
          </p>
        </div>

        {/* ==============================
            ERROR MESSAGE
        ============================== */}

        {error && (
          <div className="mb-5 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* ==============================
            LOGIN FORM
        ============================== */}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* PASSWORD */}

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {/* FORGOT PASSWORD */}

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}

          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

        {/* ==============================
            REGISTER LINK
        ============================== */}

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;