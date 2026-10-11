import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Plus, RefreshCw, Minus, Activity, 
  Sparkles, CheckCircle2, Volume2, VolumeX, Maximize2, Minimize2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../constants';

interface TasbihViewProps {
  setActiveTab: (tab: string) => void;
}

interface DhikrPreset {
  id: string;
  arabic: string;
  transliteration: string;
  meaningBn: string;
  target: number;
}

const DHIKR_PRESETS: DhikrPreset[] = [
  {
    id: 'subhanallah',
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'SubhanAllah',
    meaningBn: 'আল্লাহ অতি পবিত্র ও নিষ্কলুষ',
    target: 33
  },
  {
    id: 'alhamdulillah',
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    meaningBn: 'সমস্ত প্রশংসা একমাত্র আল্লাহর জন্য',
    target: 33
  },
  {
    id: 'allahuakbar',
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    meaningBn: 'আল্লাহ সবচেয়ে মহান ও সর্বশ্রেষ্ঠ',
    target: 34
  },
  {
    id: 'lailahaillallah',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
    transliteration: 'La ilaha illallah',
    meaningBn: 'আল্লাহ ছাড়া কোনো সত্য উপাস্য নেই',
    target: 100
  },
  {
    id: 'astaghfirullah',
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    transliteration: 'Astaghfirullah',
    meaningBn: 'আমি আল্লাহর কাছে ক্ষমা প্রার্থনা করছি',
    target: 100
  },
  {
    id: 'durood',
    arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ',
    transliteration: 'Allahumma Salli Ala Muhammad',
    meaningBn: 'হে আল্লাহ, মুহাম্মদ (সা.)-এর ওপর দরূদ বর্ষণ করুন',
    target: 100
  }
];

