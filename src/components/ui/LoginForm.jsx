import Input from "./Input";
import Button from "./Button";

function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Login
      </h1>

      <Input
        type="email"
        placeholder="Enter your email"
      />

      <Input
        type="password"
        placeholder="Enter your password"
      />

      <Button>
        Login
      </Button>

    </div>
  );
}

export default LoginForm;