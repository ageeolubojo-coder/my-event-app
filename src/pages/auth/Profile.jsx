
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });

  // Fill the form with the logged-in user's details
  useEffect(() => {
    setProfile({
      id: user?.id || "",
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "",
    });
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((previousProfile) => ({
      ...previousProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // This currently updates only the local form state.
    // A backend update request is needed to save changes permanently.
    console.log("Updated profile:", profile);
  };

  return (
    <section className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Profile
      </h1>

      <p className="text-sm text-gray-400 mb-6">
        Update your profile information.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Full name
          </label>
          <Input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Email address
          </label>
          <Input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Role
          </label>
          <Input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
            disabled
          />
        </div>

        <Button
          type="submit"
          className="w-full justify-center"
        >
          Save Changes
        </Button>
      </form>
    </section>
  );
};

export default Profile;
