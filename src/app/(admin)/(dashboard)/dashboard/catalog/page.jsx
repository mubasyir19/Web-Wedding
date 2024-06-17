"use client";

import { usePathname } from "next/navigation";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatHarga } from "@/service/formatPrice";
import Swal from "sweetalert2";

export default function Catalog() {
  const pathname = usePathname();

  const [dataCatalog, setDataCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch("/api/catalog");
        const result = await response.json();
        // console.log("Hasil => ", result);
        setDataCatalog(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this catalog!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(`/api/catalog/delete/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire("Deleted!", "Your catalog has been deleted.", "success");
          setDataCatalog(dataCatalog.filter((catalog) => catalog.id !== id)); //refresh table
        } else {
          Swal.fire("Error!", "Failed to delete catalog.", "error");
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire(
          "Error!",
          "An error occurred while deleting catalog.",
          "error",
        );
      }
    }
  };

  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-2xl font-medium text-dark-blue">List Catalog</h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
      <div className="mt-10">
        <div className="mb-8 text-white">
          <Link
            href="/dashboard/catalog/add"
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
              {dataCatalog.map((data, index) => (
                <tr
                  key={index}
                  className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{formatHarga(data.price)}</td>
                  <td className="px-6 py-4">{data.description}</td>
                  <td className="flex gap-x-4 px-6 py-4">
                    <a
                      href={`/dashboard/catalog/edit/${data.id}`}
                      className="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="cursor-pointer font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      hapus
                    </button>
                  </td>
                </tr>
              ))}
              {loading && (
                <tr>
                  <td colSpan="5" className="py-4 text-center">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
