import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

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
  console.log(formData)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <div className="space-y-4">
          <Input placeholder="Full Name"
           name="name"
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

          <Button>
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;