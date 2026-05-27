import React from 'react';
import iconCoreBanking from '../assets/icon-core-banking.png';
import iconDigitalBanking from '../assets/icon-digital-banking.png';
import iconOpenBanking from '../assets/icon-open-banking.png';
import iconLoanOrigination from '../assets/icon-loan-origination.png';
import iconLoanManagement from '../assets/icon-loan-management.png';

const solutions = [
  {
    icon: iconCoreBanking,
    title: 'Core Banking CB7',
    nbfc: false,
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: iconDigitalBanking,
    title: 'Digital Banking N7',
    nbfc: false,
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: iconOpenBanking,
    title: 'Open Banking',
    nbfc: false,
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: iconLoanOrigination,
    title: 'Loan Origination System',
    nbfc: true,
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: iconLoanManagement,
    title: 'Loan Management System',
    nbfc: true,
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
];

const Solutions = () => {
  return (
    <section className="bg-[#05070a] text-white pt-24 pb-16 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

        {/* Left Side: Sticky Header */}
        <div className="lg:w-[320px] flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-4xl font-semibold leading-[1.2] mb-10">
              All of our solutions are tailor-made to your needs
            </h2>
            <button className="border border-white/40 hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 rounded-md text-sm font-semibold tracking-widest">
              REQUEST DEMO
            </button>
          </div>
        </div>

        {/* Right Side: 2-column grid */}
        <div className="flex-1 grid md:grid-cols-2 gap-x-12 gap-y-14">
          {solutions.map((item, index) => (
            <div key={index}>
              {/* Icon row with optional NBFC badge */}
              <div className="flex items-start justify-between mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
                {item.nbfc && (
                  <span className="text-[10px] font-semibold tracking-widest text-gray-400 border border-gray-600 px-2 py-0.5 rounded-sm">
                    NBFC
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {item.desc}
              </p>

              <a
                href="#"
                className="text-[#00c2cc] text-xs font-bold tracking-widest underline underline-offset-4 flex items-center gap-1 hover:text-white transition-colors duration-200"
              >
                LEARN MORE &nbsp;→
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;
