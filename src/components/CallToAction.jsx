import React from 'react';

const CallToAction = () => {
  return (
    <section
      className="px-8 py-16 lg:px-20 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f2fc 55%, #d4e6f8 100%)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#0a1018] text-white shadow-xl">
          {/* N7 outline watermark — right side behind buttons */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-[55%] overflow-hidden"
            aria-hidden="true"
          >
            <svg
              className="absolute right-[-6%] top-1/2 -translate-y-1/2 select-none"
              style={{ width: 'clamp(14rem, 36vw, 26rem)', height: 'auto' }}
              viewBox="0 0 400 280"
              preserveAspectRatio="xMaxYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cta-n7-stroke" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(60, 120, 200, 0.4)" />
                  <stop offset="100%" stopColor="rgba(10, 16, 24, 0.12)" />
                </linearGradient>
              </defs>
              <text
                x="400"
                y="210"
                textAnchor="end"
                fill="none"
                stroke="url(#cta-n7-stroke)"
                strokeWidth="1.5"
                fontSize="240"
                fontWeight="700"
                fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                letterSpacing="-6"
              >
                N7
              </text>
            </svg>
          </div>

          <div className="relative z-10 flex min-h-[240px] flex-col items-start justify-center gap-10 px-10 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-16 lg:py-16">
            {/* Left: text */}
            <div className="max-w-[520px]">
              <h2 className="mb-4 text-3xl font-bold leading-[1.2] text-white xl:text-4xl">
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>
              <p className="max-w-[440px] text-sm leading-relaxed text-gray-400">
                N7 helps your financial institution improve the client experience,
                automate and optimize procedures, simplify banking operations
              </p>
            </div>

            {/* Right: buttons */}
            <div className="flex shrink-0 flex-wrap items-center gap-4">
              <button
                type="button"
                className="rounded-md border border-white/40 px-8 py-3 text-sm font-semibold tracking-widest transition-all duration-300 hover:border-white hover:bg-white/5"
              >
                CONTACT US
              </button>
              <button
                type="button"
                className="rounded-md bg-gradient-to-r from-[#4da3ff] to-[#2563eb] px-8 py-3 text-sm font-semibold tracking-widest shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-[#6bb3ff] hover:to-[#3b82f6]"
              >
                REQUEST DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
