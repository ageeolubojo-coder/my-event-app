
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { register } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await register(formData);

      if (response.error) {
        throw new Error(response.error);
      }

      // Save authentication details if registration returns them.
      if (response.token && response.user) {
        setAuth({
          user: response.user,
          token: response.token,
        });

        toast.success("Registration successful!");
        navigate("/profile");
      } else {
        // Some APIs require users to log in after registering.
        toast.success("Registration successful! Please log in.");
        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Create an Account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />

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
          placeholder="Create a password"
          autoComplete="new-password"
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChangeHandler}
          placeholder="Confirm your password"
          autoComplete="new-password"
          required
        />

        <Button
          type="submit"
          className="w-full justify-center"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
