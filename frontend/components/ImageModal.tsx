"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {

  // Escape düwmesi bilen ýapylsyn
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    // Modal açykka scroll ýapylsyn
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center
                 bg-black/70 backdrop-blur-sm
                 animate-in fade-in duration-200"
      onClick={onClose}           // Gara ýere basylanda ýapylsyn
    >
      {/* Modal gutusy */}
      <div
        className="relative max-w-3xl w-[90vw] max-h-[90vh]
                   bg-white rounded-2xl overflow-hidden shadow-2xl
                   animate-in zoom-in-90 duration-200"
        onClick={(e) => e.stopPropagation()}  // Surat basylanda ýapylmasyn
      >

        {/* Ýapma düwmesi */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10
                     w-8 h-8 flex items-center justify-center
                     bg-white/90 hover:bg-red-500 hover:text-white
                     text-gray-600 rounded-full shadow
                     transition-all duration-150"
          aria-label="Ýap"
        >
          <X size={16} strokeWidth={2} />
        </button>

        {/* Surat */}
        <div className="relative w-full h-[80vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-6"
            sizes="90vw"
            priority
          />
        </div>

        {/* Aşaky ýazgy */}
        <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
          <p className="text-sm text-gray-600 text-center truncate">{alt}</p>
        </div>
      </div>
    </div>
  );
}