"use client";
import Link from 'next/link'; //  Link = snabbare navigering i Next.js

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full overflow-visible">
      {/* Bakgrunds-blur */}
      <div className="absolute inset-0 bg-[#FAFAFA]/60 backdrop-blur-md pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-4">
        <div className="hidden lg:flex items-center justify-center w-full">
          <div className="flex items-center gap-2">
            
            {/* Tjänster Dropdown */}
            <div className="relative group"> 
              <button className="font-display uppercase tracking-wider text-xs px-4 py-2 inline-flex items-center gap-1 text-[#1E2A4A] hover:opacity-70 transition-all">
                Tjänster
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {/* Dropdown-menyn - Visas nu när man hovrar över 'group' */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                <Link className="block px-4 py-2.5 text-xs uppercase hover:bg-gray-50 rounded-xl" href="/tjanster">Alla tjänster</Link>
                <div className="border-t my-2" />
                <Link className="block px-4 py-2.5 text-xs uppercase hover:bg-gray-50 rounded-xl" href="/tjanster/foretagswebbsidor">Företagswebbsidor</Link>
                <Link className="block px-4 py-2.5 text-xs uppercase hover:bg-gray-50 rounded-xl" href="/tjanster/support-drift">Support & Drift</Link>
              </div>
            </div>

            {/* Navigationslänkar */}
            {['Om Oss', 'Portfolio', 'Priser', 'Kontakt'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="font-display uppercase tracking-wider text-xs px-4 py-2 text-[#1E2A4A] hover:opacity-70 transition-all"
              >
                {item}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
}