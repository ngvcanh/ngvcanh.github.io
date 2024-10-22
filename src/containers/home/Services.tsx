export default function Services() {
  return (
    <section className="py-32">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white text-center mb-16">
          SERVICES
        </h2>

        <div className="flex flex-col gap-8">
          {/* First Row */}
          <div className="flex gap-8">
            <div className="w-1/2 bg-[#101630] rounded-lg p-12 border-[10px] border-[#4E85F0]/40 shadow-[0_0_20px_0_rgba(78,133,240,0.42)]">
              <div className="text-[#4E85F0] mb-8">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl text-white font-semibold mb-4">Video Editing</h3>
              <p className="text-[#848484] text-base leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="w-1/2 bg-[#101630] rounded-lg p-12 border-[10px] border-[#4E85F0]/40 shadow-[0_0_20px_0_rgba(78,133,240,0.12)]">
              <div className="text-[#4E85F0] mb-8">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18H12.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl text-white font-semibold mb-4">Mobile App Development</h3>
              <p className="text-[#848484] text-base leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-8">
            <div className="w-1/2 bg-[#101630] rounded-lg p-12 border-[10px] border-[#4E85F0]/40 shadow-[0_0_20px_0_rgba(78,133,240,0.12)]">
              <div className="text-[#4E85F0] mb-8">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 21H16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17V21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl text-white font-semibold mb-4">Desktop App Development</h3>
              <p className="text-[#848484] text-base leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="w-1/2 bg-[#101630] rounded-lg p-12 border-[10px] border-[#4E85F0]/40 shadow-[0_0_20px_0_rgba(78,133,240,0.12)]">
              <div className="text-[#4E85F0] mb-8">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl text-white font-semibold mb-4">Programming Languages</h3>
              <p className="text-[#848484] text-base leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}