import React from 'react';
import ckycLaptop from '../assets/Frame_98.png';

const leftFeatures = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
];

const rightFeatures = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="#3b82f6" strokeWidth="1.5" />
    <path d="M6 10.5l2.5 2.5 5-5" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CoreBankingFeatures = () => {
  return (
    <section className="bg-[#05070a] text-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-8">

        {/* Left Side: Laptop mockup — bleeds off the left edge on desktop only */}
        <div className="flex-shrink-0 lg:-ml-20 xl:-ml-32 px-4 lg:px-0">
          <img
            src={ckycLaptop}
            alt="CKYC Dashboard on laptop"
            className="w-full max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] object-contain mx-auto lg:mx-0"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1 px-8 lg:px-12 xl:px-16">
          <h2 className="text-3xl xl:text-4xl font-semibold leading-[1.25] mb-8 max-w-[480px]">
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>

          <p className="text-white font-semibold text-sm mb-5">What you will get:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {/* Left column */}
            <ul className="flex flex-col gap-4">
              {leftFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Right column */}
            <ul className="flex flex-col gap-4">
              {rightFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreBankingFeatures;
