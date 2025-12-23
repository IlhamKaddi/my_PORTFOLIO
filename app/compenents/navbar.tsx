"use client";
import Image from "next/image";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Skills", "Experience", "Connect"];

  return (
    <header className="bg-black">
      <div className="flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className=" tracking-wide">
            
          <Image src="/I__1_-removebg-preview.png" alt="Logo" width={80} height={80} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <nav
            className="
              flex items-center gap-1
              rounded-full px-2 py-2
              border border-zinc-800
              bg-gradient-to-b from-zinc-900/80 to-black/80
              backdrop-blur
              shadow-[0_0_30px_rgba(255,180,80,0.08)]
            "
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`
                  px-16 py-2 text-[16px] rounded-full transition-all
                  ${
                    item === "Home"
                      ? "text-[#f85c70] bg-zinc-900/60"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }
                `}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="/CV.pdf"
            download="ilhame-kaddi-cv.pdf"
            className="
              flex items-center gap-2
              rounded-full px-4 py-4
              border border-[#f85c70]/50
              text-[#f85c70]
              bg-gradient-to-r from-black to-zinc-900
              hover:shadow-[0_0_25px_rgba(255,180,80,0.25)]
              transition-all
            "
          >
            <FiDownload className="text-lg" />
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-6 pb-6">
          <div
            className="
              flex flex-col gap-4
              rounded-2xl p-4
              border border-zinc-800
              bg-gradient-to-b from-zinc-900/90 to-black/90
              backdrop-blur
            "
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  text-zinc-300 hover:text-white
                  py-2 px-4 rounded-lg
                  hover:bg-zinc-800/60 transition
                "
              >
                {item}
              </a>
            ))}

            <a
            href="/CV.pdf"
            download="Ilhame-Kaddi-CV.pdf"
            className="
              mt-2 flex items-center justify-center gap-2
              rounded-full px-4 py-3
              border border-[#f85c70]/50
              text-[#f85c70]
            "
          >
          <FiDownload />
          Download Resume
        </a>

          </div>
        </div>
      )}
    </header>
  );
}
