import React from 'react';
import insightIcon from '../assets/Frame_54.png';

const articles = [
  {
    category: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    category: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
];

const Insights = () => {
  return (
    <section className="relative overflow-hidden bg-[#05070a] py-20 text-white">
      {/* Radial glow — center-left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-[#1a4a8a]/25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-start gap-14 px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-8">
        {/* Left: heading + button */}
        <div className="w-full shrink-0 pt-2 lg:max-w-[400px]">
          <h2 className="mb-8 text-3xl font-semibold leading-snug xl:text-[2rem]">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button
            type="button"
            className="rounded-full border border-white/35 px-8 py-3 text-sm font-semibold tracking-widest transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            INSIGHTS
          </button>
        </div>

        {/* Right: cards — narrower column */}
        <div className="flex w-full max-w-[560px] flex-col gap-4">
          {/* Featured card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a1422] sm:flex-row">
            <div className="flex shrink-0 items-center justify-center bg-[#0c1a33] p-6 sm:w-[180px]">
              <img
                src={insightIcon}
                alt=""
                className="h-auto w-full max-w-[120px] object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-5 p-5 lg:p-6">
              <div>
                <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#00c2cc]">
                  GETTING STARTED
                </p>
                <h3 className="mb-3 text-2xl font-semibold leading-snug text-white ">
                  How to transition from a traditional to a digital bank
                </h3>
                <p className="text-xs text-[#7a8fa8]">
                  David Grohl &nbsp;&nbsp; 17/08/24
                </p>
              </div>
              <button
                type="button"
                className="w-full rounded-full border border-white/25 py-2.5 text-xs font-semibold tracking-widest transition-all duration-200 hover:border-white/50"
              >
                READ MORE
              </button>
            </div>
          </div>

          {/* Two smaller cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#0a1422] p-6 lg:p-7"
              >
                <div>
                  <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#00c2cc]">
                    {article.category}
                  </p>
                  <h3 className="mb-3  font-semibold text-2xl leading-snug text-white">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#7a8fa8]">
                    {article.author} &nbsp;&nbsp; {article.date}
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-full border border-white/25 py-2.5 text-xs font-semibold tracking-widest transition-all duration-200 hover:border-white/50"
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>

          {/* Read all link */}
          <div className="mt-1 flex justify-end">
            <a
              href="#"
              className="flex items-center gap-1 text-xs font-bold tracking-widest text-[#00c2cc] underline underline-offset-4 transition-colors duration-200 hover:text-white"
            >
              READ ALL INSIGHTS &nbsp;→
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
