import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Download, Share2, Copy, Check, Sparkles, 
  Palette, Type, Sliders, CheckCircle2,
  Smartphone, Square, LayoutTemplate,
  MessageCircle, Send
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

export type CardTheme = 
  | 'emerald' 
  | 'kaaba' 
  | 'madinah' 
  | 'midnight' 
  | 'royal' 
  | 'sunset' 
  | 'teal' 
  | 'dark';

export type CardAspectRatio = 'post' | 'story' | 'square';
export type CardFrameStyle = 'arabesque' | 'mihrab' | 'modern';

export const AyahSocialCardModal: React.FC<AyahSocialCardModalProps> = ({ isOpen, onClose, data }) => {
  const [theme, setTheme] = useState<CardTheme>('emerald');
  const [aspectRatio, setAspectRatio] = useState<CardAspectRatio>('post');
  const [frameStyle, setFrameStyle] = useState<CardFrameStyle>('arabesque');
  const [showAppIcon, setShowAppIcon] = useState(true);
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [copiedImage, setCopiedImage] = useState(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState(false);
  const [fallbackImageUrl, setFallbackImageUrl] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Theme palettes with rich Islamic color harmony
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
      accentColor: '#34d399',
      goldColor: '#fbbf24',
      nameBn: 'মরকত জান্নাত'
    },
    kaaba: {
      bg1: '#050507',
      bg2: '#18181b',
      border: '#d97706',
      arabicColor: '#fde047',
      textColor: '#fafaf9',
      accentColor: '#f59e0b',
      goldColor: '#eab308',
      nameBn: 'কাবার গিলাফ (কালো-সোনালী)'
    },
    madinah: {
      bg1: '#1c1004',
      bg2: '#451a03',
      border: '#d97706',
      arabicColor: '#fef08a',
      textColor: '#fffbeb',
      accentColor: '#fbbf24',
      goldColor: '#f59e0b',
      nameBn: 'নূরানী মদিনা'
    },
    midnight: {
      bg1: '#030712',
      bg2: '#0f172a',
      border: '#0284c7',
      arabicColor: '#e0f2fe',
      textColor: '#f8fafc',
      accentColor: '#38bdf8',
      goldColor: '#38bdf8',
      nameBn: 'মধ্যরাত আসমান'
    },
    royal: {
      bg1: '#2e1065',
      bg2: '#4c1d95',
      border: '#9333ea',
      arabicColor: '#fef08a',
      textColor: '#faf5ff',
      accentColor: '#c084fc',
      goldColor: '#fbbf24',
      nameBn: 'রাজকীয় আম্বর'
    },
    sunset: {
      bg1: '#3f130b',
      bg2: '#7c2d12',
      border: '#ea580c',
      arabicColor: '#fed7aa',
      textColor: '#fff7ed',
      accentColor: '#fb923c',
      goldColor: '#f59e0b',
      nameBn: 'মরু সূর্যাস্ত'
    },
    teal: {
      bg1: '#042f2e',
      bg2: '#115e59',
      border: '#0d9488',
      arabicColor: '#ccfbf1',
      textColor: '#f0fdfa',
      accentColor: '#2dd4bf',
      goldColor: '#5eead4',
      nameBn: 'শান্ত সমুদ্র'
    },
    dark: {
      bg1: '#09090b',
      bg2: '#18181b',
      border: '#52525b',
      arabicColor: '#f4f4f5',
      textColor: '#e4e4e7',
      accentColor: '#a1a1aa',
      goldColor: '#d4d4d8',
      nameBn: 'স্নিগ্ধ ডার্ক'
    }
  };

  const drawCardOnCanvas = () => {
    if (!isOpen || !data) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Aspect ratio dimensions
    let W = 1080;
    let H = 1350; // default 4:5 (Post)
    if (aspectRatio === 'story') {
      W = 1080;
      H = 1920; // 9:16 (Story)
    } else if (aspectRatio === 'square') {
      W = 1080;
      H = 1080; // 1:1 (Square)
    }

    canvas.width = W;
    canvas.height = H;

    const currentStyle = THEME_STYLES[theme];

    // 1. Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, currentStyle.bg1);
    bgGrad.addColorStop(0.5, currentStyle.bg2);
    bgGrad.addColorStop(1, currentStyle.bg1);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Subtle star dust overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let i = 0; i < 40; i++) {
      const rx = (Math.sin(i * 99) * 0.5 + 0.5) * W;
      const ry = (Math.cos(i * 33) * 0.5 + 0.5) * H;
      const r = (i % 3) + 1;
      ctx.beginPath();
      ctx.arc(rx, ry, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Decorative Frame Styles
    const margin = 48;
    const innerMargin = 64;

    if (frameStyle === 'arabesque') {
      // Geometric Arabesque with Corner Stars
      ctx.strokeStyle = currentStyle.border;
      ctx.lineWidth = 4;
      ctx.strokeRect(margin, margin, W - margin * 2, H - margin * 2);

      ctx.strokeStyle = currentStyle.goldColor;
      ctx.lineWidth = 2;
      ctx.setLineDash([12, 8]);
      ctx.strokeRect(innerMargin, innerMargin, W - innerMargin * 2, H - innerMargin * 2);
      ctx.setLineDash([]);

      // Corner 8-pointed star rosettes
      const drawStarRosette = (cx: number, cy: number) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.strokeStyle = currentStyle.goldColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(-16, -16, 32, 32);
        ctx.rotate(Math.PI / 4);
        ctx.strokeRect(-16, -16, 32, 32);
        ctx.fillStyle = currentStyle.goldColor;
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      drawStarRosette(innerMargin, innerMargin);
      drawStarRosette(W - innerMargin, innerMargin);
      drawStarRosette(W - innerMargin, H - innerMargin);
      drawStarRosette(innerMargin, H - innerMargin);

    } else if (frameStyle === 'mihrab') {
      // Islamic Mihrab Arch
      ctx.strokeStyle = currentStyle.border;
      ctx.lineWidth = 3;
      ctx.strokeRect(margin, margin, W - margin * 2, H - margin * 2);

      // Pointed Mihrab Arch at top
      ctx.strokeStyle = currentStyle.goldColor;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(innerMargin, innerMargin + 140);
      ctx.quadraticCurveTo(W / 2, innerMargin - 20, W - innerMargin, innerMargin + 140);
      ctx.stroke();

      // Hanging Lantern (Fanous)
      const lanternX = W / 2;
      const lanternY = innerMargin + 40;
      ctx.strokeStyle = currentStyle.goldColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(lanternX, innerMargin + 10);
      ctx.lineTo(lanternX, lanternY);
      ctx.stroke();

      ctx.fillStyle = currentStyle.goldColor;
      ctx.beginPath();
      ctx.arc(lanternX, lanternY + 12, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(lanternX, lanternY + 12, 18, 0, Math.PI * 2);
      ctx.stroke();

    } else {
      // Clean Modern Luxury
      ctx.strokeStyle = currentStyle.goldColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(margin, margin, W - margin * 2, H - margin * 2, 32);
      ctx.stroke();

      ctx.strokeStyle = currentStyle.border;
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.roundRect(innerMargin, innerMargin, W - innerMargin * 2, H - innerMargin * 2, 24);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Dynamic starting Y based on aspect ratio
    let currentY = aspectRatio === 'story' ? 240 : aspectRatio === 'square' ? 120 : 160;

    // 3. Top Bismillah & Header
    if (showAppIcon) {
      // Rub el Hizb Mini Icon
      const iconCenterX = W / 2;
      const iconCenterY = currentY - 20;

      ctx.save();
      ctx.translate(iconCenterX, iconCenterY);
      ctx.fillStyle = currentStyle.goldColor;
      ctx.fillRect(-15, -15, 30, 30);
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(-15, -15, 30, 30);
      ctx.restore();

      currentY += 28;
      ctx.textAlign = 'center';
      ctx.fillStyle = currentStyle.goldColor;
      ctx.font = 'bold 24px "Amiri", "Noto Sans Bengali", sans-serif';
      ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', W / 2, currentY);

      currentY += 34;
      ctx.fillStyle = currentStyle.accentColor;
      ctx.font = '16px "Noto Sans Bengali", sans-serif';
      ctx.fillText('পবিত্র কুরআনের চিরন্তন বাণী • আল-কুরআনুল কারীম', W / 2, currentY);

      currentY += 45;
    } else {
      currentY += 40;
    }

    // 4. Surah & Ayah Badge
    ctx.textAlign = 'center';
    const badgeText = `সূরা ${data.surahNameBn} • আয়াত ${data.ayahNumber}`;
    ctx.font = 'bold 26px "Noto Sans Bengali", sans-serif';
    const textWidth = ctx.measureText(badgeText).width;

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

    currentY += 75;

    // Helper: Word wrap text
    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
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

    // 5. Arabic Ayah
    if (showArabic && data.arabicText) {
      ctx.textAlign = 'center';
      ctx.fillStyle = currentStyle.arabicColor;
      const baseArabicSize = aspectRatio === 'square' ? (fontSize === 'large' ? 36 : 30) : (fontSize === 'large' ? 44 : 38);
      ctx.font = `bold ${baseArabicSize}px "Amiri", "Scheherazade New", serif`;
      currentY = wrapText(data.arabicText, W / 2, currentY, W - 220, baseArabicSize * 1.85);
      currentY += 35;
    }

    // 6. Center Decorative Rosette Divider
    ctx.strokeStyle = currentStyle.goldColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 120, currentY);
    ctx.lineTo(W / 2 + 120, currentY);
    ctx.stroke();

    ctx.fillStyle = currentStyle.goldColor;
    ctx.beginPath();
    ctx.arc(W / 2, currentY, 6, 0, Math.PI * 2);
    ctx.fill();

    currentY += 45;

    // 7. Bengali Translation
    if (showTranslation && data.bengaliTranslation) {
      ctx.textAlign = 'center';
      ctx.fillStyle = currentStyle.textColor;
      const baseBnSize = aspectRatio === 'square' ? (fontSize === 'large' ? 24 : 20) : (fontSize === 'large' ? 28 : 24);
      ctx.font = `500 ${baseBnSize}px "Noto Sans Bengali", sans-serif`;
      currentY = wrapText(`"${data.bengaliTranslation}"`, W / 2, currentY, W - 240, baseBnSize * 1.75);
      currentY += 40;
    }

    // 8. Bottom Brand & Da'wah Signature
    const footerY = H - (aspectRatio === 'story' ? 140 : 105);
    ctx.textAlign = 'center';
    ctx.fillStyle = currentStyle.accentColor;
    ctx.font = 'bold 18px "Noto Sans Bengali", sans-serif';
    ctx.fillText(`${data.surahNameEn} (${data.surahNumber}:${data.ayahNumber})`, W / 2, footerY - 26);

    ctx.fillStyle = currentStyle.goldColor;
    ctx.font = 'bold 15px "Noto Sans Bengali", sans-serif';
    ctx.fillText('আল- শাহিন ( Shahin) Quran App', W / 2, footerY);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.font = '12px "Noto Sans Bengali", sans-serif';
    ctx.fillText('পবিত্র কুরআনের চিরন্তন আলো ছড়িয়ে দিন • সদকায়ে জারিয়াহ', W / 2, footerY + 22);
  };

  useEffect(() => {
    if (isOpen && data) {
      drawCardOnCanvas();
    }
  }, [isOpen, data, theme, aspectRatio, frameStyle, showAppIcon, showArabic, showTranslation, fontSize]);

  // Robust Multi-Stage Downloader
  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;
    setIsGenerating(true);

    const fileName = `Ayah_${data.surahNumber}_${data.ayahNumber}_Al_Shahin_Quran.png`;

    try {
      // Stage 1: Try canvas.toBlob with Object URL (safest and highest fidelity)
      canvas.toBlob((blob) => {
        if (blob) {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
          setDownloadSuccessToast(true);
          setTimeout(() => setDownloadSuccessToast(false), 3500);
          setIsGenerating(false);
        } else {
          // Stage 2: Fallback to Data URL
          fallbackDataUrlDownload();
        }
      }, 'image/png');
    } catch {
      fallbackDataUrlDownload();
    }
  };

  const fallbackDataUrlDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas || !data) {
      setIsGenerating(false);
      return;
    }

    try {
      const dataUrl = canvas.toDataURL('image/png');
      setFallbackImageUrl(dataUrl);

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `Ayah_${data.surahNumber}_${data.ayahNumber}_Al_Shahin_Quran.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccessToast(true);
      setTimeout(() => setDownloadSuccessToast(false), 3500);
    } catch (e) {
      console.warn("Direct download triggered fallback link", e);
    } finally {
      setIsGenerating(false);
    }
  };

  // Copy Image Directly to OS Clipboard (For WhatsApp Web, Facebook, Instagram paste)
  const handleCopyImageToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        if (navigator.clipboard && window.ClipboardItem) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            setCopiedImage(true);
            setTimeout(() => setCopiedImage(false), 2500);
            return;
          } catch {
            // ClipboardItem might fail in some browsers
          }
        }
        handleDownloadImage();
      }, 'image/png');
    } catch {
      handleDownloadImage();
    }
  };

  // Direct Social Share URLs
  const handleShareToWhatsApp = () => {
    if (!data) return;
    const text = encodeURIComponent(
      `📖 *সূরা ${data.surahNameBn} (আয়াত ${data.ayahNumber})*\n\n` +
      `${data.arabicText}\n\n` +
      `"${data.bengaliTranslation}"\n\n` +
      `— আল- শাহিন ( Shahin) Quran App\n` +
      `পবিত্র কুরআনের আলো ছড়িয়ে দিন`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareToTelegram = () => {
    if (!data) return;
    const text = encodeURIComponent(
      `📖 সূরা ${data.surahNameBn} (আয়াত ${data.ayahNumber})\n\n` +
      `${data.arabicText}\n\n` +
      `"${data.bengaliTranslation}"\n\n` +
      `— আল- শাহিন ( Shahin) Quran App`
    );
    window.open(`https://t.me/share/url?text=${text}`, '_blank');
  };

  const handleShareImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;
    setIsGenerating(true);

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          setIsGenerating(false);
          return;
        }
        const file = new File([blob], `Ayah_${data.surahNumber}_${data.ayahNumber}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `সূরা ${data.surahNameBn} (${data.ayahNumber})`,
            text: `${data.bengaliTranslation}\n\n(আল- শাহিন ( Shahin) Quran)`,
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
        setIsGenerating(false);
      });
    } catch {
      handleDownloadImage();
    }
  };

  const handleCopyText = () => {
    if (!data) return;
    const text = `${data.arabicText}\n\n"${data.bengaliTranslation}"\n\n— সূরা ${data.surahNameBn} (${data.surahNumber}:${data.ayahNumber})\n(আল- শাহিন ( Shahin) Quran)`;
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 my-auto relative"
      >
        {/* Success Toast */}
        <AnimatePresence>
          {downloadSuccessToast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white text-xs font-black py-2.5 px-4 rounded-full shadow-xl flex items-center gap-2 border border-emerald-400"
            >
              <CheckCircle2 size={16} />
              <span>✓ এইচডি কার্ড সফলভাবে ডাউনলোড হয়েছে!</span>
            </motion.div>
          )}
          {copiedImage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-blue-600 text-white text-xs font-black py-2.5 px-4 rounded-full shadow-xl flex items-center gap-2 border border-blue-400"
            >
              <CheckCircle2 size={16} />
              <span>✓ ছবি ক্লিপবোর্ডে কপি হয়েছে (Ctrl+V দিয়ে পেস্ট করুন)</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Modal Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-black text-sm text-slate-800 dark:text-slate-100">
                সোশ্যাল মিডিয়া আয়াত কার্ড
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
        <div className="p-4 sm:p-5 bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center">
          <div className={`w-full max-w-[260px] sm:max-w-[300px] ${aspectRatio === 'story' ? 'aspect-[9/16]' : aspectRatio === 'square' ? 'aspect-square' : 'aspect-[4/5]'} rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300`}>
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[10px] font-bold text-slate-400 mt-2">
            এইচডি কোয়ালিটিতে ইনস্টাগ্রাম, ফেসবুক ও হোয়াটসঅ্যাপে শেয়ার উপযোগী
          </span>
        </div>

        {/* Customization Controls */}
        <div className="p-4 sm:p-5 space-y-4 max-h-[38vh] overflow-y-auto no-scrollbar">
          {/* Format / Aspect Ratio Selector */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
              সোশ্যাল মিডিয়া সাইজ:
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setAspectRatio('post')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  aspectRatio === 'post'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <LayoutTemplate size={14} />
                <span>পোস্ট (৪:৫)</span>
              </button>

              <button
                onClick={() => setAspectRatio('story')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  aspectRatio === 'story'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Smartphone size={14} />
                <span>স্টোরি (৯:১৬)</span>
              </button>

              <button
                onClick={() => setAspectRatio('square')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  aspectRatio === 'square'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Square size={14} />
                <span>বর্গাকার (১:১)</span>
              </button>
            </div>
          </div>

          {/* Theme Color Selector */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
              কালার থিম নির্বাচন:
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
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    <span 
                      className="w-3 h-3 rounded-full shrink-0 border border-black/10" 
                      style={{ backgroundColor: THEME_STYLES[tKey].border }}
                    />
                    <span>{THEME_STYLES[tKey].nameBn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Frame Style Selector */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
              ইসলামিক ফ্রেম আর্ট:
            </label>
            <div className="grid grid-cols-3 gap-1.5 text-xs font-bold">
              <button
                onClick={() => setFrameStyle('arabesque')}
                className={`p-2 rounded-xl border text-center transition-all ${
                  frameStyle === 'arabesque'
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-600'
                }`}
              >
                জ্যামিতিক ফ্রেম
              </button>

              <button
                onClick={() => setFrameStyle('mihrab')}
                className={`p-2 rounded-xl border text-center transition-all ${
                  frameStyle === 'mihrab'
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-600'
                }`}
              >
                মেহরাব ও ফানুস
              </button>

              <button
                onClick={() => setFrameStyle('modern')}
                className={`p-2 rounded-xl border text-center transition-all ${
                  frameStyle === 'modern'
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-600'
                }`}
              >
                মডার্ন লাক্সারি
              </button>
            </div>
          </div>

          {/* Toggle Elements & Typography */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
              কার্ডের উপাদান ও ফন্ট:
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
                {showAppIcon ? '✓ বিসমিল্লাহ ও হেডার' : '✕ হেডার বন্ধ'}
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
                {showTranslation ? '✓ বাংলা অর্থ' : '✕ অর্থ বন্ধ'}
              </button>

              <button
                onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                className="p-2.5 rounded-xl border bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-left"
              >
                ফন্ট সাইজ: {fontSize === 'normal' ? 'সাধারণ' : 'বড়'}
              </button>
            </div>
          </div>

          {/* Social Quick Share Row */}
          <div className="pt-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1.5">
              দ্রুত সোশ্যাল মিডিয়ায় শেয়ার:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShareToWhatsApp}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-black flex items-center justify-center gap-1.5 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleShareToTelegram}
                className="flex-1 py-2 px-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 text-xs font-black flex items-center justify-center gap-1.5 hover:bg-sky-100 transition-colors"
              >
                <Send size={14} />
                <span>Telegram</span>
              </button>

              <button
                onClick={handleCopyImageToClipboard}
                className="flex-1 py-2 px-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-black flex items-center justify-center gap-1.5 hover:bg-indigo-100 transition-colors"
                title="সরাসরি ছবি কপি করুন"
              >
                <Copy size={14} />
                <span>ছবি কপি</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/50">
          <button
            onClick={handleCopyText}
            className="p-3.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-black text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
            title="টেক্সট কপি করুন"
          >
            {copiedText ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
            <span className="hidden sm:inline">টেক্সট</span>
          </button>

          <button
            onClick={handleShareImage}
            disabled={isGenerating}
            className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xs shadow-lg shadow-emerald-700/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Share2 size={16} />
            <span>সোশ্যাল শেয়ার</span>
          </button>

          <button
            onClick={handleDownloadImage}
            disabled={isGenerating}
            className="py-3.5 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-100"
          >
            <Download size={16} className={isGenerating ? 'animate-bounce' : ''} />
            <span>ডাউনলোড (PNG)</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AyahSocialCardModal;
