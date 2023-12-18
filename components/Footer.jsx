"use client";

import React from "react";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { FaGithub, FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mx-40 px-20 py-10 mb-14 lg:mx-10 lg:p-5 border-t-[1px] border-light/25">
      <div className="mb-10 flex gap-2">
        <DiCssdeck className="text-xl text-light/50" />
        <span className="text-base font-mukta font-semibold text-white">sahil@hmed</span>
      </div>

      <div className="mb-10 flex items-center justify-between">
        <div className="items-center justify-between flex flex-col gap-3">
          <Link href='/' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">Home</Link>
          <Link href='/about' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">About</Link>
          <Link href='/skills' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">Skills</Link>
          <Link href='/projects' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">Projects</Link>
        </div>

        <div className="items-center justify-between flex flex-col gap-3">
          <Link href='utilities' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">Utilities</Link>
          <Link href='/' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">Articles</Link>
          <Link href='/certificates' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">Certificates</Link>
          <Link href='/' className="text-light/50 font-mukta text-lg md:text-base sm:text-sm hover:text-light/40 self-start">Snippets</Link>
        </div>

        <div className="items-center justify-between flex flex-col gap-3">
          <Link href='https://github.com/1999-sahil' className="text-light/50 font-mukta flex gap-1 items-center justify-center text-lg md:text-base sm:text-sm hover:text-light/40 self-start">
            <FaGithub className="" />
            Github
          </Link>
          <Link href='https://www.linkedin.com/in/sahil-ahmed-86222718a/' className="text-light/50 font-mukta flex items-center justify-center gap-1 text-lg md:text-base sm:text-sm hover:text-light/40 self-start">
            <FaLinkedinIn />
            LinkedIn
          </Link>
          <Link href='' className="text-light/50 font-mukta flex items-center justify-center gap-1 text-lg md:text-base sm:text-sm hover:text-light/40 self-start">
            <FaInstagram  />
            Instagram
          </Link>
          <Link href='' className="text-light/50 font-mukta flex items-center justify-center gap-1 text-lg md:text-base sm:text-sm hover:text-light/40 self-start">
            <BsMedium />
            Medium
          </Link>
        </div>
      </div>

      <div className="text-lg md:text-base sm:text-sm text-light/60 font-mukta flex items-center justify-center">
        <h2>Powered by <span className="font-bold text-white">Next.js</span> and <span className="font-bold text-white">Vercel</span></h2>
      </div>
    </footer>
  );
};

export default Footer;
