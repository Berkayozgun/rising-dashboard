// create a sidebar component
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import companyLogo from "../risinglogo.png";

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className='bg-gray-50 text-white w-24 h-screen flex flex-col items-center justify-start border-r-2'>
      <button
        onClick={() => {
          router.push("#");
        }}
        className=' text-white font-bold rounded-lg p-4'
      >
        <Image src={companyLogo} alt='logo' width={50} height={50} />
      </button>
      <button
        onClick={() => {
          router.push("#");
        }}
        className='bg-blue-100 text-white font-bold rounded-2xl p-4 mt-4'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.3258 0.935016C12.2385 0.851568 12.1225 0.804993 12.0018 0.804993C11.881 0.804993 11.765 0.851568 11.6777 0.935016L0.890625 11.2399C0.844813 11.2837 0.808367 11.3364 0.783491 11.3947C0.758615 11.453 0.745826 11.5158 0.745898 11.5792L0.744141 21.2506C0.744141 21.7479 0.941685 22.2248 1.29332 22.5765C1.64495 22.9281 2.12186 23.1256 2.61914 23.1256H8.25C8.49864 23.1256 8.73709 23.0269 8.91291 22.851C9.08872 22.6752 9.1875 22.4368 9.1875 22.1881V14.2194C9.1875 14.0951 9.23688 13.9758 9.32479 13.8879C9.4127 13.8 9.53193 13.7506 9.65625 13.7506H14.3437C14.4681 13.7506 14.5873 13.8 14.6752 13.8879C14.7631 13.9758 14.8125 14.0951 14.8125 14.2194V22.1881C14.8125 22.4368 14.9113 22.6752 15.0871 22.851C15.2629 23.0269 15.5014 23.1256 15.75 23.1256H21.3785C21.8758 23.1256 22.3527 22.9281 22.7043 22.5765C23.056 22.2248 23.2535 21.7479 23.2535 21.2506V11.5792C23.2536 11.5158 23.2408 11.453 23.2159 11.3947C23.191 11.3364 23.1546 11.2837 23.1088 11.2399L12.3258 0.935016Z'
            fill='#0C6DFC'
          />
        </svg>
      </button>
      <button
        onClick={() => {
          router.push("#");
        }}
        className=' text-white font-bold rounded-2xl p-4 mt-4'
      >
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.87488 22.0304C1.87488 22.9006 2.22058 23.7352 2.83593 24.3506C3.45129 24.9659 4.28589 25.3116 5.15613 25.3116H24.8436C25.7139 25.3116 26.5485 24.9659 27.1638 24.3506C27.7792 23.7352 28.1249 22.9006 28.1249 22.0304V13.007H1.87488V22.0304ZM5.74206 17.5773C5.74206 17.1111 5.92726 16.664 6.25692 16.3343C6.58657 16.0047 7.03368 15.8195 7.49988 15.8195H10.3124C10.7786 15.8195 11.2257 16.0047 11.5553 16.3343C11.885 16.664 12.0702 17.1111 12.0702 17.5773V18.7491C12.0702 19.2153 11.885 19.6625 11.5553 19.9921C11.2257 20.3218 10.7786 20.507 10.3124 20.507H7.49988C7.03368 20.507 6.58657 20.3218 6.25692 19.9921C5.92726 19.6625 5.74206 19.2153 5.74206 18.7491V17.5773Z'
            fill='#7E868C'
          />
          <path
            d='M24.8436 4.68591H5.15613C4.28589 4.68591 3.45129 5.03162 2.83593 5.64697C2.22058 6.26232 1.87488 7.09692 1.87488 7.96716V9.4906H28.1249V7.96716C28.1249 7.09692 27.7792 6.26232 27.1638 5.64697C26.5485 5.03162 25.7139 4.68591 24.8436 4.68591Z'
            fill='#7E868C'
          />
        </svg>
      </button>

      <button
        onClick={() => {
          router.push("#");
        }}
        className='0 text-white font-bold rounded-2xl p-4 mt-4'
      >
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.4905 3.78353C18.3503 2.55247 16.7577 1.87454 14.9999 1.87454C13.2327 1.87454 11.6348 2.54837 10.4999 3.77181C9.35261 5.00872 8.79362 6.68978 8.92487 8.50501C9.18503 12.0863 11.9102 14.9995 14.9999 14.9995C18.0895 14.9995 20.81 12.0868 21.0743 8.50618C21.2073 6.70735 20.6448 5.02981 19.4905 3.78353Z'
            fill='#7E868C'
          />
          <path
            d='M25.3124 28.1232H4.68741C4.41744 28.1267 4.15009 28.07 3.90481 27.9572C3.65952 27.8444 3.44247 27.6783 3.26944 27.4711C2.88858 27.0158 2.73506 26.3941 2.84874 25.7654C3.34327 23.0221 4.88663 20.7176 7.31241 19.0998C9.46748 17.6637 12.1974 16.8732 14.9999 16.8732C17.8024 16.8732 20.5323 17.6642 22.6874 19.0998C25.1132 20.717 26.6565 23.0215 27.1511 25.7648C27.2647 26.3935 27.1112 27.0152 26.7304 27.4705C26.5574 27.6778 26.3404 27.844 26.0951 27.9569C25.8498 28.0699 25.5824 28.1267 25.3124 28.1232Z'
            fill='#7E868C'
          />
        </svg>
      </button>

      <button
        onClick={() => {
          router.push("#");
        }}
        className=' text-white font-bold rounded-2xl p-4 mt-4'
      >
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.3088 9.75V7.125C18.3088 6.42881 18.0299 5.76113 17.5335 5.26884C17.0371 4.77656 16.3638 4.5 15.6618 4.5H6.39706C5.69502 4.5 5.02173 4.77656 4.52531 5.26884C4.02889 5.76113 3.75 6.42881 3.75 7.125V22.875C3.75 23.5712 4.02889 24.2389 4.52531 24.7312C5.02173 25.2234 5.69502 25.5 6.39706 25.5H15.6618C16.3638 25.5 17.0371 25.2234 17.5335 24.7312C18.0299 24.2389 18.3088 23.5712 18.3088 22.875V20.25M10.3676 15H26.25M26.25 15L22.2794 11.0625M26.25 15L22.2794 18.9375'
            stroke='#7E868C'
            stroke-width='3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
    </aside>
  );
}
