import { useState, useEffect } from "react";
import { CONTACT } from "../constants/index";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let timer;
    if (responseMessage) {
      timer = setTimeout(
        () => {
          setResponseMessage("");
        },
        isSuccess ? 4000 : 3000
      );
    }
    return () => clearTimeout(timer);
  }, [responseMessage, isSuccess]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(CONTACT.api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setResponseMessage("Form submitted successfully. Thank you!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setIsSuccess(false);
      setResponseMessage(`Unexpected error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.email}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-4 border rounded-md shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            dir="auto"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            rows="5"
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className="bg-white w-full rounded-full p-4 text-sm text-stone-800 mb-10 flex items-center justify-center gap-2 transition transform hover:bg-stone-800 hover:text-white hover:scale-105 duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin border-4 border-t-4 border-y-fuchsia-600 rounded-full w-5 h-5"></div>
          ) : (
            "Submit"
          )}
        </button>
        {responseMessage && (
          <div
            className={`max-w-md mx-auto p-4 mt-5 text-center text-lg rounded-md ${
              isSuccess ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
            onClick={() => setResponseMessage("")}
          >
            {responseMessage}
          </div>
        )}
      </form>
    </div>
  );
};
