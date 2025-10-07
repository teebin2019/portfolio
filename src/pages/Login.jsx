import { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.message === "Invalid credentials") {
        setError("อีเมล หรือ รหัสผ่าน ไม่ถูกตัอง");
        setProcessing(false);
        return;
      }
      setProcessing(false);
      setError("");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 ">
      <form className="space-y-6" onSubmit={submit} action="#">
        <h5 className="text-xl font-medium text-gray-900 ">
          Sign in to our platform
        </h5>

        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
            role="alert"
          >
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@company.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          disabled={processing}
        >
          {processing ? "Loginning" : "Login to your account"}
        </button>
        <div className="text-sm font-medium text-gray-500 ">
          Not registered?{" "}
          <NavLink to="/register" className="text-blue-700 hover:underline ">
            Create account
          </NavLink>
        </div>
      </form>
    </div>
  );
}
