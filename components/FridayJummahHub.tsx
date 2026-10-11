import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Sparkles, BookOpen, CheckCircle2, Circle, 
  Clock, Heart, Volume2, RefreshCw, ChevronRight, Award, 
  ShieldCheck, Sun, Star
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface FridaySunnahItem {
  id: string;
  titleBn: string;
  hadithBn: string;
  rewardBn: string;
}

const FRIDAY_SUNNAHS: FridaySunnahItem[] = [
  {
    id: 'ghusl',
    titleBn: 'উত্তমরূপে জুমার গোসল করা',
    hadithBn: 'রাসুলুল্লাহ (ﷺ) বলেছেন: "জুমার দিনে গোসল করা প্রতিটি প্রাপ্তবয়স্ক ব্যক্তির ওপর ওয়াজিব সদৃশ আবশ্যক।" (সহীহ বুখারী: ৮৭৭)',
    rewardBn: 'সপ্তাহের সগীরা গুনাহসমূহের কাফফারা হয়ে যায়।'
  },
  {
    id: 'miswak',
    titleBn: 'মিসওয়াক করা বা দাঁত পরিষ্কার করা',
    hadithBn: 'রাসুলুল্লাহ (ﷺ) জুমার দিন মিসওয়াক করার প্রতি বিশেষ তাগিদ দিয়েছেন। (সহীহ বুখারী: ৮৮৭)',
    rewardBn: 'মুখের পবিত্রতা ও আল্লাহর সন্তুষ্টি অর্জন।'
  },
  {
    id: 'attar',
    titleBn: 'সুগন্ধি বা আতর ও তেল ব্যবহার করা',
    hadithBn: 'রাসুলুল্লাহ (ﷺ) বলেছেন: "যদি ঘরে সুগন্ধি থাকে তবে যেন তা স্পর্শ করে।" (সহীহ বুখারী: ৮৮০)',
    rewardBn: 'ফেরেশতাদের প্রিয় ও মসজিদের আদব রক্ষা।'
  },
  {
    id: 'clean_clothes',
    titleBn: 'উত্তম ও পরিষ্কার-পরিচ্ছন্ন (সাদা) পোশাক পরিধান',
    hadithBn: 'নবীজী (ﷺ) জুমার জন্য সাধারণ দিনের পোশাক ছাড়াও বিশেষ পোশাক পছন্দ করতেন। (আবু দাউদ: ১০৭৮)',
    rewardBn: 'জুমার দিনের সৌন্দর্য ও মর্যাদা বৃদ্ধি।'
  },
  {
    id: 'nails',
    titleBn: 'নখ কাটা ও মোচ বা চুল পরিপাটি করা',
    hadithBn: 'রাসুলুল্লাহ (ﷺ) জুমার সালাতে যাওয়ার পূর্বে নখ ও গোঁফ ছাঁটতেন। (বায়হাকী)',
    rewardBn: 'ফিতরাতের ওপর অটল থাকা ও পরিচ্ছন্নতা।'
  },
  {
    id: 'early_mosque',
    titleBn: 'মসজিদে সকাল সকাল উপস্থিত হওয়া',
    hadithBn: '"যে প্রথম প্রহরে গেল সে যেন একটি উট কুরবানি করল, দ্বিতীয় প্রহরে গেলে একটি গরু..." (সহীহ বুখারী: ৮৮১)',
    rewardBn: 'উট বা গরু কুরবানি করার সমপরিমাণ অসীম সওয়াব।'
  },
  {
    id: 'khutbah',
    titleBn: 'ইমামের খুতবা গভীর মনোযোগ দিয়ে শোনা ও চুপ থাকা',
    hadithBn: 'খুতবার সময় সঙ্গীকে "চুপ কর" বললেও অনর্থক কাজ হিসেবে গণ্য হয়। (সহীহ বুখারী: ৯৩৪)',
    rewardBn: 'জুমার পূর্ণাঙ্গ সওয়াব প্রাপ্তি নিশ্চিত হয়।'
  },
  {
    id: 'saat_ijabah',
    titleBn: 'আসর থেকে মাগরিবের মধ্যবর্তী সময়ে বেশি বেশি দু\'আ করা',
    hadithBn: '"জুমার দিনে এমন একটি মুহূর্ত আছে যাতে কোনো মুসলিম বান্দা আল্লাহর কাছে যা প্রার্থনা করে, তিনি তা দান করেন।" (সহীহ বুখারী: ৯৩৫)',
    rewardBn: 'নিশ্চিত দু\'আ কবুলের পরম মাহেন্দ্রক্ষণ।'
  }
];

