"use client";

import { usePathname } from "next/navigation";

export default function Profile() {
  const pathname = usePathname();
  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-dark-blue text-2xl font-medium">
            Profile Company
          </h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
    </>
  );
}
