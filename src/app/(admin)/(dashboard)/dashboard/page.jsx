"use client";

import {
  CircleStackIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const pathname = usePathname();

  console.log("Pathname => ", pathname);
  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-dark-blue text-2xl font-medium">
            Home Dashboard
          </h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
      <div className="mt-8 grid gap-x-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="card text-dark-blue flex h-32 w-full justify-between bg-gray-200 p-4 drop-shadow-lg">
          <div className="">
            <h3 className="text-4xl font-semibold">8</h3>
            <p className="mt-3 text-lg">Frameworks</p>
          </div>
          <div className="">
            <CodeBracketSquareIcon className="text-dark-blue h-20 w-20 text-opacity-20" />
          </div>
        </div>
        <div className="card text-dark-blue flex h-32 w-full justify-between bg-gray-200 p-4 drop-shadow-lg">
          <div className="">
            <h3 className="text-4xl font-semibold">2</h3>
            <p className="mt-3 text-lg">Databases</p>
          </div>
          <div className="">
            <CircleStackIcon className="text-dark-blue h-20 w-20 text-opacity-20" />
          </div>
        </div>
        <div className="card text-dark-blue flex h-32 w-full justify-between bg-gray-200 p-4 drop-shadow-lg">
          <div className="">
            <h3 className="text-4xl font-semibold">5</h3>
            <p className="mt-3 text-lg">Softwares</p>
          </div>
          <div className="">
            <ComputerDesktopIcon className="text-dark-blue h-20 w-20 text-opacity-20" />
          </div>
        </div>
        <div className="card text-dark-blue flex h-32 w-full justify-between bg-gray-200 p-4 drop-shadow-lg">
          <div className="">
            <h3 className="text-4xl font-semibold">23</h3>
            <p className="mt-3 text-lg">Projects</p>
          </div>
          <div className="">
            <PresentationChartLineIcon className="text-dark-blue h-20 w-20 text-opacity-20" />
          </div>
        </div>
      </div>
    </>
  );
}
