import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Circle, Trophy, Calendar, 
  Flame, BookOpen, Clock, RefreshCw, Sparkles, ChevronRight,
  Info, Check, Target, Share2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface JuzItem {
  juzNumber: number;
  nameArabic: string;
  nameBn: string;
  startSurah: string;
  pageRange: string;
}

const JUZ_LIST: JuzItem[] = [
  { juzNumber: 1, nameArabic: 'الم', nameBn: 'আলিফ লাম মীম', startSurah: 'আল-ফাতিহা ও আল-বাকারা ১-১৪১', pageRange: 'পৃষ্ঠা ১ - ২১' },
  { juzNumber: 2, nameArabic: 'سَيَقُولُ', nameBn: 'সায়াকুলু', startSurah: 'আল-বাকারা ১৪২-২৫২', pageRange: 'পৃষ্ঠা ২২ - ৪১' },
  { juzNumber: 3, nameArabic: 'تِلْكَ الرُّسُلُ', nameBn: 'তিলকার রুসুল', startSurah: 'আল-বাকারা ২৫৩ - আলে ইমরান ৯২', pageRange: 'পৃষ্ঠা ৪২ - ৬১' },
  { juzNumber: 4, nameArabic: 'لَنْ تَنَالُوا', nameBn: 'লান তানালু', startSurah: 'আলে ইমরান ৯৩ - আন-নিসা ২৩', pageRange: 'পৃষ্ঠা ৬২ - ৮১' },
  { juzNumber: 5, nameArabic: 'وَالْمُحْصَنَاتُ', nameBn: 'ওয়াল মুহসানাতু', startSurah: 'আন-নিসা ২৪-১৪৭', pageRange: 'পৃষ্ঠা ৮২ - ১০১' },
  { juzNumber: 6, nameArabic: 'لَا يُحِبُّ اللَّهُ', nameBn: 'লা ইউহিব্বুল্লাহু', startSurah: 'আন-নিসা ১৪৮ - আল-মায়িদাহ ৮১', pageRange: 'পৃষ্ঠা ১০২ - ১২১' },
  { juzNumber: 7, nameArabic: 'وَإِذَا سَمِعُوا', nameBn: 'ওয়া ইযা সামিয়ূ', startSurah: 'আল-মায়িদাহ ৮২ - আল-আনআম ১১০', pageRange: 'পৃষ্ঠা ১২২ - ১৪১' },
  { juzNumber: 8, nameArabic: 'وَلَوْ أَنَّنَا', nameBn: 'ওয়া লাও আন্নানা', startSurah: 'আল-আনআম ১১১ - আল-আরাফ ৮৭', pageRange: 'পৃষ্ঠা ১৪২ - ১৬১' },
  { juzNumber: 9, nameArabic: 'قَالَ الْمَلَأُ', nameBn: 'ক্বলাল মালাউ', startSurah: 'আল-আরাফ ৮৮ - আল-আনফাল ৪০', pageRange: 'পৃষ্ঠা ১৬২ - ১৮১' },
  { juzNumber: 10, nameArabic: 'وَاعْلَمُوا', nameBn: 'ওয়া\'লামূ', startSurah: 'আল-আনফাল ৪১ - আত-তাওবাহ ৯২', pageRange: 'পৃষ্ঠা ১৮২ - ২০১' },
  { juzNumber: 11, nameArabic: 'يَعْتَذِرُونَ', nameBn: 'ইয়া\'তাযিরূনা', startSurah: 'আত-তাওবাহ ৯৩ - হুদ ৫', pageRange: 'পৃষ্ঠা ২০২ - ২২১' },
  { juzNumber: 12, nameArabic: 'وَمَا مِنْ دَابَّةٍ', nameBn: 'ওয়া মা মিন দাব্বাহ', startSurah: 'হুদ ৬ - ইউসুফ ৫২', pageRange: 'পৃষ্ঠা ২২২ - ২৪১' },
  { juzNumber: 13, nameArabic: 'وَمَا أُبَرِّئُ', nameBn: 'ওয়া মা উবাররিউ', startSurah: 'ইউসুফ ৫৩ - ইবরাহীম ৫২', pageRange: 'পৃষ্ঠা ২৪২ - ২৬১' },
  { juzNumber: 14, nameArabic: 'رُبَمَا', nameBn: 'রুবা-মা', startSurah: 'আল-হিজর ১ - আন-নাহল ১২৮', pageRange: 'পৃষ্ঠা ২৬২ - ২৮১' },
  { juzNumber: 15, nameArabic: 'سُبْحَانَ الَّذِي', nameBn: 'সুবহানাল্লাযী', startSurah: 'বনী ইসরাঈল ১ - আল-কাহাফ ৭৪', pageRange: 'পৃষ্ঠা ২৮২ - ৩০১' },
  { juzNumber: 16, nameArabic: 'قَالَ أَلَمْ', nameBn: 'ক্বলা আলাম', startSurah: 'আল-কাহাফ ৭৫ - ত্বা-হা ১৩৫', pageRange: 'পৃষ্ঠা ৩০২ - ৩২১' },
  { juzNumber: 17, nameArabic: 'اقْتَرَبَ لِلنَّاسِ', nameBn: 'ইক্বতারাবা লিন্নাস', startSurah: 'আল-আম্বিয়া ১ - আল-হাজ্জ ৭৮', pageRange: 'পৃষ্ঠা ৩২২ - ৩৪১' },
  { juzNumber: 18, nameArabic: 'قَدْ أَفْلَحَ', nameBn: 'ক্বদ আফলাহা', startSurah: 'আল-মুমিনূন ১ - আল-ফুরকান ২০', pageRange: 'পৃষ্ঠা ৩৪২ - ৩৬১' },
  { juzNumber: 19, nameArabic: 'وَقَالَ الَّذِينَ', nameBn: 'ওয়া ক্বলাল্লাযীনা', startSurah: 'আল-ফুরকান ২১ - আন-নামল ৫৫', pageRange: 'পৃষ্ঠা ৩৬২ - ৩৮১' },
  { juzNumber: 20, nameArabic: 'أَمَّنْ خَلَقَ', nameBn: 'আম্মান খালাক্বা', startSurah: 'আন-নামল ৫৬ - আল-আনকাবূত ৪৫', pageRange: 'পৃষ্ঠা ৩৮২ - ৪০১' },
  { juzNumber: 21, nameArabic: 'اتْلُ مَا أُوحِيَ', nameBn: 'উতলু মা উহিয়া', startSurah: 'আল-আনকাবূত ৪৬ - আল-আহযাব ৩০', pageRange: 'পৃষ্ঠা ৪০২ - ৪২১' },
  { juzNumber: 22, nameArabic: 'وَمَنْ يَقْنُتْ', nameBn: 'ওয়া মাই ইয়াক্বনুত', startSurah: 'আল-আহযাব ৩১ - ইয়াসীন ২৭', pageRange: 'পৃষ্ঠা ৪২২ - ৪৪১' },
  { juzNumber: 23, nameArabic: 'وَمَا لِيَ', nameBn: 'ওয়া মা লিয়া', startSurah: 'ইয়াসীন ২৮ - আয-যুমার ৩১', pageRange: 'পৃষ্ঠা ৪৪২ - ৪৬১' },
  { juzNumber: 24, nameArabic: 'فَمَنْ أَظْلَمُ', nameBn: 'ফামান আযলামু', startSurah: 'আয-যুমার ৩২ - ফুসসিলাত ৪৬', pageRange: 'পৃষ্ঠা ৪৬২ - ৪৮১' },
  { juzNumber: 25, nameArabic: 'إِلَيْهِ يُرَدُّ', nameBn: 'ইলাইহি ইউরাদ্দু', startSurah: 'ফুসসিলাত ৪৭ - আল-জাসিয়াহ ৩৭', pageRange: 'পৃষ্ঠা ৪৮২ - ৫০১' },
  { juzNumber: 26, nameArabic: 'حم', nameBn: 'হা-মীম', startSurah: 'আল-আহক্বাফ ১ - আয-যারিয়াত ৩০', pageRange: 'পৃষ্ঠা ৫০২ - ৫২১' },
  { juzNumber: 27, nameArabic: 'قَالَ فَمَا خَطْبُكُمْ', nameBn: 'ক্বলা ফামা খাতবুকুম', startSurah: 'আয-যারিয়াত ৩১ - আল-হাদীদ ২৯', pageRange: 'পৃষ্ঠা ৫২২ - ৫৪১' },
  { juzNumber: 28, nameArabic: 'قَدْ سَمِعَ اللَّهُ', nameBn: 'ক্বদ সামি\'আল্লাহু', startSurah: 'আল-মুজাদালাহ ১ - আত-তাহরীম ১২', pageRange: 'পৃষ্ঠা ৫৪২ - ৫৬১' },
  { juzNumber: 29, nameArabic: 'تَبَارَكَ الَّذِي', nameBn: 'তাবারাকাল্লাযী', startSurah: 'আল-মুলক ১ - আল-মুরসালাত ৫০', pageRange: 'পৃষ্ঠা ৫৬২ - ৫৮১' },
  { juzNumber: 30, nameArabic: 'عَمَّ يَتَسَاءَلُونَ', nameBn: 'আম্মা ইয়াতাসা-আলূন (আমপারা)', startSurah: 'আন-নাবা ১ - আন-নাস ৬', pageRange: 'পৃষ্ঠা ৫৮২ - ৬০৪' }
];

