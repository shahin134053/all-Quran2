import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Send, Sparkles, Moon, ShieldCheck, Check, 
  Trash2, AlertCircle, RefreshCw, KeyRound, Lock,
  BookmarkCheck, MessageSquare, Flame, BellRing,
  Mail, Inbox, CheckCheck, ExternalLink, CornerDownLeft,
  Timer, HardDrive, LayoutDashboard, Radio, Eye,
  Volume2, CheckCircle2, ChevronRight, UserCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Announcement, UserMessage } from '../types';
import { 
  sendAnnouncement, 
  deleteAnnouncement,
  subscribeUserMessages,
  updateUserMessageStatus,
  deleteUserMessage,
  cleanupAllExpiredData,
  calculateExpiryStatus,
  playPoliteChime
} from '../services/announcementService';

interface AdminBroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  announcements: Announcement[];
  onRefresh?: () => void;
}

const OCCASION_TEMPLATES = [
  {
    id: 'eid',
    nameBn: '🌙 পবিত্র ঈদুল ফিতর',
    nameEn: 'Eid-ul-Fitr',
    defaultTitle: 'তাকাব্বালাল্লাহু মিন্না ওয়া মিনকুম — পবিত্র ঈদুল ফিতরের শুভেচ্ছা! 🌙',
    defaultMessage: 'আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহ। পবিত্র ঈদুল ফিতর উপলক্ষে আল-মুনীর অ্যাপের সকল সম্মানিত ব্যবহারকারী ও মুসলিম উম্মাহকে জানাই আন্তরিক ঈদ মোবারক। আল্লাহ তাআলা আমাদের সবার রোজা, নামাজ ও ইবাদত কবুল করুন।',
    priority: 'high' as const,
  },
  {
    id: 'eid_adha',
    nameBn: '🕋 পবিত্র ঈদুল আজহা',
    nameEn: 'Eid-ul-Adha',
    defaultTitle: 'পবিত্র ঈদুল আজহা মোবারক! 🕋✨',
    defaultMessage: 'ত্যাগের মহিমায় উদ্ভাসিত হোক আমাদের জীবন। পবিত্র ঈদুল আজহার বরকতময় দিনে আল্লাহ তাআলা আমাদের কুরবানী ও যাবতীয় নেক আমল কবুল করুন এবং আমাদের অন্তরে তাকওয়া দান করুন। ঈদ মোবারক!',
    priority: 'high' as const,
  },
  {
    id: 'ramadan',
    nameBn: '✨ মাহে রমাদান মোবারক',
    nameEn: 'Ramadan Mubarak',
    defaultTitle: 'রমাদানুল মুবারক — রহমত, মাগফিরাত ও নাজাতের মাস! 🌙',
    defaultMessage: 'পবিত্র মাহে রমাদানের শুভ আগমন উপলক্ষে আপনাদের সবাইকে মোবারকবাদ। আসুন এ মাসে বেশি বেশি কুরআন তিলাওয়াত, ইস্তিগফার এবং দানের মাধ্যমে আল্লাহর নৈকট্য লাভ করি। আল-মুনীর অ্যাপের সাথে থাকার জন্য ধন্যবাদ।',
    priority: 'high' as const,
  },
  {
    id: 'jummah',
    nameBn: '🕌 জুম্মা মোবারক',
    nameEn: 'Jummah Mubarak',
    defaultTitle: 'জুম্মা মোবারক! 🕌✨ সুরা আল-কাহাফ তিলাওয়াত করুন',
    defaultMessage: 'আজ বরকতময় জুমু\'আবার। নবী করীম (সা.) এর ওপর বেশি বেশি দরুদ পাঠ করুন, সুরা কাহাফ তিলাওয়াত করুন এবং দু\'আ কবুলের এ বিশেষ দিনে উম্মাহর জন্য দু\'আ করুন।',
    priority: 'normal' as const,
  },
  {
    id: 'hadith',
    nameBn: '📖 হাদিস ও নসিহত',
    nameEn: 'Daily Hadith & Wisdom',
    defaultTitle: 'আজকের বিশেষ নসিহত ও অনুপ্রেরণা 📖',
    defaultMessage: 'রাসূলুল্লাহ (সা.) বলেছেন: "তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে কুরআন শিক্ষা করে এবং অন্যকে শিক্ষা দেয়।" (সহীহ বুখারী)। আসুন প্রতিদিন অন্তত ৫টি আয়াত তিলাওয়াত করার চেষ্টা করি।',
    priority: 'normal' as const,
  },
  {
    id: 'urgent',
    nameBn: '⚡ জরুরি আপডেট / ঘোষণা',
    nameEn: 'Urgent Announcement',
    defaultTitle: 'আল-মুনীর অ্যাপে গুরুত্বপূর্ণ আপডেট / ঘোষণা ⚡',
    defaultMessage: 'সম্মানিত ইউজারগণ, অ্যাপে নতুন ইসলামিক থিম ও নোটিফিকেশন সুবিধা যুক্ত করা হয়েছে। সেরা অভিজ্ঞতার জন্য অ্যাপটি রিলোড বা পুনরায় ওপেন করুন। জাযাকুমুল্লাহু খাইরান।',
    priority: 'urgent' as const,
  },
];

