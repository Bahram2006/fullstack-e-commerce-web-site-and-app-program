'use client';

import { useComplaintModal } from "@/store/useComplaintModal";
import { submitComplaint } from "@/app/actions/complaintAction";
import { X, Send } from "lucide-react";
import { useState } from "react";

export default function ComplaintModal() {
  const { isOpen, closeModal } = useComplaintModal();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; msg?: string | null }>({});

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({});

    const formData = new FormData(e.currentTarget);
    const result = await submitComplaint(formData);

    setLoading(false);
    if (result.success) {
      setStatus({ success: true, msg: "Hatyňyz şowly iberildi! Sag boluň." });
      setTimeout(() => {
        closeModal();
        setStatus({});
      }, 2000);
    } else {
      setStatus({ success: false, msg: result.error });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 font-sans animate-in fade-in duration-200">
      
      {/* Modal Esasy Gabygy */}
      <div className="bg-white w-full max-w-[500px] rounded-sm shadow-2xl border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Üst zolak (Başlyk we Ýapmak düwmesi) */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-[12px] font-black text-gray-950 uppercase tracking-wider">Nägilelik bildirmek</h2>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
            <X size={16} />
          </button>
        </div>

        {/* Form Meýdançasy */}
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4 text-xs">
          
          {status.msg && (
            <div className={`p-2.5 rounded-sm font-semibold border ${status.success ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-[#cc0000] border-red-200'}`}>
              {status.msg}
            </div>
          )}

          {/* Adyňyz */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-gray-800">Adyňyz <span className="text-[#cc0000]">*</span></label>
            <input type="text" name="name" required className="w-full border border-gray-300 p-2 outline-none rounded-sm bg-white focus:border-gray-500 text-gray-900" />
          </div>

          {/* Telefon / E-poçta */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-gray-800">Telefon belgiňiz ýa-da e-poçtaňyz <span className="text-[#cc0000]">*</span></label>
            <input type="text" name="contact" required className="w-full border border-gray-300 p-2 outline-none rounded-sm bg-white focus:border-gray-500 text-gray-900" />
            <span className="text-[10px] text-gray-400 -mt-0.5">Size jogap bermegimiz üçin meýdançany dolduryň.</span>
          </div>

          {/* Hatyňyz */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-gray-800">Hatyňyz <span className="text-[#cc0000]">*</span></label>
            <textarea name="message" required rows={5} className="w-full border border-gray-300 p-2 outline-none rounded-sm bg-white focus:border-gray-500 text-gray-900 resize-none" />
          </div>

          {/* Gyzyl Iberiş Düwmesi */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#cc0000] hover:bg-[#b30000] text-white font-black py-2.5 uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm shadow transition active:scale-99 disabled:bg-gray-400 cursor-pointer"
          >
            <Send size={12} />
            <span>{loading ? "Garaşyň..." : "Ugrat"}</span>
          </button>

        </form>
      </div>
    </div>
  );
}
