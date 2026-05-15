'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Daşyna basylanda menýunyň awtomatiki ýapylmagy üçin (Senior standarty)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = [
    { label: "Brendler", href: "#" },
    { label: "Galereýa", href: "#" },
    { label: "Bal toplamak ulgamy", href: "#" },
    { label: "Gizlinlik syýasaty", href: "#" }
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Siziň dizaýnyňyza we suratynyza laýyk düwme */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[11px] text-white/55 transition-colors hover:text-white flex items-center gap-1 cursor-pointer outline-none select-none px-3 py-1 font-sans"
      >
        <span>Has giňişleýin</span>
        <ChevronDown 
          size={10} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Suratyňyz bilen 100% birmeňzeş ak guty listi */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-[180px] bg-white rounded shadow-2xl border border-gray-100 z-50 py-1 animate-in fade-in slide-in-from-top-1 duration-150">
          <ul className="flex flex-col text-xs text-gray-700">
            {links.map((link, idx) => (
              <li key={idx} className="hover:bg-gray-50 transition-colors">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-[12px] text-gray-800 hover:text-red-600 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
