
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { login } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await login(formData);

      if (response.error) {
        throw new Error(response.error);
      }

      // Save the logged-in user's information and token
      setAuth(response);

      toast.success("Login successful!");
      navigate("/profile");
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />

        <Button
          type="submit"
          className="w-full justify-center"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-600 hover:underline"
        >
          Register
        </Link>
      </p>

      <p className="mt-2 text-sm">
        <Link
          to="/forgot-password"
          className="text-indigo-600 hover:underline"
        >
          Forgot your password?
        </Link>
      </p>
    </div>
  );
};

export default Login;
