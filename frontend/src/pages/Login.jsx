import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login }from "../services/authService"
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate =useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
        setError("Please fill in all fields.");
        return;
    }

    try {
      const data =await login(formData);
      console.log(data)
      localStorage.setItem("token",data.token);
      navigate("/");
        
    } catch (error) {
  if (error.response) {
    setError(error.response.data.message);
  } else if (error.request) {
    setError("No response from server.");
  } else {
    setError("Something went wrong.");
  }
}
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        < form
         onSubmit={handleSubmit}
         className="space-y-4"
         >
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

          <Button type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;