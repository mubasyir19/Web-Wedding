"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { exportTableToPDF } from "@/service/exportPDF";

export default function Order() {
  const [dataOrder, setDataOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/order");
      const result = await response.json();
      // console.log("Hasil => ", result);
      setDataOrder(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchData(); // Panggil fungsi fetchData secara berkala
    // }, 1000);
    // }, 60000);
    // return () => clearInterval(interval);

    fetchData();
  }, []);

  const updateOrderStatus = async (id, status) => {
    try {
      const response = await fetch(`/api/order/status/${id}?status=${status}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        Swal.fire({
          title: "Success update status",
          icon: "success",
        });

        fetchData();

        const updatedOrders = dataOrder.map((order) => {
          if (order.id === id) {
            return { ...order, status: status };
          } else {
            return order;
          }
        });
        setDataOrder(updatedOrders);
      } else {
        const errorMessage = await response.text();
        console.log("Error => ", response);
        Swal.fire({
          title: "Failed update status",
          icon: "error",
          text: "Error",
        });
      }
      console.log("Response => ", response.data);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const pathname = usePathname();
  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-2xl font-medium text-dark-blue">List Order</h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
      <div className="mt-10">
        <div className="mb-8 text-white">
          <button
            onClick={exportTableToPDF(dataOrder)}
            className="flex w-fit gap-x-1 rounded-lg bg-sky-400 p-2 text-sm transition-all hover:bg-sky-500"
          >
            <DocumentArrowDownIcon className="h-6 w-6" />
            <span className="my-auto">Export</span>
          </button>
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
              {dataOrder.map((data, index) => (
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
