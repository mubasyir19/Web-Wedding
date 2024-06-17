"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Profile() {
  const pathname = usePathname();
  const router = useRouter();

  const [company, setCompany] = useState({
    email: "",
    address: "",
    phoneNumber: "",
    description: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch("/api/company");
      const result = await response.json();
      setCompany(result.data);
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/company/update/${company.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(company),
      });
      if (!response.ok) {
        Swal.fire("Error!", "Failed to update data.", "error");
      }
      Swal.fire("Updated!", "Your data has been updated.", "success");
    } catch (error) {
      console.error("Error updating data:", error);
      Swal.fire("Error!", "Failed to update data.", "error");
    }
  };

  return (
    <>
      <section className="flex justify-between">
        <div className="">
          <h2 className="text-2xl font-medium text-dark-blue">
            Profile Company
          </h2>
        </div>
        <div className="">
          <p className="normal-case">{pathname}</p>
        </div>
      </section>
      <section className="mt-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="name">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={company.email}
              onChange={handleChange}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="price">Phone Number</label>
            <br />
            <input
              type="text"
              name="phoneNumber"
              value={company.phoneNumber}
              onChange={handleChange}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="price">Address</label>
            <br />
            <input
              type="text"
              name="address"
              value={company.address}
              onChange={handleChange}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              rows="10"
              cols="50"
              name="description"
              value={company.description}
              onChange={handleChange}
              className="w-1/2 rounded-lg border-2 border-gray-300 px-4 py-2"
            ></textarea>
          </div>
          <div className="form-group mt-3">
            <button
              type="submit"
              className="w-1/2 rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
