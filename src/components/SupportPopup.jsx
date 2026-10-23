import React, { useState } from 'react';
import { Sparkles, X, MessageSquare, Phone, Send, CheckCircle2, Bot } from 'lucide-react';

export default function SupportPopup({ isOpen, onClose, onOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'AI Discovery Call (Company)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <>
      {/* Floating Pill (Visible when modal is closed) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#F6A305] text-black font-extrabold text-xs shadow-2xl shadow-[#F6A305]/30 hover:bg-[#e09404] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          aria-label="Book AI Discovery"
        >
          <Sparkles className="w-4 h-4 animate-spin text-black" style={{ animationDuration: '3s' }} />
          <span>Book AI Discovery</span>
        </button>
      )}

      {/* Floating Support Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] bg-[#121212] border border-white/20 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-[#1c1705] via-[#121212] to-black border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#F6A305] flex items-center justify-center text-black">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">DigiTran AI Discovery</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Practice Lead Online
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#F6A305] mx-auto mb-3" />
                <h5 className="text-base font-bold text-white mb-1">Discovery Slot Requested!</h5>
                <p className="text-xs text-gray-300">Our senior AI practice lead will confirm your meeting within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <p className="text-xs text-gray-300 mb-2 leading-relaxed">
                  Have an AI skill gap or a repetitive workflow to automate? Get a 20-minute practical evaluation:
                </p>

                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F6A305]"
                />

                <input
                  type="email"
                  placeholder="Work / Institutional Email *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F6A305]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number (with Country Code) *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F6A305]"
                />

                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c1c1c] border border-white/15 text-xs text-white focus:outline-none focus:border-[#F6A305]"
                >
                  <option value="AI Discovery Call (Company)">Book AI Discovery Call (For Company)</option>
                  <option value="AI Program for Institution (College)">Request AI Program (For College)</option>
                  <option value="Executive 90-Day Strategy">Executive 90-Day Strategy Workshop</option>
                  <option value="Custom Workflow Automation PoC">Custom Automation PoC (2–6 Wks)</option>
                </select>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#F6A305] text-black font-extrabold text-xs rounded-xl hover:bg-[#e09404] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F6A305]/20 mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request 20-Min Discovery Call</span>
                </button>
              </form>
            )}
          </div>

        </div>
      )}
    </>
  );
}
