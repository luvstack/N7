import React from 'react';

const CtaBanner = () => {
  return (
    <section className="bg-[#05070a] text-white px-8 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left: Text */}
        <div className="max-w-[500px]">
          <h2 className="text-3xl xl:text-4xl font-bold leading-tight mb-4">
            Take the full advantage of<br />going paper-less now.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[380px]">
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
          <button className="border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-md text-sm font-semibold tracking-widest">
            CONTACT US
          </button>
          <button className="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 px-8 py-3 rounded-md font-semibold text-sm tracking-widest transition-all duration-300 shadow-lg shadow-blue-900/30">
            REQUEST DEMO
          </button>
        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
