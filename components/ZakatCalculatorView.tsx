import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calculator, Coins, ShieldCheck, AlertCircle, 
  HelpCircle, Copy, Check, Share2, Info, ChevronDown, ChevronUp, DollarSign
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ZakatCalculatorView: React.FC<{ setActiveTab: (tab: string) => void }> = ({ setActiveTab }) => {
  const { activeThemeConfig } = useApp();

  // Nisab configuration (Market price defaults in BDT per Bhori/Tola, editable)
  const [goldPricePerBhori, setGoldPricePerBhori] = useState<number>(125000); // ৳ per bhori
  const [silverPricePerBhori, setSilverPricePerBhori] = useState<number>(2000); // ৳ per bhori
  const [nisabStandard, setNisabStandard] = useState<'silver' | 'gold'>('silver'); // Silver is standard for mixed assets

  // Wealth Inputs (BDT)
  const [cashInHand, setCashInHand] = useState<number>(0);
  const [bankBalance, setBankBalance] = useState<number>(0);
  const [goldValue, setGoldValue] = useState<number>(0);
  const [silverValue, setSilverValue] = useState<number>(0);
  const [businessStock, setBusinessStock] = useState<number>(0);
  const [investments, setInvestments] = useState<number>(0);
  const [receivables, setReceivables] = useState<number>(0);

  // Liabilities / Debts (BDT)
  const [immediateDebts, setImmediateDebts] = useState<number>(0);
  const [unpaidBills, setUnpaidBills] = useState<number>(0);

  const [copied, setCopied] = useState(false);
  const [showQuranicRecipients, setShowQuranicRecipients] = useState(false);

  // Nisab Threshold calculation:
  // Silver Nisab: 52.5 Bhori (tola)
  // Gold Nisab: 7.5 Bhori (tola)
  const silverNisabThreshold = 52.5 * silverPricePerBhori;
  const goldNisabThreshold = 7.5 * goldPricePerBhori;
  const currentNisabThreshold = nisabStandard === 'silver' ? silverNisabThreshold : goldNisabThreshold;

  // Totals
  const totalAssets = cashInHand + bankBalance + goldValue + silverValue + businessStock + investments + receivables;
  const totalLiabilities = immediateDebts + unpaidBills;
  const netZakatableWealth = Math.max(0, totalAssets - totalLiabilities);
  const isNisabReached = netZakatableWealth >= currentNisabThreshold;
  const zakatPayable = isNisabReached ? Math.round(netZakatableWealth * 0.025) : 0;

  const handleCopySummary = () => {
    const text = `📊 স্মার্ট যাকাত হিসাব বিবরণী\n\nমোট যাকাতযোগ্য সম্পদ: ৳${netZakatableWealth.toLocaleString('bn-BD')}\nনিসাব থ্রেশহোল্ড (${nisabStandard === 'silver' ? 'রূপা ৫২.৫ ভরি' : 'স্বর্ণ ৭.৫ ভরি'}): ৳${currentNisabThreshold.toLocaleString('bn-BD')}\nনিসাব যোগ্যতা: ${isNisabReached ? 'যাকাত ফরজ হয়েছে' : 'নিসাব অতিক্রম করেনি'}\n\nপ্রদেয় যাকাত (২.৫%): ৳${zakatPayable.toLocaleString('bn-BD')}\n\n(আল-কুরআনুল কারীম অ্যাপ দ্বারা হিসাবকৃত)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 pt-2 pb-16"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveTab('home')} 
            className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 active:scale-95 transition-transform"
          >
            <ArrowLeft size={20} className="text-slate-600 dark:text-slate-300" />
          </button>
          <div>
            <h2 className="text-xl font-black tracking-tight text-slate-800 dark:text-slate-100">
              স্মার্ট যাকাত ক্যালকুলেটর
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
              সহীহ ইসলামী শরীয়াহ ও নিসাব ভিত্তিক সঠিক হিসাব
            </p>
          </div>
        </div>

        <button
          onClick={handleCopySummary}
          title="হিসাব কপি করুন"
          className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
        >
          {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
        </button>
      </div>

      {/* Result Display Banner */}
      <div 
        className="rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden space-y-4"
        style={{
          background: isNisabReached 
            ? `linear-gradient(135deg, ${activeThemeConfig.primaryColor}, #047857)`
            : 'linear-gradient(135deg, #475569, #334155)'
        }}
      >
        <div className="flex items-center justify-between relative z-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200 block mb-1">
              {isNisabReached ? 'যাকাত ফরজ হয়েছে (২.৫% প্রদেয়)' : 'নিসাব সীমার নিচে (যাকাত ফরজ নয়)'}
            </span>
            <h3 className="text-3xl font-black text-amber-300">
              ৳ {zakatPayable.toLocaleString('bn-BD')}
            </h3>
            <p className="text-xs text-white/80 font-bold mt-0.5">
              মোট প্রদেয় যাকাত (১/৪০ অংশ)
            </p>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
            <Calculator size={28} />
          </div>
        </div>

        {/* Breakdown chips */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 relative z-10 text-xs">
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">
            <span className="text-[10px] uppercase text-emerald-200 block font-bold">মোট যাকাতযোগ্য সম্পদ</span>
            <span className="font-black text-sm text-white">৳ {netZakatableWealth.toLocaleString('bn-BD')}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">
            <span className="text-[10px] uppercase text-emerald-200 block font-bold">নিসাব সীমা ({nisabStandard === 'silver' ? 'রূপা' : 'স্বর্ণ'})</span>
            <span className="font-black text-sm text-amber-300">৳ {currentNisabThreshold.toLocaleString('bn-BD')}</span>
          </div>
        </div>
      </div>

      {/* Nisab Configuration Accordion */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coins size={16} className="text-amber-500" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">
              নিসাব মাপকাঠি ও বর্তমান বাজারদর (৳)
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setNisabStandard('silver')}
            className={`p-3 rounded-xl text-left border transition-all ${
              nisabStandard === 'silver'
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-black'
                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold'
            }`}
          >
            <span className="text-[10px] uppercase block text-emerald-600">সবচেয়ে নিরাপদ (জমহুর উলামা)</span>
            <span className="text-xs">রূপার নিসাব (৫২.৫ ভরি)</span>
          </button>

          <button
            onClick={() => setNisabStandard('gold')}
            className={`p-3 rounded-xl text-left border transition-all ${
              nisabStandard === 'gold'
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-black'
                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold'
            }`}
          >
            <span className="text-[10px] uppercase block text-amber-600">শুধু স্বর্ণ থাকলে</span>
            <span className="text-xs">স্বর্ণের নিসাব (৭.৫ ভরি)</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1">রূপার দাম (প্রতি ভরি ৳)</label>
            <input
              type="number"
              value={silverPricePerBhori || ''}
              onChange={(e) => setSilverPricePerBhori(Number(e.target.value))}
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-black"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1">স্বর্ণের দাম (প্রতি ভরি ৳)</label>
            <input
              type="number"
              value={goldPricePerBhori || ''}
              onChange={(e) => setGoldPricePerBhori(Number(e.target.value))}
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-black"
            />
          </div>
        </div>
      </div>

      {/* Asset Inputs */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <h4 className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          ১. আপনার সম্পদসমূহ (টাকায় হিসাব করুন)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">নগদ টাকা (ক্যাশ)</label>
            <input
              type="number"
              placeholder="0"
              value={cashInHand || ''}
              onChange={(e) => setCashInHand(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">ব্যাংক ব্যালেন্স ও সঞ্চয়</label>
            <input
              type="number"
              placeholder="0"
              value={bankBalance || ''}
              onChange={(e) => setBankBalance(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">স্বর্ণের বাজারমূল্য (৳)</label>
            <input
              type="number"
              placeholder="0"
              value={goldValue || ''}
              onChange={(e) => setGoldValue(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">রূপার বাজারমূল্য (৳)</label>
            <input
              type="number"
              placeholder="0"
              value={silverValue || ''}
              onChange={(e) => setSilverValue(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">ব্যবসায়িক পণ্যের পাইকারি মূল্য</label>
            <input
              type="number"
              placeholder="0"
              value={businessStock || ''}
              onChange={(e) => setBusinessStock(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">শেয়ার, সঞ্চয়পত্র ও বিনিয়োগ</label>
            <input
              type="number"
              placeholder="0"
              value={investments || ''}
              onChange={(e) => setInvestments(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">পাওনা টাকা (যা পাওয়ার নিশ্চয়তা আছে)</label>
            <input
              type="number"
              placeholder="0"
              value={receivables || ''}
              onChange={(e) => setReceivables(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>
        </div>
      </div>

      {/* Liabilities Inputs */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <h4 className="text-xs font-black uppercase tracking-wider text-red-500">
          ২. বাদযোগ্য দেনা ও ঋণসমূহ (টাকায়)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">তাৎক্ষণিক পরিশোধযোগ্য ঋণ</label>
            <input
              type="number"
              placeholder="0"
              value={immediateDebts || ''}
              onChange={(e) => setImmediateDebts(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">চলতি বকেয়া বিল ও কর্মচারীদের বেতন</label>
            <input
              type="number"
              placeholder="0"
              value={unpaidBills || ''}
              onChange={(e) => setUnpaidBills(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>
        </div>
      </div>

      {/* 8 Quranic Recipients of Zakat Accordion */}
      <div className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 overflow-hidden">
        <button
          onClick={() => setShowQuranicRecipients(!showQuranicRecipients)}
          className="w-full p-5 flex items-center justify-between text-left font-black text-xs text-slate-800 dark:text-slate-200"
        >
          <div className="flex items-center gap-2">
            <Info size={16} className="text-emerald-600" />
            <span>যাকাত পাওয়ার পবিত্র ৮টি খাত (সূরা আত-তাওবা: ৬০)</span>
          </div>
          {showQuranicRecipients ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {showQuranicRecipients && (
          <div className="p-5 pt-0 space-y-2 text-xs border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400">
            <ol className="list-decimal list-inside space-y-1.5 font-medium leading-relaxed">
              <li><strong className="text-slate-800 dark:text-slate-200">ফকির:</strong> যার বেঁচে থাকার মতো ন্যূনতম সম্পদ নেই।</li>
              <li><strong className="text-slate-800 dark:text-slate-200">মিসকিন:</strong> যার কিছু সম্পদ আছে কিন্তু প্রয়োজনীয় চাহিদা মেটাতে পারে না।</li>
              <li><strong className="text-slate-800 dark:text-slate-200">যাকাত সংগ্রাহক ও বণ্টনকারী:</strong> ইসলামী প্রশাসনে নিযুক্ত কর্মী।</li>
              <li><strong className="text-slate-800 dark:text-slate-200">নওমুসলিম:</strong> ইসলামের প্রতি যাদের হৃদয় আকৃষ্ট করা প্রয়োজন।</li>
              <li><strong className="text-slate-800 dark:text-slate-200">দাস ও বন্দিমুক্তি:</strong> দাসত্ব বা অন্যায় বন্দিদশা থেকে মুক্ত করতে।</li>
              <li><strong className="text-slate-800 dark:text-slate-200">ঋণগ্রস্ত ব্যক্তি:</strong> যিনি ঋণ পরিশোধে সম্পূর্ণরূপে অপারগ।</li>
              <li><strong className="text-slate-800 dark:text-slate-200">আল্লাহর রাস্তায় (ফি সাবিলিল্লাহ):</strong> দ্বীনের খেদমত ও জিহাদে।</li>
              <li><strong className="text-slate-800 dark:text-slate-200">অসহায় মুসাফির:</strong> সফরে অর্থহীন হয়ে পড়া পথিক।</li>
            </ol>
          </div>
        )}
      </div>
    </motion.div>
  );
};
