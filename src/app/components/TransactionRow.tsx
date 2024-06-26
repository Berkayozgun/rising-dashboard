import React, { ChangeEvent } from 'react';

interface Transaction {
  type: string;
  location: string;
  rental: string;
  ipcount: number;
  purpose: string;
  date: string;
}

function TransactionRow({ item }: { item: Transaction }) {
  const handleActionClick = () => {
    console.log(`Number of IP: ${item.ipcount}`);
  };
  

  return (
    <tr className='bg-white border-b'>
      <td className=''>{item.type}</td>
      <td className=''>{item.location}</td>
      <td className=''>{item.rental}</td>
      <td className=''>{item.ipcount}</td>
      <td className=''>{item.purpose}</td>
      <td className=''>{item.date}</td>
      <td>
        <select
          className='w-28 h-12 rounded-xl m-2 border-none drop-shadow-xl text-sm'
          onChange={handleActionClick}>
          <option value='1'>Actions</option>
          <option value='2'>Processing</option>
          <option value='3'>In Progress</option>
          <option value='4'>Completed</option>
        </select>
      </td>
    </tr>
  );
}

export default TransactionRow;
