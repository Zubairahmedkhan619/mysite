import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 text-white py-10 border-t border-gray-300 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-around text-center gap-6 md:gap-0">
          {/* Email */}
          <div className="space-y-2 px-4">
            <h5 className="text-2xl font-bold text-red-600">Email</h5>
            <a
              href="mailto:zubairahmedkhan619@gmail.com"
              className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-300 hover:text-red-600"
            >
              <FaEnvelope />
              zubairahmedkhan619@gmail.com
            </a>
          </div>

          {/* Divider - vertical for desktop, horizontal for mobile */}
          <div className="hidden md:block h-12 border-l border-gray-400 mx-6"></div>
          <div className="block md:hidden w-2/3 border-t border-gray-400 my-4"></div>

          {/* WhatsApp */}
          <div className="space-y-2 px-4">
            <h5 className="text-2xl font-bold text-green-400">WhatsApp</h5>
            <a
              href="https://wa.me/0544297485"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-300 hover:text-green-400"
            >
              <FaWhatsapp />
              +971 544297485
            </a>
          </div>

          {/* Divider - vertical for desktop, horizontal for mobile */}
          <div className="hidden md:block h-12 border-l border-gray-400 mx-6"></div>
          <div className="block md:hidden w-2/3 border-t border-gray-400 my-4"></div>

          {/* LinkedIn */}
          <div className="space-y-2 px-4">
            <h5 className="text-2xl font-bold text-blue-500">LinkedIn</h5>
            <a
              href="https://www.linkedin.com/in/s-zubair-ahmed-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-300 hover:text-blue-500"
            >
              <FaLinkedin />
              /zubairahmedkhan
            </a>
          </div>

          <div className="hidden md:block h-12 border-l border-gray-400 mx-6"></div>
          <div className="block md:hidden w-2/3 border-t border-gray-400 my-4"></div>

          {/* Github */}
          <div className="space-y-2 px-4">
            <h5 className="text-2xl font-bold text-gray-900">GitHub</h5>
            <a
              href="https://github.com/Zubairahmedkhan619"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-300 hover:text-blue-500"
            >
              <FaGithub />
              /github.com/zubairahmedkhan619
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-8 text-black dark:text-gray-400">
          Zubair Ahmed Khan. All rights &copy; {new Date().getFullYear()}{" "}
          reserved.
        </p>
      </div>
    </footer>
  );
}
