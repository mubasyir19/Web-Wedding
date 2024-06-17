"use client";

import HeaderMenu from "@/components/HeaderMenu";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import listCatalog from "../../../../service/dataCatalog.json";
import Image from "next/image";
import { formatHarga } from "@/service/formatPrice";
import Swal from "sweetalert2";

export default function DetailCatalog() {
  const [dataCatalog, setDataCatalog] = useState({});
  const [loading, setLoading] = useState(true);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const params = useParams();
  const router = useRouter();

  const catalogURI = params.name;

  const sanitizedCatalog = catalogURI.replace(/-/g, " ");

  useEffect(() => {
    const fetchCatalog = async () => {
      if (sanitizedCatalog) {
        try {
          const response = await fetch(`/api/catalog/${sanitizedCatalog}`);
          const data = await response.json();
          // console.log("hasil => ", data);
          setDataCatalog(data.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching catalog data:", error);
          setLoading(false);
        }
      }
    };

    fetchCatalog(sanitizedCatalog);
    // console.log("Fetch ", fetchCatalog(sanitizedCatalog));
  }, [sanitizedCatalog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName,
          customerEmail,
          catalogId: dataCatalog.id,
        }),
      });

      const data = await response.json();
      console.log("Data => ", data);

      Swal.fire({
        title: "Success create Order",
        icon: "success",
      });
      setCustomerName("");
      setCustomerEmail("");
    } catch (error) {
      Swal.fire({
        title: "Failed create Order",
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
            <h1 className="text-4xl font-bold">{dataCatalog.name}</h1>
            <p className="mt-4 text-2xl font-bold">
              {formatHarga(dataCatalog.price)}
            </p>
            <p className="mt-4 text-justify text-base">
              {dataCatalog.description}
            </p>
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
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Type your name"
                className="w-full rounded-lg border-2 border-slate-300 px-4 py-2"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">Email</label> <br />
              <input
                type="email"
                name="customerName"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
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
