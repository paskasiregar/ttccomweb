import React from "react";
import "@/app/common.css"; // Ensure you import common styles for consistent styling

function Contact() {
  return (
    <section className="bg-gray-100 p-8 md:p-16 w-full mx-auto rounded-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>
      <form
        action="https://submit-form.com/eXwwHheKj"
        method="POST"
        className="flex flex-col space-y-4"
      >
        <label htmlFor="name" className="text-gray-700 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <label htmlFor="email" className="text-gray-700 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <label htmlFor="message" className="text-gray-700 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
        ></textarea>

        <button
          type="submit"
          className="button bg-purple-600 text-white rounded-lg py-3 hover:bg-purple-700 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
