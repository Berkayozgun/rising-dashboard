"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar.tsx";
import AdAlert from "../components/AdAlert.tsx";

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
          Authorization: `${token}`,
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
          Authorization: `${token}`,
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
    <div className='flex flex-row w-full h-full  text-black bg-slate-50'>
      <Sidebar />

      <div className='flex flex-col justify-start items-center gap-4 w-full border'>
        <AdAlert />

        <h1 className='text-2xl font-bold mt-4 w-7/12 text-start'>
          Proxies & Scraping Infrastructure
        </h1>

        <div class='text-sm font-medium w-7/12 text-center  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
          <ul class='flex flex-wrap -mb-px'>
            <li class='mx-2'>
              <a
                href='#'
                class='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                My Proxies
              </a>
            </li>
            <li class='me-2'>
              <a
                href='#'
                class='inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                aria-current='page'
              >
                Dashboard
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