interface FridayJummahHubProps {
  setActiveTab: (tab: string) => void;
  onReadSurahKahf: () => void;
}

export const FridayJummahHub: React.FC<FridayJummahHubProps> = ({ setActiveTab, onReadSurahKahf }) => {
  const { activeThemeConfig } = useApp();
  const isTodayFriday = new Date().getDay() === 5;

  const [completedSunnahs, setCompletedSunnahs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('friday_completed_sunnahs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [daroodCount, setDaroodCount] = useState<number>(() => {
    const saved = localStorage.getItem('friday_darood_count');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('friday_completed_sunnahs', JSON.stringify(completedSunnahs));
  }, [completedSunnahs]);

  useEffect(() => {
    localStorage.setItem('friday_darood_count', daroodCount.toString());
  }, [daroodCount]);

  const toggleSunnah = (id: string) => {
    if ('vibrate' in navigator) navigator.vibrate(15);
    setCompletedSunnahs(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleIncrementDarood = () => {
    if ('vibrate' in navigator) navigator.vibrate(15);
    setDaroodCount(prev => prev + 1);
  };

  const handleResetDarood = () => {
    setDaroodCount(0);
  };

  const handleResetSunnahs = () => {
    setCompletedSunnahs([]);
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
              জুমার বিশেষ আমল ও রিমাইন্ডার
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
              সাপ্তাহিক ঈদের দিন • সাইয়্যিদুল আইয়্যাম
            </p>
          </div>
        </div>

        <span className={`px-3 py-1 text-xs font-black rounded-full border ${
          isTodayFriday 
            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200 border-amber-300 animate-pulse'
            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border-slate-200'
        }`}>
          {isTodayFriday ? '🕌 আজ পবিত্র জুমার দিন!' : 'জুমার প্রস্তুতি'}
        </span>
      </div>

      {/* Hero Banner */}
      <div 
        className="rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden space-y-4"
        style={{
          background: `linear-gradient(135deg, ${activeThemeConfig.primaryColor}, #b45309)`
        }}
      >
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-amber-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-200">
              সাইয়্যিদুল আইয়্যাম • দিনসমূহের সর্দার
            </span>
          </div>
          <h3 className="text-xl font-black leading-snug">
            "দিনগুলোর মধ্যে শ্রেষ্ঠতম দিন হলো জুমার দিন..."
          </h3>
          <p className="text-xs text-white/90 leading-relaxed font-medium">
            এ দিনে হযরত আদম (আ.) সৃষ্টি হয়েছিলেন, এ দিনেই তাঁর তওবা কবুল হয়েছিল এবং এ দিনেই কিয়ামত সংঘটিত হবে।
          </p>
        </div>

        <div className="pt-2 border-t border-white/10 relative z-10 flex items-center justify-between text-xs font-bold">
          <span className="text-emerald-200">সুন্নাত সম্পন্ন: {completedSunnahs.length}/{FRIDAY_SUNNAHS.length}</span>
          <span className="text-amber-300 font-black">দরূদ শরিফ: {daroodCount} বার</span>
        </div>
      </div>

      {/* Surah Al-Kahf Action Card (Direct 1-Click Launch) */}
      <div className="p-5 rounded-[2.2rem] bg-gradient-to-r from-teal-700 via-emerald-800 to-teal-900 text-white shadow-lg space-y-3 relative overflow-hidden">
        <div className="flex items-start justify-between gap-3 relative z-10">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block">
              জুমার বিশেষ তিলাওয়াত • সূরা #১৮
            </span>
            <h3 className="text-lg font-black">সূরা আল-কাহাফ (Surah Al-Kahf)</h3>
            <p className="text-xs text-teal-100/90 leading-relaxed font-medium">
              "যে ব্যক্তি জুমার দিনে সূরা আল-কাহাফ তিলাওয়াত করবে, তার জন্য দুই জুমার মধ্যবর্তী সময় নূর দ্বারা আলোকিত হবে এবং দাজ্জালের ফিতনা থেকে নিরাপদ থাকবে।"
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
            <BookOpen size={24} className="text-amber-300" />
          </div>
        </div>

        <div className="pt-2 relative z-10">
          <button
            onClick={onReadSurahKahf}
            className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs rounded-2xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>সূরা আল-কাহাফ পড়তে শুরু করুন</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Darood Sharif Dedicated Counter */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.2rem] shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-pink-500" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">
              জুমার দিনে দরূদ শরীফ পাঠের আমল
            </h4>
          </div>

          {daroodCount > 0 && (
            <button
              onClick={handleResetDarood}
              className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
              title="রিসেট"
            >
              <RefreshCw size={14} />
            </button>
          )}
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-900/60 border border-amber-200/40 dark:border-slate-700/60 text-center space-y-2">
          <p className="font-arabic text-xl font-bold text-slate-800 dark:text-amber-100" dir="rtl">
            اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
            "আল্লাহুম্মা সাল্লি 'আলা মুহাম্মাদিউঁ ওয়া 'আলা আলি মুহাম্মাদ"
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            রাসুলুল্লাহ (ﷺ) বলেছেন: "জুমার দিনে তোমরা আমার ওপর অধিক পরিমাণে দরূদ পাঠ করো; কারণ তোমাদের দরূদ আমার সামনে পেশ করা হয়।" (আবু দাউদ: ১০৪৭)
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-1">
          <div className="text-left">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">মোট পাঠ</span>
            <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{daroodCount} বার</span>
          </div>

          <button
            onClick={handleIncrementDarood}
            className="flex-1 max-w-[200px] py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-lg shadow-emerald-700/20 active:scale-95 transition-all text-center"
          >
            ট্যাপ করুন (+১)
          </button>
        </div>
      </div>

      {/* Friday Sunnah Checklist */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
            জুমার ৮টি বিশেষ সুন্নাত চেকলিস্ট
          </h4>
          {completedSunnahs.length > 0 && (
            <button
              onClick={handleResetSunnahs}
              className="text-[11px] font-black text-slate-400 hover:text-slate-600"
            >
              রিসেট
            </button>
          )}
        </div>

        <div className="space-y-2.5">
          {FRIDAY_SUNNAHS.map((item, idx) => {
            const isDone = completedSunnahs.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleSunnah(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 active:scale-[0.99] ${
                  isDone 
                    ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700/80 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 mt-0.5 ${
                    isDone ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                  }`}>
                    {idx + 1}
                  </div>

                  <div className="space-y-1">
                    <h5 className={`font-black text-sm ${
                      isDone ? 'text-emerald-900 dark:text-emerald-100 line-through opacity-80' : 'text-slate-800 dark:text-slate-100'
                    }`}>
                      {item.titleBn}
                    </h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {item.hadithBn}
                    </p>
                    <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                      ★ সওয়াব: {item.rewardBn}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 mt-1">
                  {isDone ? (
                    <CheckCircle2 size={22} className="text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Circle size={22} className="text-slate-300 dark:text-slate-600" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