const TasbihView: React.FC<TasbihViewProps> = ({ setActiveTab }) => {
  const { language, activeThemeConfig } = useApp();
  const t = UI_TRANSLATIONS[language];
  
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [vibration, setVibration] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState<DhikrPreset>(DHIKR_PRESETS[0]);
  const [totalLaps, setTotalLaps] = useState(0);
  const [fullScreenTap, setFullScreenTap] = useState(false);

  const triggerVibrate = (pattern: number | number[]) => {
    if (vibration && typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (err) {
        console.warn('Vibration not supported', err);
      }
    }
  };

  const handleCount = () => {
    triggerVibrate(40);
    const newCount = count + 1;
    setCount(newCount);

    if (newCount >= target) {
      // Completed round / lap
      triggerVibrate([80, 60, 120]);
      setTotalLaps(prev => prev + 1);
    }
  };

  const handleReset = () => {
    triggerVibrate(80);
    setCount(0);
  };

  const handleSelectPreset = (p: DhikrPreset) => {
    setSelectedPreset(p);
    setTarget(p.target);
    setCount(0);
    triggerVibrate(30);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 pt-4 pb-12"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab('home')} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl active:scale-90 transition-transform">
            <ArrowLeft size={20} className="text-slate-600 dark:text-slate-300" />
          </button>
          <div>
            <h2 className="text-2xl font-black tracking-tight">{t.tasbih}</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {language === 'bn' ? `রাউন্ড সম্পন্ন: ${totalLaps}` : `Laps completed: ${totalLaps}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Full-Screen Tap Mode Button */}
          <button
            onClick={() => setFullScreenTap(!fullScreenTap)}
            className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
              fullScreenTap 
                ? 'bg-amber-500 text-white border-amber-500 shadow-sm' 
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
            title={language === 'bn' ? 'ফুলস্ক্রিন টাচ মোড' : 'Fullscreen Tap Mode'}
          >
            {fullScreenTap ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span className="hidden sm:inline text-[10px] uppercase tracking-wider">
              {language === 'bn' ? 'সহজ টাচ' : 'Easy Tap'}
            </span>
          </button>

          {/* Vibration Toggle */}
          <button 
            onClick={() => setVibration(!vibration)}
            className={`p-2.5 rounded-xl border transition-all ${
              vibration 
                ? 'text-white border-transparent' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
            }`}
            style={vibration ? { backgroundColor: activeThemeConfig.primaryColor } : {}}
            title={t.vibration}
          >
            <Activity size={18} />
          </button>
        </div>
      </div>

      {/* Preset Dhikr Chips Carousel */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
            {language === 'bn' ? 'যিকির নির্বাচন করুন' : 'Select Dhikr'}
          </span>
          <span className="text-[10px] font-bold text-slate-400">
            {selectedPreset.target} {language === 'bn' ? 'বার' : 'times'}
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {DHIKR_PRESETS.map((p) => {
            const isSelected = selectedPreset.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                className={`px-3.5 py-2 rounded-2xl shrink-0 text-xs font-black transition-all active:scale-95 flex items-center gap-2 border ${
                  isSelected
                    ? 'text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80'
                }`}
                style={isSelected ? { backgroundColor: activeThemeConfig.primaryColor, borderColor: activeThemeConfig.primaryColor } : {}}
              >
                <span>{p.transliteration}</span>
                <span className="text-[10px] opacity-75">({p.target})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Dhikr Display Card */}
      <div className="p-4 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm text-center space-y-1">
        <p className="font-arabic text-2xl font-bold" style={{ color: activeThemeConfig.primaryColor }}>
          {selectedPreset.arabic}
        </p>
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          {language === 'bn' ? selectedPreset.meaningBn : selectedPreset.transliteration}
        </p>
      </div>

      {/* Main Counter Dial & Touch Surface */}
      <div 
        onClick={fullScreenTap ? handleCount : undefined}
        className={`flex flex-col items-center justify-center space-y-6 ${
          fullScreenTap ? 'cursor-pointer active:scale-[0.99] p-6 rounded-[3rem] bg-slate-50/80 dark:bg-slate-900/50 border-2 border-dashed border-amber-500/40' : ''
        }`}
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-full animate-pulse opacity-15"
            style={{ backgroundColor: activeThemeConfig.primaryColor }}
          />
          <div 
            onClick={handleCount}
            className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full shadow-2xl border-4 border-slate-100 dark:border-slate-700/50 flex items-center justify-center cursor-pointer active:scale-95 transition-all"
          >
            <div className="text-center select-none">
              <span 
                className="text-6xl font-black tabular-nums transition-colors duration-300 block"
                style={{ color: activeThemeConfig.primaryColor }}
              >
                {count}
              </span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                {t.count} / {target}
              </p>
              {count >= target && (
                <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-500 mt-1">
                  <CheckCircle2 size={12} />
                  <span>{language === 'bn' ? 'সম্পন্ন!' : 'Done!'}</span>
                </span>
              )}
            </div>
          </div>
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-slate-100 dark:text-slate-800"
            />
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke={activeThemeConfig.primaryColor}
              strokeWidth="8"
              strokeDasharray={2 * Math.PI * 120}
              strokeDashoffset={2 * Math.PI * 120 * (1 - Math.min(1, (count % target) / target))}
              className="transition-all duration-200"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Large Count Tap Button (when not full-screen) */}
        {!fullScreenTap && (
          <button 
            onClick={handleCount}
            className="w-24 h-24 rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all duration-100 touch-manipulation hover:scale-105"
            style={{ 
              backgroundColor: activeThemeConfig.primaryColor,
              boxShadow: `0 15px 35px -5px ${activeThemeConfig.primaryColor}50`
            }}
          >
            <Plus size={44} className="text-white" />
          </button>
        )}

        {fullScreenTap && (
          <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 animate-pulse text-center">
            {language === 'bn' ? '👆 কার্ডের যেকোনো জায়গায় ট্যাপ করে গণনা করুন' : '👆 Tap anywhere on the card to count'}
          </p>
        )}

        {/* Actions bar (Reset, Target Adjuster) */}
        <div className="flex items-center gap-3 w-full max-w-xs pt-2">
          <button 
            onClick={handleReset}
            className="flex-1 py-3.5 bg-slate-100 dark:bg-slate-800 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 active:scale-95"
          >
            <RefreshCw size={15} /> {t.reset}
          </button>
          
          <div className="flex-1 flex items-center justify-between bg-slate-100 dark:bg-slate-800 rounded-2xl px-3 py-1.5">
            <button onClick={() => setTarget(Math.max(1, target - 1))} className="p-2 text-slate-400 hover:text-amber-500 active:scale-90">
              <Minus size={15} />
            </button>
            <div className="text-center">
              <span className="block text-base font-black text-slate-800 dark:text-slate-100">{target}</span>
              <span className="text-[7px] font-bold uppercase text-slate-400 tracking-widest">{t.target}</span>
            </div>
            <button onClick={() => setTarget(target + 1)} className="p-2 text-slate-400 hover:text-amber-500 active:scale-90">
              <Plus size={15} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TasbihView;
