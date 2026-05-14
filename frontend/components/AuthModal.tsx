"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [phone, setPhone] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, "");
    setPhone(val);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSuccess?.();
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center
                 bg-black/50 backdrop-blur-md
                 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md mx-4 bg-white rounded-xl shadow-2xl
                   animate-in zoom-in-95 slide-in-from-bottom-2 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-black tracking-widest text-gray-900 uppercase">
            Hasabyma gir
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded
                       text-gray-400 hover:text-gray-700 hover:bg-gray-100
                       transition-colors"
            aria-label="Ýap"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Telefon belgiňiz <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-lg border-2 border-red-500 overflow-hidden focus-within:border-red-600 transition-colors">
              <div className="flex items-center px-3.5 bg-gray-50 border-r border-gray-200 flex-shrink-0">
                <span className="text-sm font-semibold text-gray-700 select-none">+993</span>
              </div>
              <input
                ref={inputRef}
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={handlePhone}
                placeholder="XXXXXXXX"
                maxLength={8}
                className="flex-1 px-3.5 py-3 text-sm text-gray-900
                           placeholder-gray-300 bg-white outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={phone.length < 8}
            className="w-full py-3 bg-red-500 hover:bg-red-600
                       disabled:opacity-40 disabled:cursor-not-allowed
                       text-white text-sm font-bold tracking-wide
                       rounded-lg transition-all duration-150 active:scale-[0.98]"
          >
            Dowam et
          </button>
        </form>
      </div>
    </div>
  );
}