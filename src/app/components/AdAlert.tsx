import React from "react";

export default function AdAlert() {
  return (
    <div className='flex w-full items-center justify-center'>
       <div
          id='alert-border-1'
          className='flex items-center w-7/12 h-12 mt-4 bg-blue-100 rounded-lg justify-between'
          role='alert'
        >
          <div class='ms-3 text-sm font-medium flex'>
          Special Offer!  Get Complete Free Proxy 10 MB Proxy, without credit card. &nbsp;
          <a href="#" className="underline"> Start Free Trial </a>
          </div>
          <button
            type='button'
            className='text-gray-400 rounded-lg flex items-center h-8 w-8'
            data-dismiss-target='#alert-border-1'
            aria-label='Close'
          >
            <span class='sr-only'>Dismiss</span>
            <svg
              class='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
          </button>
        </div>
    </div>
  );
}
