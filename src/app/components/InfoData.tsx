import React from "react";

function InfoData({ infoData }) {
  const formatGB = (data) => {
    return (data / 1024).toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  };
  return (
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
        <span className='text-sm leading-5 font-bold'>Total Usage Data</span>
        <div className='text-2xl font-bold leading-9'>
          {formatGB(infoData.totalDataUsage)} GB
        </div>
      </div>

      <div className='flex flex-col font-sans justify-around font-semibold leading-5 bg-blue-200 rounded-lg  w-full h-24 text-sm p-4'>
        <span className='text-sm leading-5 font-bold'>Daily Usage Data</span>
        <div className='text-2xl font-bold leading-9'>
          {formatGB(infoData.dailyUsage)} GB
        </div>
      </div>
    </div>
  );
}

export default InfoData;