interface KhatamTrackerViewProps {
  setActiveTab: (tab: string) => void;
  onSelectJuzToRead?: (juzNum: number) => void;
}

export const KhatamTrackerView: React.FC<KhatamTrackerViewProps> = ({ setActiveTab, onSelectJuzToRead }) => {
  const { activeThemeConfig } = useApp();

  const [targetDays, setTargetDays] = useState<number>(() => {
    const saved = localStorage.getItem('khatam_target_days');
    return saved ? parseInt(saved, 10) : 30;
  });

  const [completedJuz, setCompletedJuz] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('khatam_completed_juz');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [startDate, setStartDate] = useState<string>(() => {
    const saved = localStorage.getItem('khatam_start_date');
    return saved || new Date().toISOString().split('T')[0];
  });

  useEffect(() => {
    localStorage.setItem('khatam_target_days', targetDays.toString());
  }, [targetDays]);

  useEffect(() => {
    localStorage.setItem('khatam_completed_juz', JSON.stringify(completedJuz));
  }, [completedJuz]);

  useEffect(() => {
    localStorage.setItem('khatam_start_date', startDate);
  }, [startDate]);

  const toggleJuz = (juzNumber: number) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(20);
    }
    setCompletedJuz(prev => {
      if (prev.includes(juzNumber)) {
        return prev.filter(n => n !== juzNumber);
      } else {
        return [...prev, juzNumber];
      }
    });
  };

  const handleReset = () => {
    if (window.confirm('আপনি কি সত্যিই কুরআন খতম প্রগ্রেস রিসেট করে নতুন খতম শুরু করতে চান?')) {
      setCompletedJuz([]);
      setStartDate(new Date().toISOString().split('T')[0]);
    }
  };

  const percentage = Math.round((completedJuz.length / 30) * 100);
  const remainingJuz = 30 - completedJuz.length;
  const pagesPerDay = Math.ceil(604 / targetDays);

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
              কুরআন খতম প্ল্যানার
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
              ৩০ পারা তিলাওয়াত অগ্রগতি ও পরিকল্পনা ট্র্যাকার
            </p>
          </div>
        </div>

        <button 
          onClick={handleReset} 
          title="নতুন খতম শুরু করুন"
          className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 hover:text-red-500 transition-colors"
        >
          <RefreshCw size={16} />
        </button>
      </div>

      {/* Progress Card */}
      <div 
        className="rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden space-y-5"
        style={{
          background: `linear-gradient(135deg, ${activeThemeConfig.primaryColor}, #0f766e)`
        }}
      >
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Trophy size={20} className="text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200 block">
                খতম অগ্রগতি ট্র্যাকার
              </span>
              <h3 className="text-lg font-black">{completedJuz.length} / ৩০ পারা সম্পন্ন</h3>
            </div>
          </div>

          <div className="text-right">
            <span className="text-3xl font-black text-amber-300">{percentage}%</span>
            <span className="text-[10px] block text-white/80 font-bold">অগ্রগতি</span>
          </div>
        </div>

        {/* Custom Progress Bar */}
        <div className="w-full bg-black/20 h-3 rounded-full overflow-hidden p-0.5 relative z-10">
          <div 
            className="h-full bg-gradient-to-r from-amber-300 to-amber-400 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Target & Daily Advice */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 relative z-10 text-center">
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
            <p className="text-[9px] uppercase tracking-wider text-emerald-200 font-bold">টার্গেট দিন</p>
            <p className="text-sm font-black text-white">{targetDays} দিন</p>
          </div>
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
            <p className="text-[9px] uppercase tracking-wider text-emerald-200 font-bold">দৈনিক লক্ষ্য</p>
            <p className="text-sm font-black text-amber-300">~{pagesPerDay} পৃষ্ঠা</p>
          </div>
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
            <p className="text-[9px] uppercase tracking-wider text-emerald-200 font-bold">বাকি আছে</p>
            <p className="text-sm font-black text-white">{remainingJuz} পারা</p>
          </div>
        </div>
      </div>

      {/* Target Plan Selector */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-emerald-600" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
              আপনার খতম পরিকল্পনা নির্বাচন করুন:
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { days: 30, label: '৩০ দিনে' },
            { days: 60, label: '৬০ দিনে' },
            { days: 90, label: '৯০ দিনে' },
            { days: 15, label: '১৫ দিনে' }
          ].map(plan => (
            <button
              key={plan.days}
              onClick={() => setTargetDays(plan.days)}
              className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all ${
                targetDays === plan.days
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Prayer Time Distribution Guidance */}
        <div className="p-3 bg-emerald-50 dark:bg-slate-900/60 rounded-xl border border-emerald-100 dark:border-slate-700 text-xs space-y-1">
          <p className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
            <Clock size={13} />
            ৫ ওয়াক্ত নামাজের পর সহজ রুটিন:
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
            {targetDays === 30 && 'প্রতি ওয়াক্ত নামাজের পর মাত্র ৪ পৃষ্ঠা (২ পাতা) তিলাওয়াত করুন। দিনে ১ পারা অনায়াসে সম্পন্ন হবে!'}
            {targetDays === 60 && 'প্রতি ওয়াক্ত নামাজের পর মাত্র ২ পৃষ্ঠা (১ পাতা) তিলাওয়াত করুন। ৬০ দিনে অনায়াসে পুরো কুরআন খতম হবে!'}
            {targetDays === 90 && 'প্রতিদিন সকালে ও সন্ধ্যায় ৩-৪ পৃষ্ঠা করে তিলাওয়াত করুন। ৩ মাসে সম্পূর্ণ শান্তিতে খতম হবে!'}
            {targetDays === 15 && 'প্রতি ওয়াক্ত নামাজের পর ৮ পৃষ্ঠা করে তিলাওয়াত করুন। ১৫ দিনে দ্রুত খতম সম্পন্ন হবে!'}
          </p>
        </div>
      </div>

      {/* 30 Para Interactive Checklist */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
            ৩০ পারা চেকলিস্ট (ট্যাপ করে সম্পন্ন চিহ্নিত করুন)
          </h3>
          <span className="text-[11px] font-bold text-emerald-600">
            {completedJuz.length} সম্পন্ন
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {JUZ_LIST.map((juz) => {
            const isDone = completedJuz.includes(juz.juzNumber);

            return (
              <div
                key={juz.juzNumber}
                onClick={() => toggleJuz(juz.juzNumber)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 active:scale-[0.98] ${
                  isDone 
                    ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300/80 dark:border-emerald-800/80 text-emerald-900 dark:text-emerald-100' 
                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700/80 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                    isDone 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {juz.juzNumber}
                  </div>

                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2">
                      <h4 className="font-black text-sm text-slate-800 dark:text-slate-100 truncate">
                        পারা {juz.juzNumber}: {juz.nameBn}
                      </h4>
                      <span className="font-arabic text-xs text-slate-400 font-bold shrink-0">
                        {juz.nameArabic}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {juz.startSurah} • {juz.pageRange}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
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

      {percentage === 100 && (
        <div className="p-6 rounded-[2.5rem] bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-xl text-center space-y-2">
          <Sparkles size={32} className="mx-auto" />
          <h3 className="text-xl font-black">মাশাআল্লাহ! আলহামদুলিল্লাহ!</h3>
          <p className="text-xs font-semibold leading-relaxed">
            আপনি সম্পূর্ণ ৩০ পারা কুরআন তিলাওয়াত সফলভাবে সম্পন্ন করেছেন। আল্লাহ আপনার এই খতমকে কবুল করুন ও জীবনের পাথেয় করুন!
          </p>
        </div>
      )}
    </motion.div>
  );
};
