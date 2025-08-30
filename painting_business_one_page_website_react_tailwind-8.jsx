// Painting Business One-page Website (React + Tailwind, deploy-ready for Netlify)
import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Phone, Mail } from "lucide-react";

// TrustBar Component
function TrustBar() {
  return React.createElement(
    "div",
    { className: "bg-gray-100 py-6 flex justify-center gap-12" },
    React.createElement(
      "div",
      { className: "text-center" },
      React.createElement("p", { className: "text-xl font-bold" }, "100+"),
      React.createElement("p", { className: "text-sm text-gray-600" }, "Happy Clients")
    ),
    React.createElement(
      "div",
      { className: "text-center" },
      React.createElement("p", { className: "text-xl font-bold" }, "5 Years"),
      React.createElement("p", { className: "text-sm text-gray-600" }, "Experience")
    ),
    React.createElement(
      "div",
      { className: "text-center" },
      React.createElement("p", { className: "text-xl font-bold" }, "4.9★"),
      React.createElement("p", { className: "text-sm text-gray-600" }, "Customer Rating")
    )
  );
}

// Hero Section
function Hero() {
  return React.createElement(
    "section",
    { className: "bg-white py-20 text-center" },
    React.createElement(motion.img, {
      src: process.env.PUBLIC_URL + "/images/next-level-painting-logo.png",
      alt: "Next Level Painting Logo",
      className: "mx-auto w-32 h-32 mb-6",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6 }
    }),
    React.createElement("h1", { className: "text-4xl font-bold mb-4" }, "Next Level Painting"),
    React.createElement(
      "p",
      { className: "text-lg text-gray-600 mb-6" },
      "Professional and reliable painting services that transform your space."
    ),
    React.createElement(
      "a",
      {
        href: "#contact",
        className: "bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700"
      },
      "Get a Free Quote"
    )
  );
}

// Services Section
function Services() {
  const services = [
    { title: "Interior Painting", icon: React.createElement(Paintbrush, null), desc: "Bring life to your walls with clean, vibrant finishes." },
    { title: "Exterior Painting", icon: React.createElement(Paintbrush, null), desc: "Durable and weatherproof painting for long-lasting curb appeal." },
    { title: "Commercial Projects", icon: React.createElement(Paintbrush, null), desc: "Professional results for offices, shops, and businesses." }
  ];

  return React.createElement(
    "section",
    { id: "services", className: "py-20 bg-gray-50" },
    React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Our Services"),
    React.createElement(
      "div",
      { className: "grid md:grid-cols-3 gap-8 px-6 md:px-20" },
      services.map((s, i) =>
        React.createElement(
          motion.div,
          {
            key: i,
            className: "bg-white rounded-2xl shadow p-6 text-center",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: i * 0.1 }
          },
          React.createElement("div", { className: "flex justify-center text-blue-600 mb-4" }, s.icon),
          React.createElement("h3", { className: "font-semibold text-xl mb-2" }, s.title),
          React.createElement("p", { className: "text-gray-600 text-sm" }, s.desc)
        )
      )
    )
  );
}

// Contact Section
function Contact() {
  return React.createElement(
    "section",
    { id: "contact", className: "py-20 text-center bg-white" },
    React.createElement("h2", { className: "text-3xl font-bold mb-6" }, "Get in Touch"),
    React.createElement("p", { className: "text-gray-600 mb-8" }, "We’d love to hear about your project."),
    React.createElement(
      "div",
      { className: "flex justify-center gap-6" },
      React.createElement(
        "a",
        { href: "mailto:nextlvlpainting.co@gmail.com", className: "flex items-center gap-2 text-blue-600 hover:underline" },
        React.createElement(Mail, null),
        "nextlvlpainting.co@gmail.com"
      ),
      React.createElement(
        "a",
        { href: "tel:+1234567890", className: "flex items-center gap-2 text-blue-600 hover:underline" },
        React.createElement(Phone, null),
        "(123) 456-7890"
      )
    )
  );
}

// Main Website
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Hero, null),
    React.createElement(TrustBar, null),
    React.createElement(Services, null),
    React.createElement(Contact, null)
  );
}

export default App;
