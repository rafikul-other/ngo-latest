"use client";

import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto">
        {/* About Us */}
        <div>
          <h3 className="text-[23px] mb-4">About Us</h3>
          <ul className="space-y-2 text-yellow-400">
            <li><a href="#" className="underline">Meet Our Team</a></li>
            <li><a href="#" className="underline">Contact Us</a></li>
            <li><a href="#" className="underline">Child Protection Policy</a></li>
            <li><a href="#" className="underline">POSH Policy</a></li>
            <li><Link href="https://maps.app.goo.gl/mm3okw5xaG6sMPH86" target="_blank"  className="underline">Address</Link></li>
          </ul>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3470.8566124910317!2d75.0481844755349!3d29.549669775176415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDMyJzU4LjgiTiA3NcKwMDMnMDIuNyJF!5e0!3m2!1sen!2sin!4v1765315217249!5m2!1sen!2sin"
              width="100%"
              height="150"
              className="rounded-md border-0"
              loading="lazy"></iframe>
          </div>
        </div>

        {/* Our Work */}
        <div>
          <h3 className="text-[23px] mb-4">Our Work</h3>
          <ul className="space-y-2 text-yellow-400">
            <li><a href="#" className="underline">Programs</a></li>
            <li><a href="#" className="underline">Tech Products</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[23px] mb-4">Make a Difference</h3>
          <ul className="space-y-2 text-yellow-400">
            <li><a href="#" className="underline">Donate</a></li>
            <li><a href="#" className="underline">Jobs</a></li>
          </ul>


        </div>

        <div>
          <h3 className="text-[23px] mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white text-black rounded-full hover:scale-110 transition">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white text-black rounded-full hover:scale-110 transition">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white text-black rounded-full hover:scale-110 transition">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white text-black rounded-full hover:scale-110 transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white text-black rounded-full hover:scale-110 transition">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-12">
        © {new Date().getFullYear()} NGO | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
