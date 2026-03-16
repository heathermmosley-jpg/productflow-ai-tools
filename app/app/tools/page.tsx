"use client";
import { useState } from 'react';
import { Zap, Target, DollarSign, Lightbulb, ArrowRight, Loader2 } from 'lucide-react';

export default function SideHustleGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateIdea = () => {
    setLoading(true);
    // Simulate AI Generation for the UI
    setTimeout(() => {
      setResult({
        title: "AI-Powered Real Estate Assistant",
        niche: "Independent Realtors",
        monetization: "$49/month Subscription",
        steps: ["Build a lead-gen scraper", "Integrate GPT-4 for automated follow-ups", "Launch on Product Hunt"]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-4">Side Hustle Generator</h1>
        <p className="text-slate-500 text-lg">Tell the AI what you're good at, and we'll build a business blueprint for you.</p>
      </div>

      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm mb-12">
        <div className="space-y-4">
          <label className="block text-sm font-bold text-slate-700">What are your top 3 skills?</label>
          <input 
            type="text" 
            placeholder="e.g. Design, Sales, Writing" 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          <button 
            onClick={generateIdea}
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 className="animate-spin" /> Analyzing Markets...</> : <><Zap size={20} /> Generate My Blueprint</>}
          </button>
        </div>
      </div>

      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8">
            <div className="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">
              <Lightbulb size={14} /> The Concept
            </div>
            <h2 className="text-3xl font-bold mb-6">{result.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="p-3 bg-white/10 rounded-xl h-fit"><Target className="text-blue-400" /></div>
                <div>
                  <p className="text-slate-400 text-sm">Target Niche</p>
                  <p className="font-bold">{result.niche}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-white/10 rounded-xl h-fit"><DollarSign className="text-emerald-400" /></div>
                <div>
                  <p className="text-slate-400 text-sm">Revenue Model</p>
                  <p className="font-bold">{result.monetization}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
                  }
            
