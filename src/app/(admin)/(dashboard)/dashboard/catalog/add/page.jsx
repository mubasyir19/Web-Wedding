"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddCatalog() {
  const pathname = usePathname();
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/catalog/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price: parseInt(price), description }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Add data successfully",
          icon: "success",
        });
      }
      setName("");
      setPrice("");
      setDescription("");
      router.push("/dashboard/catalog");
    } catch (error) {
      console.log("Error => ", error);
      Swal.fire({
        title: "Failed add data",
        icon: "error",
        text: error,
      });
    }
  };

  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-2xl font-medium text-dark-blue">Add Catalog</h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
      <section className="mt-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              rows="4"
              cols="50"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            ></textarea>
          </div>
          <div className="form-group mt-3">
            <button
              type="submit"
              className="w-1/2 rounded-lg bg-blue-500 py-2 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
