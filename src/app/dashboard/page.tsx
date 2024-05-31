"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar.tsx";

export default function Dashboard() {
  const router = useRouter();
  const [tableData, setTableData] = useState(null);
  const [infoData, setInfoData] = useState(null);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      router.push("/");
    } else {
      setJwt(token);
      fetchTableData(token);
      fetchInfoData(token);
    }
  }, []);

  const fetchTableData = async (token) => {
    const response = await fetch(
      "https://recruitment-api.vercel.app/get-table",
      {
        method: "GET",
        headers: {
          "Authorization": `${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (response.ok) {
      setTableData(data);
    } else {
      console.error(data.message);
    }
  };

  const fetchInfoData = async (token) => {
    const response = await fetch(
      "https://recruitment-api.vercel.app/get-info",
      {
        method: "GET",
        headers: {
          "Authorization": `${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (response.ok) {
      setInfoData(data);
    } else {
      console.error(data.message);
    }
  };

  return (
    <div className='flex flex-row h-full'>
       <Sidebar />
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl mb-4'>Dashboard</h1>
        <div className='mt-4'>
          <h2 className='text-xl'>Table Data</h2>
          <pre>{JSON.stringify(tableData, null, 2)}</pre>
        </div>
        <div className='mt-4'>
          <h2 className='text-xl'>Info Data</h2>
          <pre>{JSON.stringify(infoData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