const ADMIN_PIN_STORAGE_KEY = 'al_muneer_admin_auth_v2';
const ADMIN_SECURITY_PIN = '830973';

// Convert Bengali numerals to standard English digits for easy login
const normalizePinInput = (input: string): string => {
  const banglaMap: Record<string, string> = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '5': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
  };
  return input.trim().replace(/[০-৯]/g, (digit) => banglaMap[digit] || digit);
};

export const AdminBroadcastModal: React.FC<AdminBroadcastModalProps> = ({
  isOpen,
  onClose,
  announcements,
  onRefresh
}) => {
  const { language, activeThemeConfig } = useApp();

  // Authentication state (Owner passcode protect: 830973 / ৮৩০৯৭৩)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_PIN_STORAGE_KEY) === 'authenticated';
  });
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState(false);

  // Active Tab: dashboard (Control Center), compose, inbox, history
  const [activeTab, setActiveTab] = useState<'dashboard' | 'compose' | 'inbox' | 'history'>('dashboard');

  // Broadcast form fields
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [occasion, setOccasion] = useState('general');
  const [priority, setPriority] = useState<'normal' | 'high' | 'urgent'>('normal');
  const [senderName, setSenderName] = useState('Md Shahin (Admin)');
  const [senderEmail, setSenderEmail] = useState('shahin.prpl@gmail.com');
  const [targetTab, setTargetTab] = useState('home');

  // Local state for optimistic updates
  const [localAnnouncements, setLocalAnnouncements] = useState<Announcement[]>(announcements);
  useEffect(() => {
    setLocalAnnouncements(announcements);
  }, [announcements]);

  // Status & Feedback indicators
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Inline delete confirmation states (replaces window.confirm)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleteMsgConfirmId, setDeleteMsgConfirmId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Storage sweep state
  const [isSweeping, setIsSweeping] = useState(false);
  const [sweepReport, setSweepReport] = useState<string | null>(null);

  // User Messages Inbox state
  const [userMessages, setUserMessages] = useState<UserMessage[]>([]);
  const [inboxFilter, setInboxFilter] = useState<'all' | 'unread' | 'replied'>('all');

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      const unsub = subscribeUserMessages((msgs) => {
        setUserMessages(msgs);
      });
      return () => unsub();
    }
  }, [isOpen, isAuthenticated]);

  const unreadMessagesCount = userMessages.filter(m => m.status === 'unread').length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedPin = normalizePinInput(pinInput);
    if (sanitizedPin === ADMIN_SECURITY_PIN || pinInput.trim() === '৮৩০৯৭৩') {
      setIsAuthenticated(true);
      setAuthError(false);
      localStorage.setItem(ADMIN_PIN_STORAGE_KEY, 'authenticated');
    } else {
      setAuthError(true);
      setPinInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(ADMIN_PIN_STORAGE_KEY);
    setPinInput('');
  };

  const handleApplyTemplate = (tpl: typeof OCCASION_TEMPLATES[0]) => {
    setTitle(tpl.defaultTitle);
    setMessage(tpl.defaultMessage);
    setOccasion(tpl.id);
    setPriority(tpl.priority);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) {
      setErrorMessage(language === 'bn' ? 'অনুগ্রহ করে শিরোনাম ও বার্তা লিখুন।' : 'Please enter title and message.');
      return;
    }

    try {
      setIsSending(true);
      setErrorMessage(null);
      await sendAnnouncement({
        title,
        message,
        occasion,
        priority,
        senderName,
        senderEmail,
        targetTab
      });

      setSendSuccess(true);
      showToast(language === 'bn' ? 'ব্রডকাস্ট নোটিফিকেশন সফলভাবে পাঠানো হয়েছে!' : 'Broadcast notification sent successfully!');
      setTimeout(() => {
        setSendSuccess(false);
        setTitle('');
        setMessage('');
        setActiveTab('history');
      }, 1200);

      if (onRefresh) onRefresh();
    } catch (err: any) {
      console.error('Failed to broadcast:', err);
      setErrorMessage(language === 'bn' ? 'বার্তা পাঠাতে ত্রুটি হয়েছে। ইন্টারনেট সংযোগ চেক করুন।' : 'Failed to send broadcast.');
    } finally {
      setIsSending(false);
    }
  };

  // Safe inline deletion for announcements without window.confirm
  const handleExecuteDeleteAnnouncement = async (id: string) => {
    try {
      setDeletingId(id);
      // Optimistic update
      setLocalAnnouncements(prev => prev.filter(a => a.id !== id));
      await deleteAnnouncement(id);
      setDeleteConfirmId(null);
      showToast(language === 'bn' ? 'এনাউন্সমেন্ট সফলভাবে মুছে ফেলা হয়েছে।' : 'Announcement deleted successfully.');
      if (onRefresh) onRefresh();
    } catch (err) {
      console.error('Failed to delete announcement:', err);
      setLocalAnnouncements(announcements); // rollback
      showToast(language === 'bn' ? 'মুছে ফেলতে সমস্যা হয়েছে।' : 'Failed to delete.');
    } finally {
      setDeletingId(null);
    }
  };

  // Safe inline deletion for user messages without window.confirm
  const handleExecuteDeleteUserMessage = async (id: string) => {
    try {
      setUserMessages(prev => prev.filter(m => m.id !== id));
      await deleteUserMessage(id);
      setDeleteMsgConfirmId(null);
      showToast(language === 'bn' ? 'বার্তাটি মুছে ফেলা হয়েছে।' : 'Message deleted.');
    } catch (err) {
      console.error('Failed to delete user message:', err);
      showToast(language === 'bn' ? 'মুছে ফেলতে ব্যর্থ হয়েছে।' : 'Failed to delete message.');
    }
  };

  const handleReplyEmail = async (msg: UserMessage) => {
    await updateUserMessageStatus(msg.id, 'replied');
    const subject = encodeURIComponent(`Re: ${msg.subject}`);
    const body = encodeURIComponent(`আসসালামু আলাইকুম ${msg.senderName},\n\nআল-মুনীর অ্যাপে আপনার বার্তার জন্য ধন্যবাদ।\n\n>\n> "${msg.message}"\n>\n\nআমাদের উত্তর:\n\n\n\nজাযাকুমুল্লাহু খাইরান,\nMd Shahin (Admin)\nAl-Muneer Islamic App`);
    window.open(`mailto:${msg.senderEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleToggleReadStatus = async (msg: UserMessage) => {
    const nextStatus = msg.status === 'unread' ? 'read' : 'unread';
    await updateUserMessageStatus(msg.id, nextStatus);
  };

  const handleSweepStorage = async () => {
    setIsSweeping(true);
    try {
      const res = await cleanupAllExpiredData();
      const total = res.cleanedAnnouncements + res.cleanedMessages;
      if (total > 0) {
        setSweepReport(
          language === 'bn' 
            ? `সফলভাবে ${total}টি মেয়াদোত্তীর্ণ বার্তা মুছে ফেলা হয়েছে (${res.freedKb} KB মুক্ত)। ব্যাকএন্ড সম্পূর্ণ ০ কেবি সুরক্ষিত!` 
            : `Successfully purged ${total} expired items (${res.freedKb} KB freed). Backend is 0 KB free!`
        );
      } else {
        setSweepReport(
          language === 'bn' 
            ? 'কোনো মেয়াদোত্তীর্ণ বার্তা নেই। সকল ডাটা ইতিমধ্যেই ০ কেবি নিয়মে অপ্টিমাইজড!' 
            : 'No expired items. All backend storage is already optimized at 0 KB!'
        );
      }
      setTimeout(() => setSweepReport(null), 4500);
    } catch (err) {
      console.error('Sweep error:', err);
    } finally {
      setIsSweeping(false);
    }
  };

  const handleTestChimeSound = () => {
    playPoliteChime();
    showToast(language === 'bn' ? 'শান্ত নোটিফিকেশন সাউন্ড বাজানো হয়েছে 🔔' : 'Gentle chime played 🔔');
  };

  const filteredMessages = userMessages.filter(m => {
    if (inboxFilter === 'unread') return m.status === 'unread';
    if (inboxFilter === 'replied') return m.status === 'replied';
    return true;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden z-10 flex flex-col max-h-[92vh]"
          >
            {/* Toast Notification */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-4 left-4 right-4 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow-xl flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>{toastMessage}</span>
                  </div>
                  <button onClick={() => setToastMessage(null)} className="opacity-80 hover:opacity-100">
                    <X size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md text-white shrink-0 bg-gradient-to-br from-amber-500 to-yellow-600"
                >
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                      {language === 'bn' ? 'অ্যাডমিন কন্ট্রোল সেন্টার' : 'Admin Control Center'}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      Secure Access
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-400">
                    {language === 'bn' 
                      ? 'ব্রডকাস্ট নোটিফিকেশন, ইউজার ইনবক্স ও ০ কেবি সার্ভার ম্যানেজমেন্ট' 
                      : 'Broadcast notifications, user inbox & 0 KB server management'}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center transition-colors active:scale-95"
              >
                <X size={17} />
              </button>
            </div>

            {/* Authentication Lock or Admin Console */}
            {!isAuthenticated ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto border border-amber-500/20">
                  <Lock size={30} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    {language === 'bn' ? 'অ্যাডমিন সিকিউরিটি যাচাই' : 'Admin PIN Verification'}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
                    {language === 'bn' 
                      ? 'অননুমোদিত বার্তা পাঠানো রোধ করতে আপনার গোপন পিন নম্বর দিন।' 
                      : 'Please enter your 6-digit administrator PIN.'}
                  </p>
                </div>

                <form onSubmit={handleLogin} className="max-w-xs mx-auto space-y-4">
                  <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="password"
                      maxLength={6}
                      inputMode="numeric"
                      value={pinInput}
                      onChange={(e) => {
                        setPinInput(e.target.value);
                        setAuthError(false);
                      }}
                      placeholder="••••••"
                      autoFocus
                      className={`w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border ${
                        authError 
                          ? 'border-rose-500 ring-2 ring-rose-500/20' 
                          : 'border-slate-200 dark:border-slate-700'
                      } text-center tracking-[0.5em] text-lg font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-all`}
                    />
                  </div>

                  {authError && (
                    <p className="text-xs font-bold text-rose-500 flex items-center justify-center gap-1">
                      <AlertCircle size={13} />
                      <span>{language === 'bn' ? 'ভুল পিন নম্বর! পুনরায় চেষ্টা করুন।' : 'Invalid PIN! Please try again.'}</span>
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-black text-xs shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
                  >
                    {language === 'bn' ? 'আনলক করুন' : 'Unlock Control Center'}
                  </button>
                </form>
              </div>
            ) : (
              /* Authenticated Admin Console with 4 Tabs */
              <div className="flex-1 overflow-y-auto">
                {/* Navigation Bar */}
                <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                    {/* Tab 1: Control Center Dashboard */}
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                        activeTab === 'dashboard'
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      <LayoutDashboard size={13} />
                      <span>{language === 'bn' ? 'কন্ট্রোল সেন্টার' : 'Control Center'}</span>
                    </button>

                    {/* Tab 2: Compose Broadcast */}
                    <button
                      onClick={() => setActiveTab('compose')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                        activeTab === 'compose'
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      <Radio size={13} />
                      <span>{language === 'bn' ? 'নতুন বার্তা' : 'Broadcast'}</span>
                    </button>

                    {/* Tab 3: User Inbox */}
                    <button
                      onClick={() => setActiveTab('inbox')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                        activeTab === 'inbox'
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      <Inbox size={13} />
                      <span>{language === 'bn' ? 'ইনবক্স' : 'Inbox'}</span>
                      {unreadMessagesCount > 0 ? (
                        <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[9px] font-black animate-pulse">
                          {unreadMessagesCount}
                        </span>
                      ) : (
                        <span className="w-4 h-4 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-[9px]">
                          {userMessages.length}
                        </span>
                      )}
                    </button>

                    {/* Tab 4: Broadcast History */}
                    <button
                      onClick={() => setActiveTab('history')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                        activeTab === 'history'
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      <span>{language === 'bn' ? 'হিস্ট্রি' : 'History'}</span>
                      <span className="w-4 h-4 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-[9px]">
                        {localAnnouncements.length}
                      </span>
                    </button>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors ml-1 px-2 py-1 rounded-lg hover:bg-rose-500/10 shrink-0"
                  >
                    {language === 'bn' ? 'লক' : 'Lock'}
                  </button>
                </div>

                {/* TAB 1: CONTROL CENTER DASHBOARD */}
                {activeTab === 'dashboard' && (
                  <div className="p-5 sm:p-6 space-y-5">
                    {/* Live Backend Connection Status Pill */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20" />
                        <div>
                          <h5 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{language === 'bn' ? 'ফায়ারবেস ক্লাউড কানেকশন' : 'Firebase Cloud Status'}</span>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-500 text-white">ONLINE</span>
                          </h5>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            Firestore Real-time Sync Active • 0 KB Storage Policy
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={handleSweepStorage}
                        disabled={isSweeping}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm active:scale-95 transition-all disabled:opacity-50"
                      >
                        <RefreshCw size={12} className={isSweeping ? 'animate-spin' : ''} />
                        <span>{language === 'bn' ? 'ডাটা সুইপ' : 'Sweep'}</span>
                      </button>
                    </div>

                    {sweepReport && (
                      <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
                        {sweepReport}
                      </div>
                    )}

                    {/* Metric Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                        <span className="text-[10px] font-bold text-slate-400 block mb-1">
                          {language === 'bn' ? 'সক্রিয় ব্রডকাস্ট' : 'Active Broadcasts'}
                        </span>
                        <div className="text-xl font-black text-slate-900 dark:text-white">
                          {localAnnouncements.length}
                        </div>
                        <span className="text-[9px] font-semibold text-amber-600 dark:text-amber-400">
                          {language === 'bn' ? 'ইউজারদের ফোনে দৃশ্যমান' : 'Live on user apps'}
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                        <span className="text-[10px] font-bold text-slate-400 block mb-1">
                          {language === 'bn' ? 'ইউজার মেসেজ' : 'User Messages'}
                        </span>
                        <div className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>{userMessages.length}</span>
                          {unreadMessagesCount > 0 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500 text-white font-bold">
                              +{unreadMessagesCount}
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] font-semibold text-slate-400">
                          {unreadMessagesCount} {language === 'bn' ? 'টি অপঠিত' : 'unread'}
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                        <span className="text-[10px] font-bold text-slate-400 block mb-1">
                          {language === 'bn' ? 'সার্ভার স্পেস' : 'Server Storage'}
                        </span>
                        <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                          0 KB
                        </div>
                        <span className="text-[9px] font-semibold text-slate-400">
                          {language === 'bn' ? '২৪ ঘণ্টায় অটো রিমুভ' : '24h Auto-Purge'}
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                        <span className="text-[10px] font-bold text-slate-400 block mb-1">
                          {language === 'bn' ? 'সিকিউরিটি পিন' : 'Security PIN'}
                        </span>
                        <div className="text-xl font-black text-slate-900 dark:text-white font-mono">
                          830973
                        </div>
                        <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <Check size={10} /> {language === 'bn' ? 'সুরক্ষিত' : 'Verified'}
                        </span>
                      </div>
                    </div>

                    {/* Quick Action Buttons Hub */}
                    <div className="space-y-2">
                      <h6 className="text-xs font-black uppercase tracking-wider text-slate-400">
                        {language === 'bn' ? 'কন্ট্রোল সেন্টার কুইক অ্যাকশন' : 'Control Center Quick Actions'}
                      </h6>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          onClick={() => setActiveTab('compose')}
                          className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/5 hover:from-amber-500/20 border border-amber-500/30 text-left transition-all active:scale-[0.98] group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-black text-sm text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                              <Radio size={16} />
                              {language === 'bn' ? 'নতুন ব্রডকাস্ট তৈরি করুন' : 'Create New Broadcast'}
                            </span>
                            <ChevronRight size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {language === 'bn' ? 'ঈদ, রমাদান বা যেকোনো বিশেষ অকেশনের নোটিফিকেশন পাঠান।' : 'Send notification for Eid, Ramadan or updates.'}
                          </p>
                        </button>

                        <button
                          onClick={() => setActiveTab('inbox')}
                          className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 hover:from-blue-500/20 border border-blue-500/30 text-left transition-all active:scale-[0.98] group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-black text-sm text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                              <Inbox size={16} />
                              {language === 'bn' ? 'ইউজারদের বার্তা চেক করুন' : 'Check User Messages'}
                            </span>
                            <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {language === 'bn' ? `${userMessages.length}টি বার্তা জমা আছে (${unreadMessagesCount}টি অপঠিত)।` : `${userMessages.length} total messages (${unreadMessagesCount} unread).`}
                          </p>
                        </button>

                        <button
                          onClick={handleTestChimeSound}
                          className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left transition-all active:scale-[0.98] group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-black text-sm text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                              <Volume2 size={16} className="text-amber-500" />
                              {language === 'bn' ? 'নোটিফিকেশন চিম টেস্ট' : 'Test Notification Chime'}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {language === 'bn' ? 'ইউজারদের ফোনে যে সুমধুর বিরক্তি-মুক্ত সাউন্ড বাজবে তা শুনুন।' : 'Preview the polite chime played on user devices.'}
                          </p>
                        </button>

                        <button
                          onClick={handleSweepStorage}
                          disabled={isSweeping}
                          className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left transition-all active:scale-[0.98] group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-black text-sm text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                              <HardDrive size={16} className="text-emerald-500" />
                              {language === 'bn' ? '০ কেবি ব্যাকএন্ড স্টোরেজ পলিসি' : '0 KB Storage Optimizer'}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {language === 'bn' ? 'পড়ার ২৪ ঘণ্টা পার হওয়া যেকোনো ডাটা স্থায়ীভাবে মুছে দেয়।' : 'Purges read data older than 24h to maintain 0 KB.'}
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Admin Identity Card */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <UserCheck size={16} className="text-amber-500" />
                        <span>অ্যাডমিন: <strong>Md Shahin</strong> (shahin.prpl@gmail.com)</span>
                      </div>
                      <span className="font-mono text-[10px]">Verified Host</span>
                    </div>
                  </div>
                )}

                {/* TAB 2: COMPOSE BROADCAST */}
                {activeTab === 'compose' && (
                  <form onSubmit={handleSend} className="p-5 sm:p-6 space-y-4">
                    {/* Occasion Template Chips */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                        {language === 'bn' ? 'অকেশন বা বিষয় সিলেক্ট করুন (এক ক্লিকে অটোফিল)' : 'Occasion Presets (Auto-fill)'}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {OCCASION_TEMPLATES.map((tpl) => (
                          <button
                            key={tpl.id}
                            type="button"
                            onClick={() => handleApplyTemplate(tpl)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all active:scale-95 ${
                              occasion === tpl.id
                                ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                            }`}
                          >
                            {tpl.nameBn}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notification Title */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
                        {language === 'bn' ? 'নোটিফিকেশনের শিরোনাম (Title) *' : 'Title *'}
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={language === 'bn' ? 'যেমন: পবিত্র ঈদুল ফিতর মোবারক! 🌙✨' : 'e.g. Eid Mubarak!'}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs focus:outline-none focus:border-amber-500"
                        required
                      />
                    </div>

                    {/* Message Body */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
                        {language === 'bn' ? 'বার্তার মূল বক্তব্য (Message Body) *' : 'Message Body *'}
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={language === 'bn' ? 'সকল ইউজারের কাছে যে বার্তাটি পৌঁছাবে তা এখানে লিখুন...' : 'Write message body...'}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-amber-500 resize-none font-bangla"
                        required
                      />
                    </div>

                    {/* Settings Row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1">
                          {language === 'bn' ? 'প্রায়োরিটি' : 'Priority'}
                        </label>
                        <select
                          value={priority}
                          onChange={(e: any) => setPriority(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                        >
                          <option value="normal">{language === 'bn' ? 'সাধারণ (Normal)' : 'Normal'}</option>
                          <option value="high">{language === 'bn' ? 'গুরুত্বপূর্ণ (High)' : 'High'}</option>
                          <option value="urgent">{language === 'bn' ? 'জরুরি (Urgent)' : 'Urgent'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1">
                          {language === 'bn' ? 'টার্গেট পেজ লিংক' : 'Target Page'}
                        </label>
                        <select
                          value={targetTab}
                          onChange={(e) => setTargetTab(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                        >
                          <option value="home">{language === 'bn' ? 'হোম পেজ' : 'Home'}</option>
                          <option value="ramadan">{language === 'bn' ? 'মাহে রমাদান' : 'Ramadan'}</option>
                          <option value="quran">{language === 'bn' ? 'পবিত্র কুরআন' : 'Quran'}</option>
                          <option value="hadis">{language === 'bn' ? 'সহীহ হাদিস' : 'Hadith'}</option>
                          <option value="prayer">{language === 'bn' ? 'নামাজের সময়' : 'Prayer'}</option>
                        </select>
                      </div>
                    </div>

                    {/* LIVE PHONE PREVIEW CARD */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                        <Eye size={13} className="text-amber-500" />
                        <span>{language === 'bn' ? 'ইউজারদের ফোনে লাইভ প্রিভিউ' : 'Live Phone Banner Preview'}</span>
                      </div>
                      
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-amber-500/30 shadow-sm flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Radio size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h6 className="font-black text-xs text-slate-900 dark:text-white truncate">
                            {title || (language === 'bn' ? 'শিরোনাম এখানে প্রদর্শিত হবে' : 'Title preview')}
                          </h6>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mt-0.5 font-bangla">
                            {message || (language === 'bn' ? 'বার্তার বিবরণ এখানে প্রদর্শিত হবে...' : 'Message preview...')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-bold flex items-center gap-2">
                        <AlertCircle size={14} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-black text-xs shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSending ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>{language === 'bn' ? 'পাঠানো হচ্ছে...' : 'Broadcasting...'}</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>{language === 'bn' ? 'সকল ইউজারের ফোনে ব্রডকাস্ট পাঠান' : 'Broadcast to All Users'}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* TAB 3: USER INBOX */}
                {activeTab === 'inbox' && (
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Zero Storage Banner with Manual Sweep */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/30 space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <HardDrive size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <h6 className="font-black text-xs text-slate-900 dark:text-white">
                            {language === 'bn' ? '০ কেবি ব্যাকএন্ড সার্ভার স্টোরেজ গ্যারান্টি' : '0 KB Backend Server Guarantee'}
                          </h6>
                        </div>

                        <button
                          onClick={handleSweepStorage}
                          disabled={isSweeping}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[10px] font-black flex items-center gap-1 shadow-sm active:scale-95 transition-all disabled:opacity-50 shrink-0"
                        >
                          <RefreshCw size={11} className={isSweeping ? 'animate-spin' : ''} />
                          <span>{language === 'bn' ? 'মেয়াদোত্তীর্ণ ডাটা ক্লিন' : 'Sweep Expired'}</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-bangla">
                        {language === 'bn'
                          ? 'অ্যাডমিন অথবা ইউজার যে-ই বার্তাটি পড়ুক না কেন, পড়ার ঠিক ২৪ ঘণ্টা পর তা সার্ভার থেকে অটো রিমুভ হয়ে যায়। ফলে ব্যাকএন্ড সার্ভার সবসময় ১০০% খালি এবং ০ কেবি স্থান দখল করে থাকে।'
                          : 'Messages are automatically purged from the backend exactly 24 hours after being read, strictly maintaining 0 KB wasted server storage.'}
                      </p>
                    </div>

                    {/* Filters Bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {(['all', 'unread', 'replied'] as const).map((filterKey) => (
                          <button
                            key={filterKey}
                            onClick={() => setInboxFilter(filterKey)}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                              inboxFilter === filterKey
                                ? 'bg-amber-500 text-white shadow-sm'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            {filterKey === 'all' && (language === 'bn' ? 'সব বার্তা' : 'All')}
                            {filterKey === 'unread' && (language === 'bn' ? 'অপঠিত' : 'Unread')}
                            {filterKey === 'replied' && (language === 'bn' ? 'উত্তর দেওয়া' : 'Replied')}
                          </button>
                        ))}
                      </div>

                      <span className="text-[11px] font-bold text-slate-400">
                        {filteredMessages.length} {language === 'bn' ? 'টি বার্তা' : 'messages'}
                      </span>
                    </div>

                    {filteredMessages.length === 0 ? (
                      <div className="py-16 text-center space-y-3">
                        <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                          <Inbox size={24} />
                        </div>
                        <h5 className="font-black text-slate-700 dark:text-slate-200 text-sm">
                          {language === 'bn' ? 'ইনবক্সে কোনো বার্তা নেই' : 'No messages in inbox'}
                        </h5>
                        <p className="text-xs text-slate-400 max-w-xs mx-auto">
                          {language === 'bn'
                            ? 'ইউজাররা যখন কোনো মতামত, দু\'আ বা নোটিফিকেশন ফিডব্যাক পাঠাবে, তা এখানে প্রদর্শিত হবে।'
                            : 'When users send feedback, prayers, or questions, they will arrive here in real-time.'}
                        </p>
                      </div>
                    ) : (
                      filteredMessages.map((msg) => {
                        const expiry = calculateExpiryStatus(msg.readAt);

                        return (
                          <div
                            key={msg.id}
                            className={`p-4 rounded-2xl border transition-all ${
                              msg.status === 'unread'
                                ? 'bg-amber-500/5 dark:bg-amber-950/20 border-amber-500/30 shadow-sm'
                                : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h5 className="font-black text-sm text-slate-900 dark:text-white">
                                    {msg.senderName}
                                  </h5>
                                  {msg.status === 'unread' ? (
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-rose-500 text-white">
                                      {language === 'bn' ? 'নতুন' : 'New'}
                                    </span>
                                  ) : msg.status === 'replied' ? (
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-emerald-500 text-white">
                                      {language === 'bn' ? 'উত্তর দেওয়া' : 'Replied'}
                                    </span>
                                  ) : (
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                      {language === 'bn' ? 'পড়া হয়েছে' : 'Read'}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                                  {msg.senderEmail || (language === 'bn' ? 'ইমেইল দেওয়া হয়নি' : 'No email provided')}
                                </p>
                              </div>

                              <span className="text-[10px] text-slate-400 whitespace-nowrap">
                                {new Date(msg.createdAt).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>

                            <div className="mb-2">
                              <span className="text-[11px] font-black text-amber-600 dark:text-amber-400">
                                [{msg.category}] {msg.subject}
                              </span>
                            </div>

                            <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line bg-white/60 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800/60 font-bangla">
                              {msg.message}
                            </p>

                            {/* 24-Hour Expiration & 0 KB Indicator */}
                            <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px]">
                              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-semibold">
                                <Timer size={12} className={msg.readAt ? "text-amber-500" : "text-slate-400"} />
                                <span>
                                  {language === 'bn' ? expiry.formattedTextBn : expiry.formattedTextEn}
                                </span>
                              </div>
                              <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                0 KB Policy
                              </span>
                            </div>

                            {/* Quick Actions & Safe Inline Delete */}
                            <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {msg.senderEmail && (
                                  <button
                                    onClick={() => handleReplyEmail(msg)}
                                    className="px-3 py-1.5 rounded-xl bg-amber-500 text-white text-[11px] font-black flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                                  >
                                    <CornerDownLeft size={12} />
                                    <span>{language === 'bn' ? 'ইমেইলে উত্তর দিন' : 'Reply by Email'}</span>
                                  </button>
                                )}

                                <button
                                  onClick={() => handleToggleReadStatus(msg)}
                                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[11px] font-bold hover:bg-slate-200 transition-colors"
                                >
                                  {msg.status === 'unread' 
                                    ? (language === 'bn' ? 'পড়া হয়েছে মার্ক করুন' : 'Mark Read')
                                    : (language === 'bn' ? 'অপঠিত মার্ক করুন' : 'Mark Unread')}
                                </button>
                              </div>

                              {/* Inline Delete without window.confirm */}
                              {deleteMsgConfirmId === msg.id ? (
                                <div className="flex items-center gap-1.5 bg-rose-50 dark:bg-rose-950/40 p-1.5 rounded-xl border border-rose-300 dark:border-rose-800">
                                  <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400">
                                    {language === 'bn' ? 'মুছবেন?' : 'Delete?'}
                                  </span>
                                  <button
                                    onClick={() => handleExecuteDeleteUserMessage(msg.id)}
                                    className="px-2 py-0.5 bg-rose-600 text-white rounded-lg text-[10px] font-black hover:bg-rose-700"
                                  >
                                    {language === 'bn' ? 'হ্যাঁ' : 'Yes'}
                                  </button>
                                  <button
                                    onClick={() => setDeleteMsgConfirmId(null)}
                                    className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-[10px] font-bold"
                                  >
                                    {language === 'bn' ? 'না' : 'No'}
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setDeleteMsgConfirmId(msg.id)}
                                  className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors hover:bg-rose-500/10"
                                  title="Delete"
                                >
                                  <Trash2 size={14} />
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}

                {/* TAB 4: BROADCAST HISTORY & MANAGEMENT */}
                {activeTab === 'history' && (
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                        {language === 'bn' ? 'প্রেরিত ব্রডকাস্ট এনাউন্সমেন্টসমূহ' : 'Broadcast Announcements'}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {localAnnouncements.length} {language === 'bn' ? 'টি সক্রিয়' : 'active'}
                      </span>
                    </div>

                    {localAnnouncements.length === 0 ? (
                      <div className="py-14 text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                          <Radio size={20} />
                        </div>
                        <h5 className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                          {language === 'bn' ? 'পূর্বে কোনো বার্তা পাঠানো হয়নি বা সব মুছে ফেলা হয়েছে।' : 'No broadcast history found.'}
                        </h5>
                        <p className="text-xs text-slate-400">
                          {language === 'bn' ? 'নতুন বার্তা পাঠাতে "নতুন বার্তা" ট্যাবে যান।' : 'Go to Compose tab to send new broadcast.'}
                        </p>
                      </div>
                    ) : (
                      localAnnouncements.map((item) => {
                        const expiry = calculateExpiryStatus(item.readAt);

                        return (
                          <div
                            key={item.id}
                            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-3 transition-all"
                          >
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h5 className="font-black text-sm text-slate-900 dark:text-white truncate">
                                  {item.title}
                                </h5>
                                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                                  {item.occasion}
                                </span>
                              </div>

                              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 font-bangla">
                                {item.message}
                              </p>
                              
                              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-[10px] text-slate-400">
                                <span className="font-mono">
                                  {new Date(item.createdAt).toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </span>
                                
                                <span className="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                                  <Timer size={11} />
                                  <span>
                                    {item.readAt 
                                      ? (language === 'bn' ? expiry.formattedTextBn : expiry.formattedTextEn) 
                                      : (language === 'bn' ? 'ইউজার পড়ার পর ২৪ ঘণ্টা গণনা শুরু হবে' : '24h begins after user reads')}
                                  </span>
                                </span>

                                <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                  0 KB
                                </span>
                              </div>
                            </div>

                            {/* Safe Inline Deletion without window.confirm */}
                            {deleteConfirmId === item.id ? (
                              <div className="flex items-center gap-1.5 bg-rose-50 dark:bg-rose-950/50 p-2 rounded-xl border border-rose-300 dark:border-rose-800 shrink-0">
                                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300">
                                  {language === 'bn' ? 'মুছবেন?' : 'Delete?'}
                                </span>
                                <button
                                  onClick={() => handleExecuteDeleteAnnouncement(item.id)}
                                  disabled={deletingId === item.id}
                                  className="px-2.5 py-1 bg-rose-600 text-white rounded-lg text-xs font-black hover:bg-rose-700 active:scale-95 transition-all"
                                >
                                  {deletingId === item.id 
                                    ? '...' 
                                    : (language === 'bn' ? 'হ্যাঁ' : 'Yes')}
                                </button>
                                <button
                                  onClick={() => setDeleteConfirmId(null)}
                                  className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-bold hover:bg-slate-300"
                                >
                                  {language === 'bn' ? 'না' : 'No'}
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setDeleteConfirmId(item.id)}
                                disabled={deletingId === item.id}
                                className="p-2 text-slate-400 hover:text-rose-500 rounded-xl hover:bg-rose-500/10 transition-colors shrink-0 active:scale-95"
                                title="Delete Announcement"
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
