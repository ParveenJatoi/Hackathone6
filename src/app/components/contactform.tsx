import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white py-10 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-500">
            For more information about our products and services, please feel free to drop us an email. Our staff is always ready to help you out. Dont hesitate!
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">📍</span>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>525 25th St. Avenue, New York 101000, United States</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">📞</span>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>Mobile: (+88) 456-7890</p>
                <p>Hotline: (+88) 456-8790</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">⏰</span>
              <div>
                <h3 className="font-bold">Working Time</h3>
                <p>Monday–Friday: 8:00–20:00</p>
                <p>Saturday–Sunday: 8:00–21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-4">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-10 rounded-md hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 py-6 px-5 rounded-lg">
        {[ 
          { icon: "✨", title: "Premium Quality", subtitle: "Top-notch materials" },
          { icon: "🔒", title: "Secure Payments", subtitle: "Safe and trusted" },
          { icon: "🚀", title: "Fast Delivery", subtitle: "Quick shipping" },
          { icon: "📞", title: "24/7 Support", subtitle: "Always here for you" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow">
            <div className="text-4xl text-yellow-500 mb-2">{item.icon}</div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;
