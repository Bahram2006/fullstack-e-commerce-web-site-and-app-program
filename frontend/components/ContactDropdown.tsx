'use client';

import { useState, useRef, useEffect } from 'react';
import { Phone, Smartphone, Wrench, Mail, ChevronDown } from 'lucide-react';

export default function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Daşyna basylanda awtomatiki ýapylmak logikasy
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
      {/* Esasy basylýan tekst we modern Chevron ikony */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[11px] text-white/45 tracking-wide hover:text-white transition-colors flex items-center gap-1 cursor-pointer outline-none select-none"
      >
        <span>Biziň bilen habarlaşyň…</span>
        <ChevronDown 
          size={10} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Aşak açylýan list (Lucide React modern ikonlary bilen) */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-[240px] rounded bg-white shadow-2xl border border-gray-200 z-50 py-1 font-sans">
          <ul className="flex flex-col text-xs text-gray-800">
            
            {/* Telefon belgi 1 */}
            <li className="hover:bg-gray-50 transition-colors">
              <a href="tel:+99312492343" className="flex items-center gap-3 px-3 py-2 border-b border-gray-100">
                <Phone size={14} className="text-gray-400 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">+993 (12) 49-23-43</span>
                  <span className="text-[10px] text-gray-400 block -mt-0.5">(Dükan)</span>
                </div>
              </a>
            </li>

            {/* Telefon belgi 2 */}
            <li className="hover:bg-gray-50 transition-colors">
              <a href="tel:+99312261369" className="flex items-center gap-3 px-3 py-2 border-b border-gray-100">
                <Phone size={14} className="text-gray-400 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">+993 (12) 26-13-69</span>
                  <span className="text-[10px] text-gray-400 block -mt-0.5">(Dükan)</span>
                </div>
              </a>
            </li>

            {/* Telefon belgi 3 */}
            <li className="hover:bg-gray-50 transition-colors">
              <a href="tel:+99362708045" className="flex items-center gap-3 px-3 py-2 border-b border-gray-100">
                <Smartphone size={14} className="text-gray-400 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">+993 (62) 70-80-45</span>
                  <span className="text-[10px] text-gray-400 block -mt-0.5">(Operator)</span>
                </div>
              </a>
            </li>

            {/* Telefon belgi 4 */}
            <li className="hover:bg-gray-50 transition-colors">
              <a href="tel:+99362233759" className="flex items-center gap-3 px-3 py-2 border-b border-gray-100">
                <Wrench size={14} className="text-gray-400 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">+993 (62) 23-37-59</span>
                  <span className="text-[10px] text-gray-400 block -mt-0.5">(Tehniki hyzmat)</span>
                </div>
              </a>
            </li>

            {/* E-poçta salgysy */}
            <li className="hover:bg-gray-50 transition-colors">
              <a href="mailto:sumbar.computer@gmail.com" className="flex items-center gap-3 px-3 py-2 text-red-600 font-semibold">
                <Mail size={14} className="text-red-500 shrink-0" />
                <span className="text-[11px] truncate">sumbar.computer@gmail.com</span>
              </a>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
}
