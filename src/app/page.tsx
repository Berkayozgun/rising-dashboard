"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "./components/Sidebar.tsx";

export default function Home() {
  const router = useRouter();
  const [jwt, setJwt] = useState("");
  const [userData, setUserData] = useState(null);
  const [tableData, setTableData] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://recruitment-api.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "admin", password: "admin123" }),
      });

      if (response.ok) {
        const data = await response.json();
        setJwt(data.jwt);
        sessionStorage.setItem("jwt", data.jwt);
        router.push("/dashboard");
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
     
      <button
        onClick={() => {
          handleLogin();
        }}
        className='bg-blue-500 text-white font-bold rounded-lg p-4'
      >
        Go to Login Page
      </button>
    </main>
  );
}
