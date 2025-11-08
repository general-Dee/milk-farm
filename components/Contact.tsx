"use client";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    location: "",
    animalType: "Cow", // default option
    order: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { fullName, whatsapp, location, animalType, order } = formData;

      if (!fullName || !whatsapp || !location || !animalType || !order) {
        toast.error("Please fill out all fields!");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "livestockLeads"), {
        fullName: fullName.trim(),
        whatsapp: whatsapp.trim(),
        location: location.trim(),
        animalType,
        order: order.trim(),
        createdAt: serverTimestamp(),
      });

      toast.success("Submission successful! Opening WhatsApp…");

      setFormData({
        fullName: "",
        whatsapp: "",
        location: "",
        animalType: "Cow",
        order: "",
      });

      const message = encodeURIComponent(
        `Hello, my name is ${fullName}. I’m interested in ${animalType} (${order} units).`
      );
      const whatsappNumber = "2348012345678"; // replace with your sales number
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    } catch (error) {
      console.error("Firestore error:", error);
      toast.error("An error occurred while submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#8CC63F]">Get in Touch with Us</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4"
      >
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#8CC63F]"
        />

        <input
          name="whatsapp"
          type="tel"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#8CC63F]"
        />

        <input
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#8CC63F]"
        />

        {/* ✅ Animal Type Dropdown */}
        <select
          name="animalType"
          value={formData.animalType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#8CC63F]"
        >
          <option value="Cow">Cow</option>
          <option value="Goat">Goat</option>
          <option value="Ram">Ram</option>
        </select>

        <input
          name="order"
          type="text"
          placeholder="Order Quantity"
          value={formData.order}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#8CC63F]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#8CC63F] text-white font-semibold py-2 rounded-lg hover:bg-[#7AB034] transition-colors"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
