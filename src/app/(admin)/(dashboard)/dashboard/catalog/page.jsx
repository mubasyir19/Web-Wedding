"use client";

import { usePathname } from "next/navigation";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Catalog() {
  const pathname = usePathname();
  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-dark-blue text-2xl font-medium">List Catalog</h2>
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
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
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
                <td className="px-6 py-4">Wedding Planner</td>
                <td className="px-6 py-4">Rp. 2,000,000</td>
                <td className="px-6 py-4">
                  koordinasi dengan vendor dan mengatur anggaran pernikahan.
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
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  2
                </td>
                <td className="px-6 py-4">Catering</td>
                <td className="px-6 py-4">Rp. 2,500,000</td>
                <td className="px-6 py-4">
                  mencakup makanan dan minuman untuk acara pernikahan
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
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  3
                </td>
                <td className="px-6 py-4">Dekorasi</td>
                <td className="px-6 py-4">Rp. 3,000,000</td>
                <td className="px-6 py-4">
                  menawarkan dekorasi mewah seperti bentuk stall dan pilihan
                  bunga
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
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  4
                </td>
                <td className="px-6 py-4">Dokumentasi</td>
                <td className="px-6 py-4">Rp. 3,000,000</td>
                <td className="px-6 py-4">
                  Fotografi dan videografi untuk mengabadikan momen pernikahan.
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
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  5
                </td>
                <td className="px-6 py-4">Entertainment</td>
                <td className="px-6 py-4">Rp. 4,000,000</td>
                <td className="px-6 py-4">
                  menyertakan hiburan seperti live music atau DJ untuk acara
                  resepsi{" "}
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
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  6
                </td>
                <td className="px-6 py-4">Venue</td>
                <td className="px-6 py-4">Rp. 6,000,000</td>
                <td className="px-6 py-4">
                  menawarkan paket dengan lokasi pernikahan (venue){" "}
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
