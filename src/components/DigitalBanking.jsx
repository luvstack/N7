import React from 'react';
import iphoneHome from '../assets/iphone-home.png';
import iphoneAnalytics from '../assets/iphone-analytics.png';
import iphoneProfile from '../assets/iphone-profile.png';

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="#3b82f6" strokeWidth="1.5" />
    <path d="M6 10.5l2.5 2.5 5-5" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FeatureList = ({ items }) => (
  <ul className="flex flex-col gap-3 mt-4">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-snug">
        <CheckIcon />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const DigitalBanking = () => {
  return (
    <section
      className="text-gray-900 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #ddeeff 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16">

        {/* ── Row 1 ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center pt-20 pb-10">

          {/* Left: Title + buttons */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl xl:text-4xl font-bold leading-tight">
              Digital banking<br />out-of-the-box
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <button className="w-fit bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 px-7 py-2.5 rounded-md font-semibold text-white text-xs tracking-widest transition-all duration-300 shadow-md">
              REQUEST DEMO
            </button>
            <a href="#" className="text-[#3b82f6] text-xs font-bold tracking-widest underline underline-offset-4 w-fit hover:text-blue-800 transition-colors">
              LEARN MORE &nbsp;→
            </a>
          </div>

          {/* Center: iPhone home screen */}
          <div className="flex justify-center">
            <img src={iphoneHome} alt="Banking home screen" className="w-[240px] xl:w-[270px] object-contain drop-shadow-xl" />
          </div>

          {/* Right: Feature block 1 */}
          <div>
            <h3 className="text-base font-bold leading-snug">Fully compliant with regulatory requirement</h3>
            <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-[280px]">
              The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.
            </p>
            <FeatureList items={[
              'Pre-integrated Security System',
              'Fully Compliant With Regulatory Requirement',
              'Digitally Connected Core',
            ]} />
          </div>
        </div>

        {/* ── Row 2 ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10">

          {/* Left: Feature block 2 */}
          <div className="lg:pl-4">
            <h3 className="text-base font-bold leading-snug">No legacy IT systems</h3>
            <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-[320px]">
              Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <FeatureList items={[
              'Adaptive & Intelligent API monetization',
              'Ambient User Experience',
              'Cloud-native With lower TCO',
            ]} />
          </div>

          {/* Right: iPhone analytics screen */}
          <div className="flex justify-center lg:justify-end">
            <img src={iphoneAnalytics} alt="Banking analytics screen" className="w-[240px] xl:w-[270px] object-contain drop-shadow-xl" />
          </div>
        </div>

        {/* ── Row 3 ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10 pb-20">

          {/* Left: iPhone profile screen */}
          <div className="flex justify-center lg:justify-start">
            <img src={iphoneProfile} alt="Banking profile screen" className="w-[240px] xl:w-[270px] object-contain drop-shadow-xl" />
          </div>

          {/* Right: Feature block 3 */}
          <div>
            <h3 className="text-base font-bold leading-snug">No traditional branches</h3>
            <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-[320px]">
              Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
            </p>
            <FeatureList items={[
              'Branchless & Paperless Banking',
              'Digital Transformation Capability',
              'Optimized, Adoptable and Scalable',
            ]} />
          </div>
        </div>

      </div>

      {/* ── Bottom dark CTA card ───────────────────────────── */}
      <div className="bg-[#05070a] px-8 lg:px-20 py-14">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-[440px]">
            <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4">
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              N7 helps your financial institution improve the client experience,<br />
              automate and optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <button className="border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-md text-sm font-semibold tracking-widest text-white">
              CONTACT US
            </button>
            <button className="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 px-8 py-3 rounded-md font-semibold text-sm tracking-widest text-white transition-all duration-300 shadow-lg shadow-blue-900/30">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DigitalBanking;
