"use client"

import { useEffect, useState } from "react";
import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

export default function CheckOrder() {
  const [customerEmail, setCustomerEmail] = useState("");
  const [loading, setLoading] = useState(true);
  
  return (
    <>
    <HeaderMenu title="Check Order" />
    <section className='mt-8'>
        <h2 className='text-center text-2xl font-bold'>Silakan cek pesanan Anda:</h2>
        <form className='w-full flex flex-col justify-center'>
            <div className="form-group mt-3 mx-auto">
                <label htmlFor="email"></label>
                <input type="email" name='email' placeholder='Type your email' className='px-4 py-2 border border-slate-200 rounded-md w-full' />
            </div>
            <div className="form-group mt-3 mx-auto">
                <button type='submit' className='bg-blue-300 text-white px-4 py-2 rounded-md text-center w-full'>Submit</button>
            </div>
        </form>
    </section>
    <section className="mt-10">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-50 text-sm uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                    No
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Customer Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Customer Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Catalog Package
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Status
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr
                    className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                    >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        1
                    </td>
                    <td className="px-6 py-4">Mahdy Mubasyir</td>
                    <td className="px-6 py-4">m.mubasyir19@gmail.com</td>
                    <td className="px-6 py-4">Entertaintment</td>
                    <td className="px-6 py-4">
                        <p className="font-medium text-green-500">
                            Approve
                        </p>
                    </td>
                    {/* <td className="flex gap-x-4 px-6 py-4">
                        {data.status === "Approve" && <div className=""></div>}
                        {data.status === "Reject" && <div className=""></div>}
                        {data.status === "Waiting" && (
                        <>
                            <button
                            onClick={() => updateOrderStatus(data.id, "Approve")}
                            className="rounded-lg bg-blue-500 px-4 py-2 text-center text-xs text-white hover:bg-blue-600"
                            >
                            Terima
                            </button>
                            <button
                            onClick={() => updateOrderStatus(data.id, "Reject")}
                            className="rounded-lg bg-red-500 px-4 py-2 text-center text-xs text-white hover:bg-red-600"
                            >
                            Tolak
                            </button>
                        </>
                        )}
                    </td> */}
                    </tr>
                {/* {dataOrder.map((data, index) => (
                    <tr
                    key={index}
                    className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                    >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {index + 1}
                    </td>
                    <td className="px-6 py-4">{data.customerName}</td>
                    <td className="px-6 py-4">{data.customerEmail}</td>
                    <td className="px-6 py-4">{data.catalog.name}</td>
                    <td className="px-6 py-4">
                        {data.status === "Waiting" && (
                        <p className="font-medium text-yellow-500">
                            {data.status}
                        </p>
                        )}
                        {data.status === "Approve" && (
                        <p className="font-medium text-green-500">
                            {data.status}
                        </p>
                        )}
                        {data.status === "Reject" && (
                        <p className="font-medium text-red-500">{data.status}</p>
                        )}
                    </td>
                    <td className="flex gap-x-4 px-6 py-4">
                        {data.status === "Approve" && <div className=""></div>}
                        {data.status === "Reject" && <div className=""></div>}
                        {data.status === "Waiting" && (
                        <>
                            <button
                            onClick={() => updateOrderStatus(data.id, "Approve")}
                            className="rounded-lg bg-blue-500 px-4 py-2 text-center text-xs text-white hover:bg-blue-600"
                            >
                            Terima
                            </button>
                            <button
                            onClick={() => updateOrderStatus(data.id, "Reject")}
                            className="rounded-lg bg-red-500 px-4 py-2 text-center text-xs text-white hover:bg-red-600"
                            >
                            Tolak
                            </button>
                        </>
                        )}
                    </td>
                    </tr>
                ))} */}
                {/* {loading && (
                    <tr>
                    <td colSpan="5" className="py-4 text-center">
                        Loading...
                    </td>
                    </tr>
                )} */}
                </tbody>
        </table>
    </section>
    </>
  )
}
