'use client';

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Salam! Men Sumbar Computer-iň emeli intellekt kömekçisi. Size nähili kömek edip bilerin?" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      // Ýokarda ýazan howpsuz backend API-ymyza sorag iberýäris
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "ai", text: "Ýalňyşlyk ýüze çykdy, täzeden ýazyň." }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Çat açýan uly gyzyl töwerek düwme */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#cc0000] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#b30000] transition active:scale-95 cursor-pointer"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Janly Çat Gutusy */}
      {isOpen && (
        <div className="w-[340px] h-[440px] bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Üst zolak */}
          <div className="bg-[#1a1a1a] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider">Sumbar AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white cursor-pointer">
              <X size={16} />
            </button>
          </div>

          {/* Hatlaryň ýazylýan meýdançasy */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50/50 text-xs">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-2.5 rounded-sm shadow-sm font-medium ${msg.role === "user" ? "bg-[#cc0000] text-white" : "bg-white text-gray-800 border border-gray-100"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-gray-400 italic text-[11px] animate-pulse">AI ýazýar...</div>}
          </div>

          {/* Input Zolagy */}
          <form onSubmit={handleSend} className="p-2 border-t border-gray-100 flex items-center bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Soragyňyzy ýazyň..."
              className="flex-1 px-3 py-2 text-xs outline-none text-gray-800"
            />
            <button type="submit" className="bg-[#cc0000] p-2 text-white rounded-sm hover:bg-[#b30000] cursor-pointer">
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
