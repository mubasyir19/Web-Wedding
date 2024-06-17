"use client";

import { ShoppingCartIcon, QueueListIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const pathname = usePathname();

  console.log("Pathname => ", pathname);
  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-2xl font-medium text-dark-blue">
            Home Dashboard
          </h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
      <div className="mt-8 grid gap-x-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="card flex h-32 w-full justify-between rounded-lg bg-gray-200 p-4 text-dark-blue drop-shadow-lg">
          <div className="">
            <h3 className="text-4xl font-semibold">7</h3>
            <p className="mt-3 text-lg">Catalogs</p>
          </div>
          <div className="">
            <ShoppingCartIcon className="h-20 w-20 text-dark-blue text-opacity-20" />
          </div>
        </div>
        <div className="card flex h-32 w-full justify-between rounded-lg bg-gray-200 p-4 text-dark-blue drop-shadow-lg">
          <div className="">
            <h3 className="text-4xl font-semibold">8</h3>
            <p className="mt-3 text-lg">Orders</p>
          </div>
          <div className="">
            <QueueListIcon className="h-20 w-20 text-dark-blue text-opacity-20" />
          </div>
        </div>
      </div>
    </>
  );
}
