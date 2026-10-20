import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { resetPassword } from "../services/authService";
import { useState } from "react";

const Profile = () => {
  // ==============================
  // RESET PASSWORD STATE
  // ==============================

  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // ==============================
  // RESET PASSWORD FUNCTION
  // ==============================

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await resetPassword({
        token,
        newPassword,
        confirmNewPassword,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">

      {/* ==============================
          PROFILE PAGE HEADING
      ============================== */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your account information and password.
        </p>
      </div>


      {/* ==============================
          PROFILE INFORMATION
      ============================== */}

      <div className="rounded-2xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Profile Information
        </h2>

        <form className="space-y-5">

          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Button type="submit">
            Update Profile
          </Button>

        </form>

      </div>


      {/* ==============================
          RESET PASSWORD
      ============================== */}

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Reset Password
        </h2>

        {/* RESET PASSWORD FORM */}

        <form
          onSubmit={handleResetPassword}
          className="space-y-5"
        >

          {/* RESET TOKEN */}

          <Input
            label="Reset Token"
            type="text"
            placeholder="Enter your reset token"
            value={token}
            onChange={(event) => setToken(event.target.value)}
          />

          {/* NEW PASSWORD */}

          <Input
            label="New Password"
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />

          {/* CONFIRM NEW PASSWORD */}

          <Input
            label="Confirm New Password"
            type="password"
            placeholder="Confirm your new password"
            value={confirmNewPassword}
            onChange={(event) =>
              setConfirmNewPassword(event.target.value)
            }
          />

          {/* SUBMIT BUTTON */}

          <Button type="submit">
            Reset Password
          </Button>

        </form>

      </div>

    </div>
  );
};

export default Profile;