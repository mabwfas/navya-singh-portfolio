import { ContainerScroll } from './ui/container-scroll-animation';
import { Globe, Code2, Layers, Rocket } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-indigo-500/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-500/[0.02] blur-[100px] pointer-events-none" />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            {/* Mini badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
              <Rocket size={12} className="text-indigo-400" />
              <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase">
                Project Showcase
              </span>
            </div>

            <h2 className="text-4xl md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Building Apps That{' '}
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Users Love
              </span>
            </h2>

            <p className="text-zinc-500 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              From concept to production — pixel-perfect mobile apps and Shopify stores
              engineered for performance, delight, and scale.
            </p>

            {/* Mini stats row */}
            <div className="flex items-center gap-6 md:gap-10">
              {[
                { icon: Globe, label: '40+ Projects', color: '#6366f1' },
                { icon: Code2, label: '5+ Years', color: '#a855f7' },
                { icon: Layers, label: '3M+ Users', color: '#ec4899' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon size={14} style={{ color: item.color }} />
                  <span className="text-xs md:text-sm font-medium text-zinc-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      >
        {/* Dashboard mockup inside the 3D card */}
        <div className="relative h-full w-full bg-[#0a0a0a] rounded-xl overflow-hidden">
          {/* Top browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/[0.04]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-zinc-500 font-mono">
                <span className="text-green-400/60">https://</span>
                portfolio.shreyansh.dev
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 md:p-6 grid grid-cols-12 gap-3 md:gap-4 h-[calc(100%-44px)] overflow-hidden">
            {/* Sidebar */}
            <div className="col-span-3 hidden md:flex flex-col gap-3">
              <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 p-4 flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/30 flex items-center justify-center mb-3">
                  <Globe size={16} className="text-indigo-400" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">ShopKart</div>
                <div className="text-[10px] text-zinc-500 font-mono">v3.2.1 • Live</div>
              </div>
              {['DevBoard', 'PortfolioForge', 'CloudNotes', 'AnalyticsHQ'].map((app, i) => (
                <div
                  key={app}
                  className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="text-xs text-zinc-400">{app}</div>
                  <div className="text-[10px] text-zinc-600 mt-0.5 font-mono">
                    {['Active', 'Beta', 'Production', 'Staging'][i]}
                  </div>
                </div>
              ))}
            </div>

            {/* Main content area */}
            <div className="col-span-12 md:col-span-9 flex flex-col gap-3 md:gap-4">
              {/* Top metrics row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {[
                  { label: 'Projects', value: '40+', change: '+8 this year', color: '#6366f1' },
                  { label: 'Active Users', value: '3M+', change: '+34.2%', color: '#10b981' },
                  { label: 'GMV Processed', value: '₹500Cr+', change: '+45.1%', color: '#f59e0b' },
                  { label: 'Client Rating', value: '5.0★', change: '100%', color: '#ec4899' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-3 md:p-4"
                  >
                    <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-1">
                      {metric.label}
                    </div>
                    <div className="text-lg md:text-xl font-bold text-white">{metric.value}</div>
                    <div className="text-[10px] font-semibold mt-1" style={{ color: metric.color }}>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 md:p-5 min-h-0">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-semibold text-white">User Growth</div>
                    <div className="text-[10px] text-zinc-500 font-mono">Last 12 months</div>
                  </div>
                  <div className="flex gap-1">
                    {['1M', '3M', '6M', '1Y'].map((period, i) => (
                      <button
                        key={period}
                        className={`text-[10px] px-2.5 py-1 rounded-md font-mono transition-colors ${
                          i === 3
                            ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/25'
                            : 'text-zinc-500 hover:text-zinc-400'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                {/* SVG Chart */}
                <svg className="w-full h-[60%] md:h-[70%]" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,100 C30,95 60,80 100,75 C140,70 170,85 200,60 C230,35 260,50 300,30 C340,10 370,20 400,5 L400,120 L0,120 Z"
                    fill="url(#chartGrad)"
                  />
                  <path
                    d="M0,100 C30,95 60,80 100,75 C140,70 170,85 200,60 C230,35 260,50 300,30 C340,10 370,20 400,5"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="5" r="3" fill="#6366f1">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
