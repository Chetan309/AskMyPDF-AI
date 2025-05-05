import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Header from "../dashboard/_components/Header";

const page = () => {
  return (
    <>
      <Header />
{/* Navbar */}
<nav className="bg-gray-800 text-white shadow-md px-3 py-9  fixed w-full top-0 left-0 z-10">
  <div className="max-w-7xl mx-auto relative flex items-center justify-center px-6">
    
    {/* Centered Title */}
    <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold">
      <a href="/" className="hover:text-gray-200 transition-all">About Developer!!</a>
    </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-2xl">☰</button>
          </div>
        </div>
      </nav>

      <div>
        <div className="flex justify-center items-center">
          <div className="w-[30%] mt-20">
            <article className="group">
              <img
                alt="Chetan Sharma"
                src="/me1.png"
                className="h-52 px-32 rounded-xl object-cover transition-all duration-300 hover:scale-105"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    About Me
                  </h3>
                </a>

                <p className="mt-2 text-justify text-sm text-gray-700 font-semibold">
                  Hello!!, I'm Chetan Sharma, a passionate Web Developer with a
                  strong foundation in TailwindCSS, NodeJS, MongoDB, React, and
                  SQL. I specialize in creating dynamic, responsive, and
                  user-friendly web applications that deliver seamless
                  experiences. With expertise in both frontend and backend
                  development, I build websites and applications that are not
                  only visually appealing but also efficient and scalable.
                </p>
                <div className="my-5 flex gap-3 items-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/chetansharmagya"
                    className="cursor-pointer hover:bg-pink-500 hover:text-white p-1 rounded-lg"
                  >
                    <FaInstagram style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Chetan309"
                    className="cursor-pointer hover:bg-slate-900 hover:text-white p-1 rounded-lg"
                  >
                    <FiGithub style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/chetansharma30"
                    className="cursor-pointer hover:bg-blue-600 hover:text-white p-1 rounded-lg"
                  >
                    <FaLinkedinIn style={{ fontSize: "25px" }} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-16">
          <div className="text-center">
            <p className="text-sm">&copy; 2025 Chetan Sharma. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default page;
