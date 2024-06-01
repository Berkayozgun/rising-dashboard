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
      data.data.forEach((item) => {
        item.date = formatDate(item.date);
      });
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

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatGB = (data) => {
    return (data / 1024).toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  };

  return (
    <div className='flex flex-row w-full h-full  text-black bg-slate-50'>
      <Sidebar />

      <div className='flex flex-col  items-center gap-4 w-full border'>
        <AdAlert />

        <h1 className='text-2xl font-bold mt-4 w-7/12 text-start'>
          Proxies & Scraping Infrastructure
        </h1>

        <div className='text-sm font-medium w-7/12 text-center  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
          <ul className='flex'>
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
        <div className='flex flex-row w-7/12'>
          {infoData ? (
            <div className='flex flex-row justify-between gap-14'>
              <div className='flex flex-col font-sans justify-around font-semibold leading-5 bg-blue-200 rounded-lg h-24 text-sm w-full p-4'>
                Subscription expires on
                <div className='text-xl font-sans leading-9 font-medium'>
                  {infoData.expireTime}
                </div>
              </div>

              <div className='flex flex-col font-sans justify-around bg-blue-200 rounded-lg h-24 text-sm w-full p-4'>
                <span className='flex font-sans font-semibold leading-5'>
                  Last charge
                </span>
                <div className='flex flex-row w-full'>
                  <span className='flex leading-9 text-xl'>
                    {infoData.lastChargeAmount}&nbsp;
                  </span>
                  <span className='flex text-nowrap leading-9 text-sm'>
                    {infoData.lastCharge}
                  </span>
                </div>
              </div>

              <div className='flex flex-col font-sans justify-around font-semibold leading-5 bg-blue-200 rounded-lg w-full  h-24 text-sm p-4'>
                <span className='text-sm leading-5 font-bold'>
                  Total Usage Data
                </span>
                <div className='text-2xl font-bold leading-9'>
                  {formatGB(infoData.totalDataUsage)} GB
                </div>
              </div>

              <div className='flex flex-col font-sans justify-around font-semibold leading-5 bg-blue-200 rounded-lg  w-full h-24 text-sm p-4'>
                <span className='text-sm leading-5 font-bold'>
                  Daily Usage Data
                </span>
                <div className='text-2xl font-bold leading-9'>
                  {formatGB(infoData.dailyUsage)} GB
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/* <Chart />*/}

        <div className='w-7/12 flex flex-col bg-white p-8'>
          <span className='text-xl font-semibold ml-4'>Transactions History</span>

          <table className='w-full text-xs text-center'>
            <thead className='text-xs text-gray-700 bg-white'>
              <tr>
                <th scope='col' className='p-4'>
                  Type
                </th>
                <th scope='col' className='p-4'>
                  Location
                </th>
                <th scope='row' className='p-4'>
                  Rental Period
                </th>
                <th scope='col' className='p-4'>
                  Number of IP
                </th>
                <th scope='col' className='p-4'>
                  Specific Purpose
                </th>
                <th scope='col' className='p-4'>
                  Date
                </th>
                <th scope='col' className='p-4'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.data.map((item, index) => (
                  <tr key={index} className='bg-white border-b'>
                    <td className=''>{item.type}</td>
                    <td className=''>{item.location}</td>
                    <td className=''>{item.rental}</td>
                    <td className=''>{item.ipcount}</td>
                    <td className=''>{item.purpose}</td>
                    <td className=''>{item.date}</td>
                    <select className='w-28 h-12 rounded-xl m-2 border-none drop-shadow-xl text-sm'>
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
