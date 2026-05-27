import React from 'react';
import n7Logo from '../assets/n7-logo.png';

const offices = [
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
  },
  {
    city: 'Dubai',
    address: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
];

const solutions = [
  'Core Banking CB7',
  'Digital Banking N7',
  'Open Banking',
  'Loan Origination System',
  'Loan Management System',
  'Digital Transformation',
];

const n7Banking = [
  'About Us',
  'Solutions',
  'Contact',
  'Company',
  'Careers',
  'Insights',
  'Core Team',
  'Brand Center',
];

const socials = ['LinkedIn', 'X'];

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#05070a] text-white px-8 lg:px-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Top row: N7 logo + 3 office addresses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 items-start">

          {/* N7 giant logo */}
          <div className="flex items-center">
            <img
              src={n7Logo}
              alt="N7"
              className="w-auto object-contain"
              style={{ height: 'clamp(80px, 12vw, 160px)' }}
            />
          </div>

          {/* Offices */}
          {offices.map((office) => (
            <div key={office.address}>
              <p className="font-semibold text-sm mb-3">{office.city}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{office.address}</p>
            </div>
          ))}
        </div>


        {/* Bottom row: 3 link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">

          {/* Empty column — aligns with N7 logo above, hidden on mobile */}
          <div className="hidden lg:block" />

          {/* Solutions */}
          <div>
            <p className="font-semibold text-sm mb-5">Solutions</p>
            <ul className="flex flex-col gap-3">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center justify-between text-gray-400 text-sm hover:text-white transition-colors duration-200 group">
                    <span>{item}</span>
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* N7 Banking */}
          <div>
            <p className="font-semibold text-sm mb-5">N7 Banking</p>
            <ul className="flex flex-col gap-3">
              {n7Banking.map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center justify-between text-gray-400 text-sm hover:text-white transition-colors duration-200 group">
                    <span>{item}</span>
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Socials */}
          <div>
            <p className="font-semibold text-sm mb-5">Our Socials</p>
            <ul className="flex flex-col gap-3">
              {socials.map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center justify-between text-gray-400 text-sm hover:text-white transition-colors duration-200 group">
                    <span>{item}</span>
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6">
          <p className="text-gray-600 text-xs leading-relaxed max-w-2xl">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2008 in England and Wales | Number of Incorporation 13100692]
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
