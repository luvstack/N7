import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#313437] text-white p-4 rounded-xl shadow-lg w-[92%] sm:w-[85%] my-4 mx-auto relative">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold ml-2 tracking-wider">N7</div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 hover:text-gray-300 text-sm">
              SOLUTIONS <ChevronIcon />
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-[#25282b] p-2 rounded shadow-xl w-40 z-50">
              <div className="py-1 hover:bg-gray-700 px-2 rounded">Analytics</div>
              <div className="py-1 hover:bg-gray-700 px-2 rounded">Automation</div>
              <div className="py-1 hover:bg-gray-700 px-2 rounded">Security</div>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 hover:text-gray-300 text-sm">
              RESOURCES <ChevronIcon />
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-[#25282b] p-2 rounded shadow-xl w-40 z-50">
              <div className="py-1 hover:bg-gray-700 px-2 rounded">Blog</div>
              <div className="py-1 hover:bg-gray-700 px-2 rounded">Case Studies</div>
              <div className="py-1 hover:bg-gray-700 px-2 rounded">Documentation</div>
            </div>
          </div>
          <div className="hover:text-gray-300 cursor-pointer text-sm">ABOUT US</div>
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all cursor-pointer">
          REQUEST DEMO
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 rounded focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-2 border-t border-white/10 pt-4">
          <div className="text-sm font-semibold hover:text-gray-300 cursor-pointer">SOLUTIONS</div>
          <div className="text-sm font-semibold hover:text-gray-300 cursor-pointer">RESOURCES</div>
          <div className="text-sm font-semibold hover:text-gray-300 cursor-pointer">ABOUT US</div>
          <button className="mt-2 border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all w-fit">
            REQUEST DEMO
          </button>
        </div>
      )}
    </nav>
  );
};

const ChevronIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Navbar;
