import React, { useState } from 'react';
import { Sparkles, Copy, Check, Share2, BookOpen, Quote, Image as ImageIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DAILY_AYAH_LIST, DailyAyahItem } from '../constants';

interface DailyAyahCardProps {
  onReadSurah: (surahNumber: number) => void;
  onOpenSocialCard?: (data: {
    surahNumber: number;
    ayahNumber: number;
    surahNameBn: string;
    surahNameEn: string;
    arabicText: string;
    bengaliTranslation: string;
  }) => void;
}

export const DailyAyahCard: React.FC<DailyAyahCardProps> = ({ onReadSurah, onOpenSocialCard }) => {
  const { language, activeThemeConfig } = useApp();
  const [copied, setCopied] = useState(false);

  // Compute daily rotating Ayah based on day of year
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = (now.getTime() - startOfYear.getTime()) + ((startOfYear.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const currentAyah: DailyAyahItem = DAILY_AYAH_LIST[dayOfYear % DAILY_AYAH_LIST.length] || DAILY_AYAH_LIST[0];

  const handleCopy = () => {
    const textToCopy = `"${currentAyah.arabic}"\n\n${language === 'bn' ? currentAyah.bangla : currentAyah.english}\n— ${currentAyah.surahNameBn} (${currentAyah.ayahNumber})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const textToShare = `"${currentAyah.arabic}"\n\n${language === 'bn' ? currentAyah.bangla : currentAyah.english}\n— ${currentAyah.surahNameBn} (${currentAyah.ayahNumber})`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: language === 'bn' ? 'আজকের নির্বাচিত আয়াত' : 'Daily Ayah',
          text: textToShare
        });
      } catch (err) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-1 rounded-[2.5rem] shadow-xl shadow-slate-900/5 dark:shadow-black/20 border border-slate-100 dark:border-slate-700/60 relative overflow-hidden group">
      <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/20 dark:from-slate-900 dark:via-slate-900/80 dark:to-amber-950/20 p-6 sm:p-7 rounded-[2.2rem] relative space-y-4">
        {/* Subtle decorative quote watermark */}
        <div className="absolute top-2 right-4 p-4 opacity-5 pointer-events-none">
          <Quote size={80} style={{ color: activeThemeConfig.primaryColor }} />
        </div>

        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div 
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: activeThemeConfig.primaryColor }}
            >
              <Sparkles size={16} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block leading-none mb-0.5">
                {language === 'bn' ? 'আজকের নির্বাচিত আয়াত' : 'Daily Ayah'}
              </span>
              <h4 className="text-xs font-black text-slate-800 dark:text-slate-100">
                {language === 'bn' ? currentAyah.surahNameBn : currentAyah.surahNameEn} • {language === 'bn' ? `আয়াত ${currentAyah.ayahNumber}` : `Ayah ${currentAyah.ayahNumber}`}
              </h4>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            {currentAyah.theme}
          </span>
        </div>

        {/* Arabic Ayah */}
        <p 
          className="font-arabic text-xl sm:text-2xl text-center leading-[2.2] drop-shadow-sm px-2"
          style={{ color: activeThemeConfig.primaryColor }}
        >
          {currentAyah.arabic}
        </p>

        {/* Translation */}
        <p className="text-xs sm:text-sm text-center text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic max-w-lg mx-auto">
          "{language === 'bn' ? currentAyah.bangla : currentAyah.english}"
        </p>

        {/* Actions Bar */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
          <button
            onClick={() => onReadSurah(currentAyah.surahNumber)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black text-white shadow-sm active:scale-95 transition-all"
            style={{ backgroundColor: activeThemeConfig.primaryColor }}
          >
            <BookOpen size={14} />
            <span>{language === 'bn' ? 'সম্পূর্ণ সূরা পড়ুন' : 'Read Surah'}</span>
          </button>

          <div className="flex items-center gap-1.5">
            {onOpenSocialCard && (
              <button
                onClick={() => onOpenSocialCard({
                  surahNumber: currentAyah.surahNumber,
                  ayahNumber: currentAyah.ayahNumber,
                  surahNameBn: currentAyah.surahNameBn,
                  surahNameEn: currentAyah.surahNameEn,
                  arabicText: currentAyah.arabic,
                  bengaliTranslation: currentAyah.bangla
                })}
                className="p-2 rounded-xl border border-amber-200/80 dark:border-amber-800/80 bg-amber-50/70 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 hover:scale-105 active:scale-90 transition-all flex items-center gap-1 text-xs font-bold"
                title="কার্ড তৈরি করুন"
              >
                <Sparkles size={14} className="text-amber-500" />
                <span className="hidden sm:inline">কার্ড বানান</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 active:scale-90 transition-all flex items-center gap-1.5 text-xs font-bold"
              title="Copy verse"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span className="hidden sm:inline">{copied ? (language === 'bn' ? 'কপি হয়েছে' : 'Copied') : (language === 'bn' ? 'কপি' : 'Copy')}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 active:scale-90 transition-all text-xs font-bold"
              title="Share verse"
            >
              <Share2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
