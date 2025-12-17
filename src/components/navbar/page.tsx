"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Search,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Our Work",
      submenu: [
        { label: "Programs", href: "/our-programs" },
        // { label: "Tech Products", href: "/tech-products" },
        { label: "Who We Are", href: "/our-team" },
      ],
    },
    { label: "Jobs", href: "/jobs" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/gurukul", highlight: "red" },
  ];

  const searchIndex = [
    { title: "Home", href: "/", keywords: ["welcome", "intro", "overview", "landing", "home", "main"] },
    {
      title: "Programs",
      href: "/our-programs",
      keywords: ["education", "literacy", "numeracy", "students"],
    },
    {
      title: "Tech Products",
      href: "/tech-products",
      keywords: ["apps", "platform", "digital tools", "innovation"],
    },
    {
      title: "Who We Are",
      href: "/our-team",
      keywords: ["mission", "vision", "team", "leaders", "ngo"],
    },
    { title: "Jobs", href: "/jobs", keywords: ["career", "hiring", "vacancy"] },
    { title: "Donate", href: "/donate", keywords: ["support", "fund", "help", "art"] },
    {
      title: "Gurukul",
      href: "/gurukul",
      keywords: ["learning", "school", "education", "red"],
    },
  ];

  const SocialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/people/Learning-Yatra/61579230505162/" },
    { icon: FaTwitter, href: "https://x.com/Learning_Yatra?t=iZOAsWPWRfRDrobuhPn9Og&s=09" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/learning-yatra-foundation-856442387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: FaInstagram, href: "https://www.instagram.com/invites/contact/?igsh=ork3zhutu40y&utm_content=z3vbltq" },
    { icon: FaYoutube, href: "https://youtube.com/@thelearningyatra-5w?si=2opYnDSy9m8Q75uX" },
  ]

  const results = useMemo(() => {
    if (!searchQuery) return [];
    const q = searchQuery.toLowerCase();
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const handleCloseModal = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <nav className="w-full  bg-white sticky top-0 z-50 shadow-md sm:p-0 xl:p-6">
      <div className="hidden xl:flex items-center justify-between">
        <div className="flex items-center justify-between gap-20">
          <Link href="/">
            <img
              src={"./logo_main.png"}
              alt="Logo"
              className="h-36 cursor-pointer"
            />
          </Link>

          <ul className="flex items-center space-x-8 text-gray-700 font-light">
            {menuItems.map((item, i) =>
              item.submenu ? (
                <li key={i} className="relative group">
                  <span className="flex items-center cursor-pointer hover:text-gray-900 transition-colors">
                    {item.label}
                  </span>
                  <ul className="absolute left-0 mt-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white shadow-lg rounded-lg overflow-hidden">
                    {item.submenu.map((sub, j) => (
                      <li key={j}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-3 hover:bg-gray-100 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`relative inline-block transition-colors duration-300
                      ${item.highlight
                        ? "bg-[#af392b] text-white px-10 py-3 rounded-2xl hover:!font-medium text-lg"
                        : "text-black after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#af392b] after:transition-all after:duration-300 hover:after:w-full"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setSearchOpen((p) => !p)}
            className="p-3 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <Search className="h-6 w-6 text-gray-700 cursor-pointer" />
          </button>
          {SocialLinks.map(
            (Icon, i) => (
              <Link
                key={i}
                href={Icon.href}
                className="bg-[#af392b] p-3 rounded-full text-white hover:bg-[#af382b6f] transition-colors"
                target="_blank"
              >
                {<Icon.icon />}
              </Link>
            )
          )}
        </div>
      </div>



      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 p-4">
          <div className="w-full max-w-lg md:max-w-2xl bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-end mb-4 ">
              <X size={32} strokeWidth={2.5} className="text-gray-600 cursor-pointer" onClick={handleCloseModal} />
            </div>
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Pages or Keywords..."
              className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#af392b]"
            />
            {results.length > 0 && (
              <ul className="mt-4 border rounded-md divide-y max-h-60 overflow-y-auto">
                {results.map((r, i) => (
                  <li key={i}>
                    <Link
                      href={r.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setSearchQuery("");
                        setSearchOpen(false);
                      }}
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}


      <div className="flex xl:hidden items-center justify-between px-4">
        <Link href="/">
          <img
            src={"./logo_main.png"}
            alt="Logo"
            className="h-36"
          />
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen((p) => !p)}
            className="p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            <Search className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            {isOpen ? (
              <X size={32} strokeWidth={1} className="text-gray-600" />
            ) : (
              <Menu size={30} strokeWidth={1} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>



      <div
        className={`fixed inset-0 bg-white z-40 shadow-xl transform transition-all duration-500 ease-in-out xl:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 border-b">
          <Link href="/">
            <img
              src={"./logo_main.png"}
              alt="Logo"
              className="h-36"
            />
          </Link>
          <button onClick={toggleMenu}>
            <X size={32} strokeWidth={1} className="text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col gap-16 h-[calc(100vh-120px)] justify-center">
          {/* Submenu Mode */}
          <div className="">
            {submenu ? (
              <div className="animate-fadeIn flex flex-col justify-center items-center">
                <button
                  onClick={() => setSubmenu(null)}
                  className="flex items-center rounded-md hover:bg-gray-100 transition"
                >
                  <ChevronLeft
                    size={32}
                    strokeWidth={1}
                    className=" text-gray-400"
                  />
                  <span className="text-[31px] text-gray-500 font-light">
                    Back
                  </span>
                </button>
                <ul className="text-lg text-center">
                  {menuItems
                    .find((item) => item.label === submenu)
                    ?.submenu?.map((sub, j) => (
                      <li key={j} className="animate-slideIn font-light">
                        <Link
                          href={sub.href}
                          className="hover:text-red-600 transition-colors text-[31px]"
                          onClick={toggleMenu}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              <div>
                <ul className="text-lg animate-slideIn flex flex-col items-center justify-center">
                  {menuItems.map((item, i) =>
                    item.submenu ? (
                      <li
                        key={i}
                        className="flex gap-2 items-center cursor-pointer hover:text-red-600 transition-colors text-[31px] font-light"
                        onClick={() => setSubmenu(item.label)}
                      >
                        {item.label}
                        <ChevronRight
                          size={32}
                          strokeWidth={1}
                          className="text-gray-600"
                        />
                      </li>
                    ) : (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className={`hover:text-red-600 transition-colors text-[31px] font-light  ${item.highlight
                            ? "bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                            : ""
                            }`}
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-3">
            {SocialLinks.map(
              (Icon, i) => (
                <Link
                  key={i}
                  href={Icon.href}
                  className="p-3 bg-black text-white rounded-full hover:bg-red-600 transition"
                  target="_blank"
                >
                  <Icon.icon className="h-[25px] w-[25px]" />
                </Link>
              )
            )}
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;



