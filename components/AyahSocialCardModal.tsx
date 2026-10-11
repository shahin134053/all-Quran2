import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Download, Share2, Copy, Check, Sparkles, 
  Palette, Type, Image as ImageIcon, Sliders, Eye
} from 'lucide-react';

export interface AyahCardData {
  surahNumber: number;
  ayahNumber: number;
  surahNameBn: string;
  surahNameEn: string;
  arabicText: string;
  bengaliTranslation: string;
}

interface AyahSocialCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AyahCardData | null;
}

type CardTheme = 'emerald' | 'midnight' | 'royal' | 'sunset' | 'dark';

export const AyahSocialCardModal: React.FC<AyahSocialCardModalProps> = ({ isOpen, onClose, data }) => {
  const [theme, setTheme] = useState<CardTheme>('emerald');
  const [showAppIcon, setShowAppIcon] = useState(true);
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  if (!isOpen || !data) return null;

  // Theme palettes for Canvas
  const THEME_STYLES: Record<CardTheme, {
    bg1: string;
    bg2: string;
    border: string;
    arabicColor: string;
    textColor: string;
    accentColor: string;
    goldColor: string;
    nameBn: string;
  }> = {
    emerald: {
      bg1: '#022c22',
      bg2: '#064e3b',
      border: '#059669',
      arabicColor: '#fef08a',
      textColor: '#ecfdf5',
      accentColor: '#10b981',
      goldColor: '#fbbf24',
      nameBn: 'মরকত সবুজ'
    },
    midnight: {
      bg1: '#030712',
      bg2: '#0f172a',
      border: '#38bdf8',
      arabicColor: '#e0f2fe',
      textColor: '#f8fafc',
      accentColor: '#38bdf8',
      goldColor: '#38bdf8',
      nameBn: 'মধ্যরাত নীল'
    },
    royal: {
      bg1: '#2e1065',
      bg2: '#4c1d95',
      border: '#a855f7',
      arabicColor: '#fef08a',
      textColor: '#faf5ff',
      accentColor: '#c084fc',
      goldColor: '#fbbf24',
      nameBn: 'রাজকীয় বেগুনী'
    },
    sunset: {
      bg1: '#431407',
      bg2: '#7c2d12',
      border: '#f97316',
      arabicColor: '#fed7aa',
      textColor: '#fff7ed',
      accentColor: '#fb923c',
      goldColor: '#f59e0b',
      nameBn: 'মরু সূর্যাস্ত'
    },
    dark: {
      bg1: '#09090b',
      bg2: '#18181b',
      border: '#71717a',
      arabicColor: '#fafafa',
      textColor: '#d4d4d8',
      accentColor: '#a1a1aa',
      goldColor: '#d4d4d8',
      nameBn: 'স্নিগ্ধ ডার্ক'
    }
  };

  const drawCardOnCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High definition 1080 x 1350 resolution (Portrait Instagram/Social Ratio)
    const W = 1080;
    const H = 1350;
    canvas.width = W;
    canvas.height = H;

    const currentStyle = THEME_STYLES[theme];

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, currentStyle.bg1);
    bgGrad.addColorStop(0.5, currentStyle.bg2);
    bgGrad.addColorStop(1, currentStyle.bg1);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Decorative Islamic borders
    ctx.strokeStyle = currentStyle.border;
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, W - 96, H - 96);

    ctx.strokeStyle = currentStyle.goldColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([12, 8]);
    ctx.strokeRect(64, 64, W - 128, H - 128);
    ctx.setLineDash([]);

    // Corner Islamic Ornaments
    const drawCorner = (x: number, y: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = currentStyle.goldColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(40, 0);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 40);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(20, 20, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    drawCorner(80, 80, 0);
    drawCorner(W - 80, 80, Math.PI / 2);
    drawCorner(W - 80, H - 80, Math.PI);
    drawCorner(80, H - 80, -Math.PI / 2);

    let currentY = 160;

    // App Branding & Icon at Top
    if (showAppIcon) {
      // Draw 8-point geometric star icon on canvas
      ctx.save();
      ctx.translate(W / 2, currentY);
      
      // Outer golden glow
      ctx.fillStyle = currentStyle.goldColor;
      ctx.beginPath();
      ctx.arc(0, 0, 36, 0, Math.PI * 2);
      ctx.fill();

      // Inner star
      ctx.fillStyle = currentStyle.bg1;
      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI * 2);
      ctx.fill();

      // Miniature Quran Motif
      ctx.fillStyle = currentStyle.goldColor;
      ctx.font = '28px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('📖', 0, -2);
      ctx.restore();

      currentY += 65;

      // App Name
      ctx.textAlign = 'center';
      ctx.fillStyle = currentStyle.goldColor;
      ctx.font = 'bold 24px "Noto Sans Bengali", sans-serif';
      ctx.fillText('আল-কুরআনুল কারীম', W / 2, currentY);

      currentY += 32;
      ctx.fillStyle = currentStyle.accentColor;
      ctx.font = '16px "Noto Sans Bengali", sans-serif';
      ctx.fillText('পবিত্র কুরআনের চিরন্তন বাণী', W / 2, currentY);

      currentY += 45;
    } else {
      currentY += 50;
    }

    // Surah & Ayah Badge
    ctx.textAlign = 'center';
    const badgeText = `সূরা ${data.surahNameBn} • আয়াত: ${data.ayahNumber}`;
    ctx.font = 'bold 26px "Noto Sans Bengali", sans-serif';
    const textWidth = ctx.measureText(badgeText).width;
    
    // Badge pill
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeStyle = currentStyle.border;
    ctx.lineWidth = 2;
    const pillW = textWidth + 60;
    const pillH = 50;
    ctx.beginPath();
    ctx.roundRect((W - pillW) / 2, currentY - 34, pillW, pillH, 25);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = currentStyle.goldColor;
    ctx.fillText(badgeText, W / 2, currentY);

    currentY += 70;

    // Helper: Word wrap text
    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number, isRtl: boolean = false) => {
      const words = text.split(' ');
      let line = '';
      const lines: string[] = [];

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      let lineY = y;
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i].trim(), x, lineY);
        lineY += lineHeight;
      }
      return lineY;
    };

    // Arabic Text
    if (showArabic && data.arabicText) {
      ctx.textAlign = 'center';
      ctx.fillStyle = currentStyle.arabicColor;
      const arabicFontSize = fontSize === 'large' ? 44 : 38;
      ctx.font = `bold ${arabicFontSize}px "Amiri", "Scheherazade New", serif`;
      currentY = wrapText(data.arabicText, W / 2, currentY, W - 240, arabicFontSize * 1.8, true);
      currentY += 35;
    }

    // Elegant Divider
    ctx.strokeStyle = currentStyle.goldColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 120, currentY);
    ctx.lineTo(W / 2 + 120, currentY);
    ctx.stroke();

    ctx.fillStyle = currentStyle.goldColor;
    ctx.beginPath();
    ctx.arc(W / 2, currentY, 5, 0, Math.PI * 2);
    ctx.fill();

    currentY += 45;

    // Bengali Translation
    if (showTranslation && data.bengaliTranslation) {
      ctx.textAlign = 'center';
      ctx.fillStyle = currentStyle.textColor;
      const bnFontSize = fontSize === 'large' ? 28 : 24;
      ctx.font = `500 ${bnFontSize}px "Noto Sans Bengali", sans-serif`;
      currentY = wrapText(`"${data.bengaliTranslation}"`, W / 2, currentY, W - 260, bnFontSize * 1.7);
      currentY += 40;
    }

    // Bottom Watermark / Reference
    ctx.textAlign = 'center';
    ctx.fillStyle = currentStyle.accentColor;
    ctx.font = 'bold 18px "Noto Sans Bengali", sans-serif';
    ctx.fillText(`${data.surahNameEn} (${data.surahNumber}:${data.ayahNumber})`, W / 2, H - 110);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '14px sans-serif';
    ctx.fillText('Al-Quranul Kareem App • Daily Verses', W / 2, H - 85);
  };

  useEffect(() => {
    drawCardOnCanvas();
  }, [theme, showAppIcon, showArabic, showTranslation, fontSize, data]);

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsGenerating(true);
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `Ayah_${data.surahNumber}_${data.ayahNumber}_Al_Quran.png`;
      a.click();
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShareImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsGenerating(true);

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `Ayah_${data.surahNumber}_${data.ayahNumber}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `সূরা ${data.surahNameBn} (${data.ayahNumber})`,
            text: `${data.bengaliTranslation}\n\n(আল-কুরআনুল কারীম অ্যাপ)`,
            files: [file]
          });
        } else if (navigator.share) {
          await navigator.share({
            title: `সূরা ${data.surahNameBn} (${data.ayahNumber})`,
            text: `${data.arabicText}\n\n${data.bengaliTranslation}\n\nসূরা ${data.surahNameBn} (${data.surahNumber}:${data.ayahNumber})`
          });
        } else {
          handleDownloadImage();
        }
      });
    } catch {
      handleDownloadImage();
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyText = () => {
    const text = `${data.arabicText}\n\n"${data.bengaliTranslation}"\n\n— সূরা ${data.surahNameBn} (${data.surahNumber}:${data.ayahNumber})\n(আল-কুরআনুল কারীম অ্যাপ)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 my-auto"
      >
        {/* Top Modal Bar */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-black text-sm text-slate-800 dark:text-slate-100">
                আয়াত শেয়ারিং কার্ড জেনারেটর
              </h3>
              <p className="text-[10px] text-slate-400 font-bold">
                সূরা {data.surahNameBn} • আয়াত #{data.ayahNumber}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Live Canvas Preview */}
        <div className="p-5 bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center">
          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[10px] font-bold text-slate-400 mt-2">
            লাইভ প্রিভিউ (এইচডি রেজোলিউশনে সেভ হবে)
          </span>
        </div>

        {/* Customization Controls */}
        <div className="p-5 space-y-4 max-h-[42vh] overflow-y-auto no-scrollbar">
          {/* 1. Theme Color Selector */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-400 block">
              কার্ডের থিম ডিজাইন:
            </label>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {(Object.keys(THEME_STYLES) as CardTheme[]).map(tKey => {
                const isSelected = theme === tKey;
                return (
                  <button
                    key={tKey}
                    onClick={() => setTheme(tKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <span 
                      className="w-3 h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: THEME_STYLES[tKey].border }}
                    />
                    <span>{THEME_STYLES[tKey].nameBn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Toggle Elements */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-400 block">
              কার্ড উপাদান ও সেটিংস:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <button
                onClick={() => setShowAppIcon(!showAppIcon)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  showAppIcon
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-800 dark:text-emerald-300'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                }`}
              >
                {showAppIcon ? '✓ অ্যাপস আইকন ও লোগো' : '✕ লোগো লুকান'}
              </button>

              <button
                onClick={() => setShowArabic(!showArabic)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  showArabic
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-800 dark:text-emerald-300'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                }`}
              >
                {showArabic ? '✓ আরবি আয়াত' : '✕ শুধু অনুবাদ'}
              </button>

              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  showTranslation
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-800 dark:text-emerald-300'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                }`}
              >
                {showTranslation ? '✓ বাংলা অর্থ' : '✕ অর্থ বাদ দিন'}
              </button>

              <button
                onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                className="p-2.5 rounded-xl border bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-left"
              >
                ফন্ট সাইজ: {fontSize === 'normal' ? 'সাধারণ' : 'বড়'}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <button
            onClick={handleCopyText}
            className="p-3.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-black text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
            title="টেক্সট কপি করুন"
          >
            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
            <span className="hidden sm:inline">কপি</span>
          </button>

          <button
            onClick={handleShareImage}
            disabled={isGenerating}
            className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xs shadow-lg shadow-emerald-700/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Share2 size={16} />
            <span>শেয়ার করুন</span>
          </button>

          <button
            onClick={handleDownloadImage}
            disabled={isGenerating}
            className="py-3.5 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <Download size={16} />
            <span>ডাউনলোড (PNG)</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
