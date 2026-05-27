import React from 'react';
import handWave from '../assets/hand-wave.png';
import iconStar from '../assets/icon-star.png';

const MarqueeItem = () => (
  <>
    <span className="text-[#3b82f6] font-bold text-lg tracking-wide">N7</span>
    <img src={iconStar} alt="" className="w-5 h-5 object-contain opacity-50 mx-1" />
    <span className="text-white font-medium text-lg">Say</span>
    <img src={handWave} alt="👋" className="w-7 h-7 object-contain mx-1" />
    <span className="text-white font-medium text-lg">to the new way of banking</span>
    <img src={iconStar} alt="" className="w-5 h-5 object-contain opacity-50 mx-1" />
    <span className="text-[#3b82f6] font-bold text-lg tracking-wide">CB7</span>
    <img src={iconStar} alt="" className="w-5 h-5 object-contain opacity-50 mx-1" />
    <span className="text-white font-medium text-lg">Say</span>
    <img src={handWave} alt="👋" className="w-7 h-7 object-contain mx-1" />
    <span className="text-white font-medium text-lg">to the new way of banking</span>
    <img src={iconStar} alt="" className="w-5 h-5 object-contain opacity-50 mx-1" />
  </>
);

const MarqueeBanner = () => {
  return (
    <section className="bg-[#05070a] py-6 overflow-hidden border-y border-white/5">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track items-center gap-8">
        {/* Duplicated for seamless infinite loop */}
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="flex items-center gap-6 pr-10">
            <MarqueeItem />
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeBanner;
