"use client";

import HeaderMenu from "@/components/HeaderMenu";
import { useParams } from "next/navigation";
import { useState } from "react";
import listCatalog from "../../../../service/dataCatalog.json";
import Image from "next/image";
import { formatHarga } from "@/service/formatPrice";
import Swal from "sweetalert2";

export default function DetailCatalog() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const params = useParams();
  console.log("Params => ", params);

  const catalogURI = params.name;

  const sanitizedCatalog = catalogURI.replace(/-/g, " ");

  const findCatalog = (name) => {
    return listCatalog.find((catalog) => catalog.name === name);
  };

  const catalog = findCatalog(sanitizedCatalog);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerName, customerEmail }),
      });

      const data = await response.json();
      console.log("Data => ", data);

      Swal.fire({
        title: "Sign in successfully",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed Sign in",
        icon: "error",
        text: data.message,
      });
      console.error("An error occured", error);
    }
  };

  return (
    <>
      <HeaderMenu title="test" />
      <section className="mx-auto mt-10 grid w-3/4 grid-cols-2 gap-x-2">
        <div className="">
          <Image
            src="/images/background.jpg"
            width={500}
            height={500}
            alt="photo"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <h1 className="text-4xl font-bold">{catalog.name}</h1>
            <p className="mt-4 text-2xl font-bold">
              {formatHarga(catalog.price)}
            </p>
            <p className="mt-4 text-justify text-base">{catalog.description}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-12 flex w-1/2 justify-center">
        <div className="">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Pesan Paket Ini</h1>
            <p>Isi form berikut, jika kamu pilih paket ini</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group mt-4 block">
              <label htmlFor="">Fullname</label>
              <br />
              <input
                type="text"
                name="customerName"
                placeholder="Type your name"
                className="w-full rounded-lg border-2 border-slate-300 px-4 py-2"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">Email</label> <br />
              <input
                type="email"
                name="customerName"
                placeholder="Type your email"
                className="w-full rounded-lg border-2 border-slate-300 px-4 py-2"
              />
            </div>
            <div className="form-group mt-4">
              <button className="w-full rounded-lg bg-blue-500 py-2 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
