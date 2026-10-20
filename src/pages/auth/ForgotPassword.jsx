import { Link } from "react-router";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Forgot Password?
          </h1>

          <p className="mt-2 text-gray-500">
            Enter your email to request a password reset.
          </p>
        </div>

        <form className="space-y-5">

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Button type="submit">
            Send Reset Link
          </Button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Back to Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;