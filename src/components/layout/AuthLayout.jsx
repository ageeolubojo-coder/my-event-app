import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Outlet />
    </main>
  );
};

export default AuthLayout;