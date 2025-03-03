"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://recruitment-api.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("jwt", data.jwt);
        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error:any) {
      setError("Error during login: " + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-gray-300 text-black rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300 text-black rounded-lg"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold rounded-lg p-4"
      >
        Login
      </button>
      <div className="text-sm text-gray-500 mt-2">
        Demo Credentials: <br />
        Username: <strong>admin</strong> <br />
        Password: <strong>admin123</strong>
      </div>
    </form>
  );
};

export default LoginForm;
