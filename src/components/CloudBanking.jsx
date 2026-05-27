import React from 'react';
import cloudScreen from '../assets/Frame_90.png';

const CloudBanking = () => {
  return (
    <section className="relative overflow-x-clip bg-[#05070a] px-8 pb-20 pt-16 text-white lg:px-20 lg:pb-24 lg:pt-20">
      {/* CB7 outline watermark — gradient border, left-aligned, vertical fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="flex h-full items-center"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 12%, black 28%, black 72%, rgba(0,0,0,0.4) 88%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 12%, black 28%, black 72%, rgba(0,0,0,0.4) 88%, transparent 100%)',
          }}
        >
          <svg
            className="select-none"
            style={{
              width: 'clamp(22rem, 58vw, 44rem)',
              height: 'auto',
              transform: 'translateX(calc(-28% + 40px))',
            }}
            viewBox="0 0 560 280"
            preserveAspectRatio="xMinYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cb7-border-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(42, 78, 140, 0.55)" />
                <stop offset="50%" stopColor="rgba(42, 78, 140, 0.35)" />
                <stop offset="100%" stopColor="#05070a" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="210"
              fill="none"
              stroke="url(#cb7-border-gradient)"
              strokeWidth="2"
              fontSize="240"
              fontWeight="700"
              fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
              letterSpacing="-6"
            >
              C B 7
            </text>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8">
        {/* Left: copy + CTAs */}
        <div className="w-full shrink-0 lg:w-[420px]">
          <h2 className="mb-5 text-4xl font-bold leading-[1.15] xl:text-[52px]">
            A complete cloud-based
            <br />
            core banking.
          </h2>
          <p className="mb-8 max-w-[280px] text-sm leading-relaxed text-gray-400">
            Faster time to market with our cloud-based core banking services
          </p>
          <div className="flex flex-col gap-5">
            <button
              type="button"
              className="w-fit rounded-md bg-gradient-to-r from-[#4da3ff] to-[#2563eb] px-8 py-3 text-sm font-semibold tracking-widest shadow-lg shadow-blue-900/30 transition-all duration-300 hover:from-[#6bb3ff] hover:to-[#3b82f6]"
            >
              REQUEST DEMO
            </button>
            <a
              href="#"
              className="flex w-fit items-center gap-1 text-xs font-bold tracking-widest text-[#00c2cc] underline underline-offset-4 transition-colors duration-200 hover:text-white"
            >
              LEARN MORE &nbsp;→
            </a>
          </div>
        </div>

        {/* Right: laptop mockup */}
        <div className="relative z-10 flex w-full flex-1 items-center justify-center px-4 lg:-mr-16 lg:justify-end lg:px-0 xl:-mr-20">
          <img
            src={cloudScreen}
            alt="AML Dashboard mockup"
            className="w-full max-w-[600px] object-contain drop-shadow-2xl lg:max-w-[740px] xl:max-w-[820px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudBanking;
