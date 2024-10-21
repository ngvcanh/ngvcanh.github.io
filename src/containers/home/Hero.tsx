import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-[100dvw] flex items-center overflow-hidden">
      {/* Detailed Skeleton SVG Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg width="100dvw" height="100dvh" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Frontend */}
          <rect x="100" y="100" width="400" height="200" rx="20" fill="none" stroke="#4E85F0" strokeWidth="2"/>
          <text x="300" y="180" fontFamily="monospace" fontSize="24" fill="#4E85F0" textAnchor="middle">{'<Frontend />'}</text>
          <circle cx="160" cy="250" r="30" fill="#E3F2FD22" stroke="#4E85F0" strokeWidth="2"/>
          <text x="160" y="255" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">React</text>
          <rect x="250" y="230" width="60" height="40" fill="#E8F5E922" stroke="#4E85F0" strokeWidth="2"/>
          <text x="280" y="255" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">Next</text>
          <polygon points="420,230 470,270 370,270" fill="#FFF3E022" stroke="#4E85F0" strokeWidth="2"/>
          <text x="420" y="255" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">Remix</text>

          {/* Backend */}
          <rect x="1420" y="100" width="400" height="200" rx="20" fill="none" stroke="#4E85F0" strokeWidth="2"/>
          <text x="1620" y="180" fontFamily="monospace" fontSize="24" fill="#4E85F0" textAnchor="middle">Backend()</text>
          <rect x="1500" y="230" width="60" height="40" fill="none" stroke="#4E85F0" strokeWidth="2"/> {/* Node.js */}
          <text x="1530" y="255" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">Node</text>
          <rect x="1580" y="230" width="60" height="40" fill="none" stroke="#4E85F0" strokeWidth="2"/> {/* Python */}
          <text x="1610" y="255" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">Python</text>
          <rect x="1660" y="230" width="60" height="40" fill="none" stroke="#4E85F0" strokeWidth="2"/> {/* Java */}
          <text x="1690" y="255" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">Java</text>

          {/* Database */}
          <circle cx="960" cy="800" r="150" fill="none" stroke="#4E85F0" strokeWidth="2"/>
          <text x="960" y="810" fontFamily="monospace" fontSize="24" fill="#4E85F0" textAnchor="middle">Database</text>
          <rect x="860" y="740" width="80" height="40" fill="none" stroke="#4E85F0" strokeWidth="2"/> {/* SQL */}
          <text x="900" y="765" fontFamily="monospace" fontSize="14" fill="#4E85F0" textAnchor="middle">SQL</text>
          <circle cx="1020" cy="740" r="25" fill="none" stroke="#4E85F0" strokeWidth="2"/> {/* MongoDB */}
          <text x="1020" y="745" fontFamily="monospace" fontSize="10" fill="#4E85F0" textAnchor="middle">Mongo</text>

          {/* API */}
          <rect x="860" y="400" width="200" height="100" rx="10" fill="none" stroke="#4E85F0" strokeWidth="2"/>
          <text x="960" y="455" fontFamily="monospace" fontSize="24" fill="#4E85F0" textAnchor="middle">API</text>

          {/* Connecting Lines */}
          <path
            d="M500 200 L900 200 L900 400"
            fill="none"
            stroke="#4E85F0"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeDasharray="5,5"
          />
          <path
            d="M1420 200 L1020 200 L1020 400"
            fill="none"
            stroke="#4E85F0"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeDasharray="5,5"
          />
          <path d="M960 500 L960 650" stroke="#4E85F0" strokeWidth="2" strokeDasharray="5,5"/>

          {/* Additional Elements */}
          <text x="100" y="500" fontFamily="monospace" fontSize="80" fill="#4E85F0" opacity="0.3">{ '{' }</text>
          <text x="1800" y="700" fontFamily="monospace" fontSize="80" fill="#4E85F0" opacity="0.3">{ '}' }</text>
          <text x="300" y="1000" fontFamily="monospace" fontSize="80" fill="#4E85F0" opacity="0.3">( )</text>
          <text x="1600" y="950" fontFamily="monospace" fontSize="80" fill="#4E85F0" opacity="0.3">[ ]</text>
          
          {/* Code Snippets */}
          <text x="150" y="600" fontFamily="monospace" fontSize="14" opacity="0.5">
              <tspan fill="#FF5733">const</tspan>
              <tspan fill="#4E85F0"> app </tspan>
              <tspan fill="#33FF57">=</tspan>
              <tspan fill="#4E85F0"> express</tspan>
              <tspan fill="#33FF57">();</tspan>
          </text>
          <text x="1600" y="400" fontFamily="monospace" fontSize="14" opacity="0.5">
            <tspan fill="#FF5733">import</tspan>
            <tspan fill="#4E85F0"> React </tspan>
            <tspan fill="#FF5733">from</tspan>
            <tspan fill="#33FF57"> &apos;react&apos;</tspan>
            <tspan fill="#33FF57">;</tspan>
          </text>
          <text x="400" y="900" fontFamily="monospace" fontSize="14" opacity="0.5">
            <tspan x="400" dy="0" fill="#FF5733">SELECT</tspan>
            <tspan fill="#4E85F0"> name, </tspan>
            <tspan fill="#FF5733">COUNT</tspan>
            <tspan fill="#4E85F0">(</tspan>
            <tspan fill="#33FF57">*</tspan>
            <tspan fill="#4E85F0">) AS projects</tspan>
            <tspan x="400" dy="20" fill="#FF5733">FROM</tspan>
            <tspan fill="#4E85F0"> developers </tspan>
            <tspan x="400" dy="20" fill="#FF5733">JOIN</tspan>
            <tspan fill="#4E85F0"> projects ON developers.id = projects.developer_id</tspan>
            <tspan x="400" dy="20" fill="#FF5733">GROUP BY</tspan>
            <tspan fill="#4E85F0"> name </tspan>
            <tspan x="400" dy="20" fill="#FF5733">HAVING</tspan>
            <tspan fill="#4E85F0"> COUNT(*) </tspan>
            <tspan fill="#FF5733">&gt;</tspan>
            <tspan fill="#4E85F0"> 3;</tspan>
          </text>
          <text x="1400" y="800" fontFamily="monospace" fontSize="14" opacity="0.5">
            <tspan fill="#FF5733">async</tspan>
            <tspan fill="#4E85F0"> function </tspan>
            <tspan fill="#33FF57">getData</tspan>
            <tspan fill="#4E85F0">()</tspan>
            <tspan fill="#FF5733"> {'{}'}</tspan>
          </text>
        
          <rect x="400" y="600" width="300" height="150" rx="20" fill="none" stroke="#4E85F0" strokeWidth="2"/>
          <text x="550" y="650" fontFamily="monospace" fontSize="24" fill="#4E85F0" textAnchor="middle">DevOps</text>
          <circle cx="460" cy="700" r="20" fill="none" stroke="#4E85F0" strokeWidth="2"/> {/* Docker */}
          <text x="460" y="705" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">Docker</text>
          <rect x="520" y="680" width="60" height="40" fill="none" stroke="#4E85F0" strokeWidth="2"/> {/* Kubernetes */}
          <text x="550" y="705" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">K8s</text>
          <polygon points="650,680 680,720 620,720" fill="none" stroke="#4E85F0" strokeWidth="2"/>
          <text x="650" y="705" fontFamily="monospace" fontSize="12" fill="#4E85F0" textAnchor="middle">AWS</text>

          <path d="M470 300 L470 600" stroke="#4E85F0" strokeWidth="2" strokeDasharray="5,5"/>
          <path d="M1490 300 L1490 620 L700 620" fill="none" stroke="#4E85F0" strokeWidth="2" strokeLinejoin="round" strokeDasharray="5,5"/>
          <path d="M860 480 L760 480 L760 700 L700 700" fill="none" strokeLinejoin="round" stroke="#4E85F0" strokeWidth="2" strokeDasharray="5,5"/>
        </svg>
      </div>
      
      <div className="w-full max-w-[1140px] mx-auto px-4 z-10">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[80px] uppercase">
            <span className="block">I&apos;m a</span>
            <span className="block mt-4">Full Stack</span>
            <span className="block mt-4">Software</span>
            <span className="block mt-4 whitespace-nowrap">
              <span> Developer</span>
              <span className="inline-block w-3 h-3 bg-cyan-300 ml-2"></span>
            </span>
          </h1>
          <button className="bg-gradient-to-r from-[#4E85F0] to-[#6464ED] text-white text-sm font-medium px-8 py-3 rounded-md hover:opacity-90 transition duration-300">
            Previous Projects
          </button>
        </div>
      </div>
    </section>
  );
}
