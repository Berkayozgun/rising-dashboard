import React from 'react'

function TransactionRow({ item }) {
  return (
    <tr className='bg-white border-b'>
    <td className=''>{item.type}</td>
    <td className=''>{item.location}</td>
    <td className=''>{item.rental}</td>
    <td className=''>{item.ipcount}</td>
    <td className=''>{item.purpose}</td>
    <td className=''>{item.date}</td>
    <td>
      <select className='w-28 h-12 rounded-xl m-2 border-none drop-shadow-xl text-sm'>
        <option value='1'>Actions</option>
        <option value='2'>Processing</option>
        <option value='3'>In Progress</option>
        <option value='4'>Completed</option>
      </select>
    </td>
  </tr>
  )
}

export default TransactionRow