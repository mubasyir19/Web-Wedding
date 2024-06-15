"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Order() {
  const pathname = usePathname();
  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-dark-blue text-2xl font-medium">List Order</h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
      <div className="mt-10">
        <div className="mb-8 text-white">
          <Link
            href="#skills/tambah"
            className="flex w-fit gap-x-1 rounded-lg bg-sky-400 p-2 text-sm transition-all hover:bg-sky-500"
          >
            <PlusIcon className="h-6 w-6" />
            <span className="my-auto">Tambah</span>
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  1
                </td>
                <td className="px-6 py-4">Mahdy Mubasyir</td>
                <td className="px-6 py-4">m.mubasyir19@gmail.com</td>
                <td className="px-6 py-4">Wedding Planner</td>
                <td className="px-6 py-4">
                  {/* <p className="font-medium text-yellow-500">Waiting</p> */}
                  <p className="font-medium text-green-500">Approve</p>
                  {/* <p className="font-medium text-red-500">Reject</p> */}
                </td>
                <td className="flex gap-x-4 px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    hapus
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
