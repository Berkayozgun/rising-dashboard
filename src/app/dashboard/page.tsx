"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import AdAlert from "../components/AdAlert";
import Chart from "../components/Chart";
import InfoData from "../components/InfoData";
import TransactionTable from "../components/TransactionTable";
import { fetchTableData, fetchInfoData } from "../api/api";

export default function Dashboard() {
  interface Transaction {
    type: string;
    location: string;
    rental: string;
    ipcount: number;
    purpose: string;
    date: string;
  }
  const router = useRouter();
  const [tableData, setTableData] = useState<{ data: Transaction[] } | null>(
    null
  );
  const [infoData, setInfoData] = useState(null);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      router.push("/");
    } else {
      setJwt(token);
      fetchData(token);
    }
  }, [router]);

  const fetchData = async (token: any) => {
    const tableData = await fetchTableData(token);
    const infoData = await fetchInfoData(token);
    setTableData(tableData);
    setInfoData(infoData);
  };

  function formatGB(data: any) {
    return (data / 1024).toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  }

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
          {infoData ? <InfoData infoData={infoData} /> : <p>Loading...</p>}
        </div>
        <Chart />
        <TransactionTable data={tableData?.data ?? []} />
      </div>
    </div>
  );
}
