"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar.tsx";
import AdAlert from "../components/AdAlert.tsx";
import Chart from "../components/Chart.tsx";

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

        <div className='text-sm font-medium w-7/12 text-center  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
          <ul className='flex flex-wrap -mb-px'>
            <li className='mx-2'>
              <a
                href='#'
                className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                My Proxies
              </a>
            </li>
            <li className='me-2'>
              <a
                href='#'
                className='inline-block p-4 text-blue-600 border-b-4 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                aria-current='page'
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-row w-7/12 justify-between'>
          {infoData ? (
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col bg-blue-200 rounded-lg w-52 h-32 text-sm p-4'>
                Subscription expires on
                {infoData.expireTime}
              </div>
              <div className='flex flex-col bg-blue-200 rounded-lg w-52 h-32 text-sm p-4'>
                Last Charge
                {infoData.lastChargeAmount} {infoData.lastCharge}{" "}
              </div>
              <div className='flex flex-col bg-blue-200 rounded-lg w-52 h-32 text-sm p-4'>
                Total Usage Data
                {infoData.totalDataUsage}GB{" "}
              </div>
              <div className='flex flex-col bg-blue-200 rounded-lg w-52 h-32 text-sm p-4'>
                Daily Usage Data
                {infoData.dailyUsage}GB{" "}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Chart />

        <div className='w-7/12 flex flex-col'>
          Transactions History
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Type
                </th>
                <th scope='col' className='px-6 py-3'>
                  Location
                </th>
                <th scope='col' className='px-6 py-3'>
                  Rental Period
                </th>
                <th scope='col' className='px-6 py-3'>
                  Number of IP
                </th>
                <th scope='col' className='px-6 py-3'>
                  Specific Purpose
                </th>
                <th scope='col' className='px-6 py-3'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.data.map((item, index) => (
                  <tr
                    key={index}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                  >
                    <td className='px-6 py-4'>{item.type}</td>
                    <td className='px-6 py-4'>{item.location}</td>
                    <td className='px-6 py-4'>{item.rental}</td>
                    <td className='px-6 py-4'>{item.ipcount}</td>
                    <td className='px-6 py-4'>{item.purpose}</td>
                    <td className='px-6 py-4'>{item.date}</td>
                    <select className='px-6 py-4'>
                      <option value='1'>Actions</option>
                      <option value='2'>Processing</option>
                      <option value='3'>In Progress</option>
                      <option value='4'>Completed</option>
                    </select>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
