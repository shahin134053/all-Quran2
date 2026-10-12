import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, HeartHandshake, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../constants';

interface SalamGreetingProps {
  userName: string;
}

export const SalamGreeting: React.FC<SalamGreetingProps> = ({ userName }) => {
  const { language, activeThemeConfig } = useApp();
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasSpokenOnce, setHasSpokenOnce] = useState(false);
  const hasAttemptedAutoPlay = useRef(false);

  // Play a soft, serene Islamic harmonized chord using Web Audio API
  const playSereneChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const playNote = (freq: number, start: number, duration: number, gainVal: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        gain.gain.setValueAtTime(0, ctx.currentTime + start);
        gain.gain.linearRampToValueAtTime(gainVal, ctx.currentTime + start + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      };

      // Gentle C-Major / F-Major peaceful progression
      playNote(523.25, 0, 1.2, 0.15); // C5
      playNote(659.25, 0.15, 1.3, 0.12); // E5
      playNote(783.99, 0.3, 1.5, 0.15); // G5
      playNote(1046.50, 0.45, 1.8, 0.18); // C6
    } catch {
      // Ignore audio context autoplay restrictions
    }
  };

  // Speak Salam via SpeechSynthesis
  const speakSalam = () => {
    setIsPlaying(true);
    playSereneChime();

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        
        let greetingText = t.salamSpokenGreeting;
        if (userName) {
          if (language === 'bn') greetingText = `আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। ${userName}, আল- শাহিন ( Shahin) Quran অ্যাপে আপনাকে স্বাগতম।`;
          else if (language === 'hi') greetingText = `अस्सलाम वालेकुम व रहमतुल्लाह। ${userName}, अल-शाहिन (Shahin) क़ुरान ऐप में आपका स्वागत है।`;
          else if (language === 'es') greetingText = `Assalamu Alaikum wa Rahmatullah. ¡Bienvenido ${userName} a Al-Shahin (Shahin) Corán!`;
          else if (language === 'ar') greetingText = `السلام عليكم ورحمة الله وبركاته. مرحبًا ${userName} في قرآن الشاهين.`;
          else if (language === 'de') greetingText = `Assalamu Alaikum wa Rahmatullah. Willkommen ${userName} bei Al-Shahin (Shahin) Koran!`;
          else greetingText = `Assalamu Alaikum wa Rahmatullah. Welcome ${userName} to Al-Shahin (Shahin) Quran.`;
        }

        const utterance = new SpeechSynthesisUtterance(greetingText);
        utterance.rate = 0.92;
        utterance.pitch = 1.05;

        // Try to find voice matching selected language
        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find(v => v.lang.toLowerCase().startsWith(language)) || 
                      voices.find(v => v.lang.startsWith('ar')) || 
                      voices.find(v => v.lang.startsWith('en')) || 
                      voices[0];

        if (voice) {
          utterance.voice = voice;
        }

        utterance.onend = () => {
          setIsPlaying(false);
          setHasSpokenOnce(true);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
        };

        window.speechSynthesis.speak(utterance);

        // Fallback reset if onend doesn't fire
        setTimeout(() => {
          setIsPlaying(false);
          setHasSpokenOnce(true);
        }, 3500);
      } catch {
        setIsPlaying(false);
      }
    } else {
      setTimeout(() => {
        setIsPlaying(false);
        setHasSpokenOnce(true);
      }, 1500);
    }
  };

  // Attempt gentle greeting on first mount
  useEffect(() => {
    if (!hasAttemptedAutoPlay.current) {
      hasAttemptedAutoPlay.current = true;
      // Slight delay for smooth UI appearance
      const timer = setTimeout(() => {
        // Attempt speak (if user already interacted, it speaks; if blocked by browser, the button is ready)
        speakSalam();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[2rem] p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 dark:from-amber-950/30 dark:via-emerald-950/30 dark:to-teal-950/30 border border-amber-500/25 dark:border-amber-500/20 shadow-sm"
    >
      {/* Decorative ambient glowing circles */}
      <div 
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none"
        style={{ backgroundColor: activeThemeConfig.primaryColor }}
      />
      
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {/* Animated Islamic Emblem */}
          <motion.div 
            animate={{ 
              scale: isPlaying ? [1, 1.1, 1] : 1,
              rotate: isPlaying ? [0, 5, -5, 0] : 0 
            }}
            transition={{ repeat: isPlaying ? Infinity : 0, duration: 1.2 }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
            style={{ backgroundColor: activeThemeConfig.primaryColor }}
          >
            <Sparkles size={22} className={isPlaying ? 'animate-spin' : ''} />
          </motion.div>

          <div className="min-w-0">
            {/* Arabic Calligraphy with smooth shimmer */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-arabic text-base sm:text-lg font-bold text-amber-700 dark:text-amber-400 tracking-wide leading-tight truncate"
            >
              السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </motion.div>

            {/* Localized Greeting with UserName */}
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mt-0.5"
            >
              <h2 className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 tracking-tight truncate">
                {userName ? `${t.salamBannerTitle}, ${userName}!` : `${t.salamBannerTitle}!`}
              </h2>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                {t.salamMubarakBadge}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Voice Play/Replay Interactive Button */}
        <button
          onClick={speakSalam}
          title={t.listenVoiceSalam}
          className={`flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all active:scale-95 shadow-sm ${
            isPlaying
              ? 'bg-amber-500 text-white shadow-amber-500/30 animate-pulse'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700'
          }`}
        >
          <Volume2 size={16} className={isPlaying ? 'animate-bounce text-white' : 'text-amber-500'} />
          <span className="hidden xs:inline">
            {isPlaying ? t.speakingVoiceSalam : t.listenVoiceSalam}
          </span>
        </button>
      </div>
    </motion.div>
  );
};
