import React from "react";
import Button from "./Button";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-28">
      <div className="max-w-[1100] mx-auto rounded-xl border border-gray-400 p-2 sm:p-6">
        {/* Branch Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Button text="Our Branches"></Button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {["COIMBATORE", "CHENNAI", "HYDERABAD", "GOA", "KOCHI", "MUMBAI"].map(
            (branch, i) => (
              <div
                key={i}
                className={`p-2 text-center border ${
                  branch === "COIMBATORE"
                    ? "border-lime-400 bg-lime-100"
                    : "border-gray-300"
                } rounded`}
              >
                <div className="w-12 h-12 mx-auto bg-gray-200 rounded mb-1" />
                <span className="text-xs font-medium">{branch}</span>
              </div>
            )
          )}
        </div>

        {/* Contact Form & Map */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl flex-1">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded bg-blue-800 text-white placeholder:text-gray-300 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded bg-blue-800 text-white placeholder:text-gray-300 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone *"
                className="w-full px-4 py-3 rounded bg-blue-800 text-white placeholder:text-gray-300 outline-none"
              />
              <textarea
                rows="4"
                placeholder="Write message"
                className="w-full px-4 py-3 rounded bg-blue-800 text-white placeholder:text-gray-300 outline-none"
              />
              <Button text="Submit" />
            </form>
          </div>

          {/* Map and Address */}
          <div className="flex-1 rounded-xl overflow-hidden">
            <div className="w-full h-96 bg-gray-100">
              <iframe
                title="JRR Towers Location"
                className="w-full h-full"
                src="https://maps.google.com/maps?q=JRR%20Towers,%20Pattalamma%20Temple%20Rd,%20Basavanagudi,%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="bg-white p-4 border-t">
              <p className="font-bold">JRR Towers</p>
              <p className="text-sm">
                (2nd Floor), Pattalamma Temple Rd, Basavanagudi, Bangalore,
                560004
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
