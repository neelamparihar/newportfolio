import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hmr475k",
        "template_hh31kfu",
        form.current,
        "vIKcpVGjG28z2xFwg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div class="bg-black py-16">
        <div class="text-amber-500 text-5xl text-center font-bold italic">
          Contact
        </div>
        <div class="max-w-md mx-auto">
          <h2 class="text-2xl font-semibold mb-4">Contact Me</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <div class="mb-4">
              <label htmlFor="name" class="block text-gray-600 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter your name"
                autoComplete="off"
                class="w-full bg-amber-300 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div class="mb-4">
              <label htmlFor="email" class="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                autoComplete="off"
                placeholder="Enter your email"
                class="w-full px-4 py-2 bg-amber-300 border rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div class="mb-4">
              <label htmlFor="message" class="block  text-gray-600 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                autoComplete="off"
                rows="4"
                class="w-full px-4 py-2 border bg-amber-300 focus:outline-none focus:border-blue-400"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button
                type="submit"
                value="Send"
                class="px-8 py-3 bg-amber-500 font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
