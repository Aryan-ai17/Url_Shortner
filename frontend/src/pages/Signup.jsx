
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { register } from "../services/authService";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await register(formData);
      console.log("Success:", data);
    } catch (error) {
      console.log("Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
      } else if (error.request) {
        console.log("No response received");
        console.log(error.request);
      } else {
        console.log("Error message:", error.message);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button type="submit">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

