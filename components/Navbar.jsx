"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} hover:text-light/50`}>
      {title}
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} hover:text-light/50 my-1`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full pl-20 lg:px-8 lg:py-4 font-medium flex items-center justify-between bg-dark text-light">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="items-center justify-center md:mr-8">
        <Logo />
      </div>

      <div className="w-full ml-24 flex items-center lg:hidden">
        <nav className="">
          <CustomLink href="/" title="Home" className="mr-3" />
          <CustomLink href="/about" title="About" className="mx-3" />
          <CustomLink href="/skills" title="Skills" className="mx-3" />
          <CustomLink href="/projects" title="Projects" className="mx-3" />
          <CustomLink href="/utilities" title="Utilities" className="mx-3" />
          <CustomLink href="/certificates" title="Certificates" className="mx-3" />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/5 rounded-lg backdrop-blur-md py-20"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/skills"
              title="Skills"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/utilities"
              title="Utilities"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/certificates"
              title="Certificates"
              className=""
              toggle={handleClick}
            />
            <div className="flex flex-col gap-2">
              <Link
                href="https://github.com/1999-sahil"
                className="flex gap-2 items-center px-10 py-1.5 rounded-lg bg-dark font-mukta text-lg hover:bg-light hover:text-dark"
                toggle={handleClick}
              >
                <FaGithub />
                Github
              </Link>

              <Link
                href="https://www.linkedin.com/in/sahil-ahmed-86222718a"
                className="flex gap-2 items-center px-10 py-1.5 rounded-lg bg-blue-600 font-mukta text-lg hover:bg-light hover:text-dark"
                toggle={handleClick}
              >
                <FaLinkedinIn />
                LinkedIn
              </Link>
            </div>
          </nav>
        </motion.div>
      ) : null}

      <div className="">
        <a
          href="https://github.com/1999-sahil"
          title="Fork me on GitHub"
          className="github-corner lg:hidden"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 250 250"
            className="relative z-20 h-20 w-20"
          >
            <title>Fork me on GitHub</title>
            <path d="M0 0h250v250"></path>
            <path
              d="M127.4 110c-14.6-9.2-9.4-19.5-9.4-19.5 3-7 1.5-11 1.5-11-1-6.2 3-2 3-2 4 4.7 2 11 2 11-2.2 10.4 5 14.8 9 16.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 110px" }}
              className="octo-arm"
            ></path>
            <path
              d="M113.2 114.3s3.6 1.6 4.7.6l15-13.7c3-2.4 6-3 8.2-2.7-8-11.2-14-25 3-41 4.7-4.4 10.6-6.4 16.2-6.4.6-1.6 3.6-7.3 11.8-10.7 0 0 4.5 2.7 6.8 16.5 4.3 2.7 8.3 6 12 9.8 3.3 3.5 6.7 8 8.6 12.3 14 3 16.8 8 16.8 8-3.4 8-9.4 11-11.4 11 0 5.8-2.3 11-7.5 15.5-16.4 16-30 9-40 .2 0 3-1 7-5.2 11l-13.3 11c-1 1 .5 5.3.8 5z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
