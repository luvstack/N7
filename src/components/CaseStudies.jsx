import React, { useState } from 'react';
import thumb from '../assets/Frame_54.png';
import logoZoomerr from '../assets/logo-zoomerr.png';
import logoSmartFinder from '../assets/logo-smartfinder.png';
import logoKontrastr from '../assets/logo-kontrastr.png';
import logoShells from '../assets/logo-shells.png';

const slides = [
  {
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    brand: 'Zoomerr',
    logo: logoZoomerr,
  },
  {
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    brand: 'SmartFinder',
    logo: logoSmartFinder,
  },
  {
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    brand: 'kontrastr',
    logo: logoKontrastr,
  },
  {
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    brand: 'SHELLS',
    logo: logoShells,
  },
];

const CaseStudies = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  const getSlideStyle = (index) => {
    const total = slides.length;
    const diff = ((index - active + total) % total + total) % total;
    // diff: 0 = active, 1 = next, total-1 = prev
    const normalised = diff > total / 2 ? diff - total : diff; // -2,-1,0,1,2

    if (normalised === 0) return { zIndex: 10, scale: 1.07, opacity: 1, translateX: '0%' };
    if (normalised === -1) return { zIndex: 5,  scale: 0.86, opacity: 0.55, translateX: '-64%' };
    if (normalised === 1)  return { zIndex: 5,  scale: 0.86, opacity: 0.55, translateX: '64%' };
    return { zIndex: 1, scale: 0.78, opacity: 0, translateX: normalised < 0 ? '-120%' : '120%' };
  };

  return (
    <section className="relative bg-[#05070a] text-white py-20 overflow-hidden">
      {/* Subtle blue wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 35%, rgba(59,130,246,0.18) 0%, rgba(5,7,10,0) 55%)',
        }}
        aria-hidden="true"
      />

      {/* Heading */}
      <h2 className="relative z-10 text-3xl xl:text-4xl font-semibold text-center mb-14">
        Our Case Studies
      </h2>

      {/* Carousel viewport — desktop: 3D depth, mobile: full-width single card */}
      {/* Desktop */}
      <div className="relative z-10 hidden md:block" style={{ height: '320px' }}>
        <div className="relative flex items-center justify-center h-full">
          {slides.map((slide, index) => {
            const { zIndex, scale, opacity, translateX } = getSlideStyle(index);
            const isActive = index === active;
            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className="absolute flex rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  width: '680px',
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}) scale(${scale})`,
                  transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                  background: isActive ? '#0b1628' : '#091423',
                  border: isActive
                    ? '1px solid rgba(124,58,237,0.55)'
                    : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-[260px] shrink-0 bg-[#0d1f3c]"
                  style={{
                    border: `2px solid ${
                      isActive ? 'rgba(167, 139, 250, 0.95)' : 'rgba(255,255,255,0)'
                    }`,
                  }}
                >
                  <img src={thumb} alt="Case study" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between p-8 flex-1 gap-5">
                  <div>
                    <p className="text-[#3b82f6] text-[10px] font-bold tracking-[0.2em] mb-4">
                      {slide.category}
                    </p>
                    <h3 className="text-white font-semibold text-2xl leading-snug mb-5">
                      {slide.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center overflow-hidden p-1">
                        <img src={slide.logo} alt={slide.brand} className="w-full object-contain" />
                      </div>
                      <span className="text-gray-400 text-sm">{slide.brand}</span>
                    </div>
                  </div>
                  <button className="border border-white/25 hover:border-white/50 text-white text-xs font-semibold tracking-widest py-3 rounded-full transition-all duration-200">
                    READ MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: single full-width card */}
      <div className="md:hidden px-6">
        {slides.map((slide, index) => (
          index === active && (
            <div
              key={index}
              className="flex flex-col rounded-xl overflow-hidden"
              style={{ background: '#0b1628', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="bg-[#0d1f3c] h-[180px]">
                <img src={thumb} alt="Case study" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <p className="text-[#3b82f6] text-[10px] font-bold tracking-[0.2em]">{slide.category}</p>
                <h3 className="text-white font-semibold text-xl leading-snug">{slide.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center overflow-hidden p-1">
                    <img src={slide.logo} alt={slide.brand} className="w-full object-contain" />
                  </div>
                  <span className="text-gray-400 text-sm">{slide.brand}</span>
                </div>
                <button className="border border-white/20 text-white text-xs font-semibold tracking-widest py-3 rounded-md">
                  READ MORE
                </button>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Navigation */}
      <div className="relative z-10 mx-auto mt-10 flex max-w-7xl flex-col items-center gap-4 px-8 lg:px-20">
        {/* Arrows + dots — centered */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white/60 flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? '24px' : '8px',
                  background: i === active ? '#3b82f6' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white/60 flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* View all — right on desktop, centered on mobile */}
        <div className="flex w-full justify-center sm:justify-end">
          <a
            href="#"
            className="text-[#3b82f6] text-xs font-bold tracking-widest underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            VIEW ALL &nbsp;→
          </a>
        </div>
      </div>

    </section>
  );
};

export default CaseStudies;
