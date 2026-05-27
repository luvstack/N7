import React from 'react';
import Navbar from './Navbar';
import heroVisual from '../assets/hero-visual.png';
import logoShells from '../assets/logo-shells.png';
import logoSmartFinder from '../assets/logo-smartfinder.png';
import logoZoomerr from '../assets/logo-zoomerr.png';
import logoArtVenue from '../assets/logo-artvenue.png';
import logoKontrastr from '../assets/logo-kontrastr.png';
import logoWavesmarathon from '../assets/logo-wavesmarathon.png';

const Banner = () => {
  return (
    <div className="bg-[#05070a] min-h-screen text-white px-8 py-6 relative overflow-hidden">

      {/* Radial Gradient Background Glow */}
      <div
        className="absolute top-40 right-0 w-[700px] h-[700px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none"
      />

      <Navbar />

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between mt-16 px-4 lg:px-12 gap-10">
        {/* Left Side: Text Content */}
        <div className="max-w-lg flex-shrink-0">
          <h1 className="text-[38px] sm:text-[48px] xl:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 max-w-[480px]">
            The new foundation<br />of modern banking
          </h1>
          <p className="text-gray-400 text-base mb-10 max-w-sm">
            We drive innovation and growth, provide seamless
            customer experience and operational excellence
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 px-8 py-3 rounded-md font-semibold text-white text-sm tracking-widest transition-all duration-300 shadow-lg shadow-blue-900/30">
              REQUEST DEMO
            </button>
            <button className="border border-gray-600 hover:border-white px-8 py-3 rounded-md font-semibold text-sm tracking-widest transition duration-300">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Right Side: Hero Visual Image */}
        <div className="relative mt-10 lg:mt-0 flex-1 flex justify-center lg:justify-end">
          <img
            src={heroVisual}
            alt="Banking app interface"
            className="w-full max-w-[560px] xl:max-w-[640px] object-contain drop-shadow-2xl"
          />
        </div>
      </main>

      {/* Trusted By Section */}
      <div className="relative z-10 mt-24 px-4 lg:px-12">
        <p className="text-gray-500 text-sm mb-6">Trusted By:</p>
        <div className="flex flex-wrap gap-8 items-center">
          {[
            { src: logoShells, alt: 'SHELLS' },
            { src: logoSmartFinder, alt: 'SmartFinder' },
            { src: logoZoomerr, alt: 'Zoomerr' },
            { src: logoArtVenue, alt: 'ArtVenue' },
            { src: logoKontrastr, alt: 'kontrastr' },
            { src: logoWavesmarathon, alt: 'WAVESMARATHON' },
          ].map((brand) => (
            <img
              key={brand.alt}
              src={brand.src}
              alt={brand.alt}
              className="h-5 object-contain opacity-50 hover:opacity-80 transition-opacity duration-200 cursor-pointer grayscale"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;