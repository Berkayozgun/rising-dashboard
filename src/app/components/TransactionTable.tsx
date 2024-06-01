import TransactionRow from "./TransactionRow";
import React from "react";

interface Transaction {
  type: string;
  location: string;
  rental: string;
  ipcount: number;
  purpose: string;
  date: string;
}

interface TransactionTableProps {
  data?: Transaction[];
}

function TransactionTable({ data }: TransactionTableProps) {
  return (
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
        {data?.map((item, index) => (
            <TransactionRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
