'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/about' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'SERVICES', path: '/services' },
    { name: 'EXPERIENCE', path: '/experience' },
  ]

  const glassmorphismClasses = 'bg-[#101630]/80 backdrop-blur-md'

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        {
          [glassmorphismClasses]: (isScrolled && !isMenuOpen) || isMenuOpen,
          'md:bg-transparent': !isScrolled && !isMenuOpen
        }
      )}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <nav className="h-[72px] flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            FS
          </Link>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          <div className={clsx(
            'absolute left-0 right-0 top-[72px] md:relative md:top-0',
            { [glassmorphismClasses]: isMenuOpen },
            'md:bg-transparent',
            'shadow-[0_4px_6px_-1px_rgba(255,255,255,0.05)] md:shadow-none',
            { 'hidden md:block': !isMenuOpen }
          )}>
            <ul className={clsx(
              'flex flex-col md:flex-row items-center',
              'space-y-4 md:space-y-0 md:space-x-8',
              'py-4 md:py-0'
            )}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={clsx(
                      'text-white text-[14px] font-medium hover:text-[#67c6e3] transition duration-300',
                      { 'text-[#67c6e3]': pathname === item.path }
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="md:ml-0">
                <Link 
                  href="/contact" 
                  className="contact-button text-white text-[14px] font-medium px-6 py-[10px] rounded hover:opacity-90 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
