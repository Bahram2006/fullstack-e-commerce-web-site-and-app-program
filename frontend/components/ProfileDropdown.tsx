'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { User, LogIn } from 'lucide-react';

export default function ProfileDropdown() {
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

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Siziň Header dizaýnyňyzdaky hakyky profil ikony we üstündäki gyzyl nokat (X däl, bildiriş belgisi) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-colors hover:text-white hover:bg-white/10 cursor-pointer outline-none select-none"
        aria-label="Profil menýusy"
      >
        <User className="h-5 w-5" strokeWidth={1.7} />
        {/* Suratdaky ýaly sag ýokarky kiçijik gyzyl tegelek nokat */}
        <span className="absolute top-0 right-0 flex h-2 w-2 rounded-full bg-red-600 border border-[#1a1a1a]" />
      </button>

      {/* Suratyňyz bilen 100% birmeňzeş ak guty listi (Hasabyma gir) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[180px] bg-white rounded shadow-2xl border border-gray-100 z-50 py-1 font-sans animate-in fade-in slide-in-from-top-1 duration-150">
          <Link
            href="/auth"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-bold text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
          >
            {/* Hakyky 'Hasabyma gir' gapy we peýkam ikony */}
            <LogIn size={15} className="text-gray-400 group-hover:text-red-600 shrink-0" />
            <span>Hasabyma gir</span>
          </Link>
        </div>
      )}
    </div>
  );
}
