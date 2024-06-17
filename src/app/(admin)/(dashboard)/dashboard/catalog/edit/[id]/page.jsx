"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function EditCatalog() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [catalog, setCatalog] = useState({
    name: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/catalog/detail/${id}`);
        const result = await response.json();
        setCatalog(result.data);
      } catch (error) {
        console.log("Error => ", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatalog({ ...catalog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/catalog/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: catalog.name,
          price: parseInt(catalog.price),
          description: catalog.description,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Edit data successfully",
          icon: "success",
        });
      }
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
          <h2 className="text-2xl font-medium text-dark-blue">Edit Catalog</h2>
        </div>
        <div className=""></div>
      </section>
      <section className="mt-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={catalog.name}
              onChange={handleChange}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="text"
              name="price"
              value={catalog.price}
              onChange={handleChange}
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
              value={catalog.description}
              onChange={handleChange}
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
