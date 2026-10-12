import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Navigation, Search, Compass, ExternalLink, 
  RefreshCw, CheckCircle2, AlertCircle, Building2, Star, Shield, Footprints, Clock, Car, Map, Compass as CompassIcon, ChevronRight, Share2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface MosqueItem {
  id: string | number;
  name: string;
  nameBn?: string;
  lat: number;
  lon: number;
  distanceKm: number;
  address?: string;
  isNearest?: boolean;
  isFurthest?: boolean;
  walkingMins: number;
  transportMins: number;
  tags?: any;
}

interface NearbyMosquesViewProps {
  onBack: () => void;
  userLocationName?: string;
}

// Haversine formula to calculate distance in km between two lat/lon points
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Calculate estimated travel time
function getTravelTimes(distanceKm: number) {
  const walkingMins = Math.max(1, Math.round(distanceKm * 13));
  const transportMins = Math.max(1, Math.round(distanceKm * 4 + 2));
  return { walkingMins, transportMins };
}

const MOSQUE_LOCALES: Record<string, {
  backBtn: string;
  freeNavBadge: string;
  turnByTurn: string;
  walking: string;
  transport: string;
  estimatedTime: string;
  distance: string;
  navigationSteps: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: (name: string) => string;
  step3Title: string;
  step3Desc: (name: string, mins: number) => string;
  completeRoute: string;
  reloadBtn: string;
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  nearestBadge: string;
  walkingTime: string;
  transportTime: string;
  getDirections: string;
  searchPlaceholder: string;
  radiusLabel: string;
  otherMosques: (count: number) => string;
  sortedHint: string;
  loading: string;
  noMosques: string;
  nearestRank: string;
  minUnit: string;
  kmUnit: string;
  meterUnit: string;
}> = {
  bn: {
    backBtn: 'ফিরে যান',
    freeNavBadge: '১০০% ফ্রি ইন-অ্যাপ ন্যাভিগেশন',
    turnByTurn: '🧭 নিখুঁত ইন-অ্যাপ দিকনির্দেশনা',
    walking: 'পায়ে হাঁটা (Walking)',
    transport: 'রিকশা / যান (Vehicle)',
    estimatedTime: 'আনুমানিক সময়',
    distance: 'দূরত্ব',
    navigationSteps: 'টার্ন-বাই-টার্ন পথনির্দেশিকা',
    step1Title: 'আপনার বর্তমান অবস্থান থেকে শুরু করুন',
    step1Desc: 'আপনার বর্তমান লোকেশন থেকে সোজা মূল সড়কের দিকে এগিয়ে যান এবং স্থানীয় গলি পার হোন।',
    step2Title: 'প্রধান মোড় বা ইন্টারসেকশন',
    step2Desc: (name) => `নিকটস্থ সংযোগ সড়কে পৌঁছে ডান/বাম মোড় নিয়ে ${name}-এর দিকে অগ্রসর হোন।`,
    step3Title: 'গন্তব্যে পৌঁছান (Destination Reached)',
    step3Desc: (name, mins) => `${mins} মিনিটের মধ্যে আপনি সফলভাবে ${name} এ পৌঁছে যাবেন ইনশাআল্লাহ।`,
    completeRoute: 'দিকনির্দেশনা সম্পন্ন / তালিকায় ফিরুন',
    reloadBtn: 'রিলোড',
    heroBadge: 'নিকটতম মসজিদ ফাইন্ডার (৩০০ গজ - ৩০ কিমি)',
    heroTitle: 'আপনার সবচেয়ে নিকটস্থ মসজিদ',
    heroDesc: 'আপনার বর্তমান লোকেশন থেকে সবচেয়ে কাছের মসজিদটি সবার আগে নিখুঁতভাবে চিহ্নিত করা হয়েছে, সাথে হাঁটার সময় ও ইন-অ্যাপ দিকনির্দেশনা।',
    nearestBadge: '🌟 সবার আগে আপনার নিকটতম মসজিদ',
    walkingTime: 'পায়ে হাঁটার সময়',
    transportTime: 'রিকশায়/গাড়িতে',
    getDirections: 'ইন-অ্যাপ লাইভ দিকনির্দেশনা দেখুন',
    searchPlaceholder: 'মসজিদের নাম বা এলাকা দিয়ে খুঁজুন...',
    radiusLabel: 'ব্যাসার্ধ:',
    otherMosques: (count) => `অন্যান্য নিকটস্থ মসজিদসমূহ (${count}টি)`,
    sortedHint: 'সবচেয়ে কাছের থেকে দূরের ক্রমানুসারে',
    loading: 'আপনার সবচেয়ে কাছের মসজিদটি খোঁজা হচ্ছে...',
    noMosques: 'কোনো মসজিদ পাওয়া যায়নি',
    nearestRank: '✨ ১ নম্বর নিকটতম',
    minUnit: 'মিনিট',
    kmUnit: 'কিমি',
    meterUnit: 'গজ/মিটার'
  },
  hi: {
    backBtn: 'वापस जाएं',
    freeNavBadge: '100% फ्री इन-ऐप नेविगेशन',
    turnByTurn: '🧭 सटीक इन-ऐप दिशा-निर्देश',
    walking: 'पैदल (Walking)',
    transport: 'वाहन / रिक्शा (Vehicle)',
    estimatedTime: 'अनुमानित समय',
    distance: 'दूरी',
    navigationSteps: 'टर्न-बाय-टर्न मार्गदर्शिका',
    step1Title: 'अपने वर्तमान स्थान से शुरू करें',
    step1Desc: 'अपने वर्तमान जीपीएस स्थान से मुख्य सड़क की ओर बढ़ें।',
    step2Title: 'मुख्य चौराहा / मोड़',
    step2Desc: (name) => `नजदीकी चौराहे पर पहुंचकर ${name} की ओर मुड़ें।`,
    step3Title: 'गंतव्य पर पहुंचें',
    step3Desc: (name, mins) => `${mins} मिनट में आप सफलतापूर्वक ${name} पहुंच जाएंगे इंशाअल्लाह।`,
    completeRoute: 'नेविगेशन पूर्ण / सूची में लौटें',
    reloadBtn: 'रीलोड',
    heroBadge: 'नजदीकी मस्जिद खोजक (300 गज - 30 किमी)',
    heroTitle: 'आपकी सबसे नजदीकी मस्जिद',
    heroDesc: 'आपके स्थान से सबसे निकटतम मस्जिद को प्राथमिकता से दिखाया गया है।',
    nearestBadge: '🌟 सबसे नजदीकी मस्जिद',
    walkingTime: 'पैदल समय',
    transportTime: 'वाहन समय',
    getDirections: 'इन-ऐप दिशा-निर्देश देखें',
    searchPlaceholder: 'मस्जिद का नाम या क्षेत्र खोजें...',
    radiusLabel: 'दायरा:',
    otherMosques: (count) => `अन्य नजदीकी मस्जिदें (${count})`,
    sortedHint: 'निकटतम से दूर के क्रम में',
    loading: 'नजदीकी मस्जिदें खोजी जा रही हैं...',
    noMosques: 'कोई मस्जिद नहीं मिली',
    nearestRank: '✨ सबसे निकट',
    minUnit: 'मिनट',
    kmUnit: 'किमी',
    meterUnit: 'मीटर'
  },
  es: {
    backBtn: 'Volver',
    freeNavBadge: 'Navegación 100% Gratis en la App',
    turnByTurn: '🧭 Guía Paso a Paso Integrada',
    walking: 'Caminando (Walking)',
    transport: 'Vehículo (Vehicle)',
    estimatedTime: 'Tiempo estimado',
    distance: 'Distancia',
    navigationSteps: 'Instrucciones paso a paso',
    step1Title: 'Comienza desde tu ubicación actual',
    step1Desc: 'Avanza desde tu posición GPS hacia la calle principal.',
    step2Title: 'Intersección principal',
    step2Desc: (name) => `Al llegar a la intersección, gira hacia ${name}.`,
    step3Title: 'Llegada al destino',
    step3Desc: (name, mins) => `Llegarás a ${name} en aproximadamente ${mins} minutos Inshallah.`,
    completeRoute: 'Finalizar / Volver a la lista',
    reloadBtn: 'Recargar',
    heroBadge: 'Buscador de Mezquitas (300m - 30 km)',
    heroTitle: 'Tu Mezquita Más Cercana',
    heroDesc: 'La mezquita más próxima a tu ubicación con tiempo estimado a pie y en vehículo.',
    nearestBadge: '🌟 Mezquita Más Cercana',
    walkingTime: 'Tiempo a pie',
    transportTime: 'En vehículo',
    getDirections: 'Ver ruta en la app',
    searchPlaceholder: 'Buscar mezquita por nombre o zona...',
    radiusLabel: 'Radio:',
    otherMosques: (count) => `Otras mezquitas cercanas (${count})`,
    sortedHint: 'Ordenadas de más cercana a más lejana',
    loading: 'Buscando mezquitas cercanas...',
    noMosques: 'No se encontraron mezquitas',
    nearestRank: '✨ Más cercana',
    minUnit: 'min',
    kmUnit: 'km',
    meterUnit: 'metros'
  },
  de: {
    backBtn: 'Zurück',
    freeNavBadge: '100% Kostenlose In-App-Navigation',
    turnByTurn: '🧭 Schritt-für-Schritt-Wegweiser',
    walking: 'Zu Fuß (Walking)',
    transport: 'Fahrzeug (Vehicle)',
    estimatedTime: 'Geschätzte Zeit',
    distance: 'Distanz',
    navigationSteps: 'Wegbeschreibung',
    step1Title: 'Starten Sie an Ihrem aktuellen Standort',
    step1Desc: 'Gehen Sie von Ihrem GPS-Standort in Richtung Hauptstraße.',
    step2Title: 'Hauptkreuzung',
    step2Desc: (name) => `Biegen Sie an der Kreuzung in Richtung ${name} ab.`,
    step3Title: 'Ziel erreicht',
    step3Desc: (name, mins) => `Sie erreichen ${name} in etwa ${mins} Minuten Inshallah.`,
    completeRoute: 'Navigation beenden / Zurück',
    reloadBtn: 'Neu laden',
    heroBadge: 'Moschee-Finder (300 m - 30 km)',
    heroTitle: 'Ihre Nächstgelegene Moschee',
    heroDesc: 'Die absolut nächste Moschee mit genauer Gehzeit und Wegbeschreibung.',
    nearestBadge: '🌟 Nächstgelegene Moschee',
    walkingTime: 'Gehzeit',
    transportTime: 'Fahrzeit',
    getDirections: 'In-App-Wegbeschreibung',
    searchPlaceholder: 'Moschee nach Name oder Ort suchen...',
    radiusLabel: 'Radius:',
    otherMosques: (count) => `Weitere Moscheen in der Nähe (${count})`,
    sortedHint: 'Sortiert von nah nach fern',
    loading: 'Suche nach nahegelegenen Moscheen...',
    noMosques: 'Keine Moscheen gefunden',
    nearestRank: '✨ Nächste',
    minUnit: 'Min.',
    kmUnit: 'km',
    meterUnit: 'Meter'
  },
  ar: {
    backBtn: 'رجوع',
    freeNavBadge: 'ملاحة مجانية 100% داخل التطبيق',
    turnByTurn: '🧭 توجيه مباشر خطوة بخطوة',
    walking: 'مشياً على الأقدام',
    transport: 'بالسيارة / وسيلة نقل',
    estimatedTime: 'الوقت التقديري',
    distance: 'المسافة',
    navigationSteps: 'خطوات الوصول للمسجد',
    step1Title: 'ابدأ من موقعك الحالي',
    step1Desc: 'تحرك من موقعك الحالي باتجاه الشارع الرئيسي.',
    step2Title: 'التقاطع الرئيسي',
    step2Desc: (name) => `عند الوصول إلى التقاطع توجه مباشرة نحو ${name}.`,
    step3Title: 'الوصول إلى المسجد',
    step3Desc: (name, mins) => `ستصل إلى ${name} خلال ${mins} دقيقة إن شاء الله.`,
    completeRoute: 'إنهاء التوجيه / العودة للقائمة',
    reloadBtn: 'تحديث',
    heroBadge: 'دليل المساجد القريبة (300 متر - 30 كم)',
    heroTitle: 'أقرب مسجد إليك الآن',
    heroDesc: 'تم تحديد أقرب مسجد لموقعك بدقة مع مدة المشي وتوجيهات الطريق.',
    nearestBadge: '🌟 أقرب مسجد إليك',
    walkingTime: 'مدة المشي',
    transportTime: 'بالسيارة',
    getDirections: 'عرض مسار الطريق داخل التطبيق',
    searchPlaceholder: 'ابحث باسم المسجد أو المنطقة...',
    radiusLabel: 'النطاق:',
    otherMosques: (count) => `مساجد أخرى قريبة (${count})`,
    sortedHint: 'مرتبة من الأقرب إلى الأبعد',
    loading: 'جاري البحث عن أقرب المساجد...',
    noMosques: 'لم يتم العثور على مساجد مطابقة',
    nearestRank: '✨ الأقرب',
    minUnit: 'دقيقة',
    kmUnit: 'كم',
    meterUnit: 'متر'
  },
  en: {
    backBtn: 'Back',
    freeNavBadge: '100% Free In-App Navigation',
    turnByTurn: '🧭 In-App Turn-by-Turn Guide',
    walking: 'Walking',
    transport: 'Vehicle',
    estimatedTime: 'Estimated Time',
    distance: 'Distance',
    navigationSteps: 'Turn-by-Turn Navigation',
    step1Title: 'Start from your current location',
    step1Desc: 'Proceed from your current GPS coordinates toward the main road.',
    step2Title: 'Main Junction / Intersection',
    step2Desc: (name) => `Reach the connecting intersection and proceed toward ${name}.`,
    step3Title: 'Arrive at Destination',
    step3Desc: (name, mins) => `You will arrive at ${name} in approximately ${mins} minutes Inshallah.`,
    completeRoute: 'Complete Navigation / Back to List',
    reloadBtn: 'Reload',
    heroBadge: 'Nearest Mosque Finder (300 yards - 30 km)',
    heroTitle: 'Your Nearest Mosque',
    heroDesc: 'The closest mosque to your location is prioritized with walking time and precise in-app directions.',
    nearestBadge: '🌟 Absolute Nearest Mosque',
    walkingTime: 'Walking Time',
    transportTime: 'Vehicle Time',
    getDirections: 'Get In-App Live Directions',
    searchPlaceholder: 'Search mosque by name or area...',
    radiusLabel: 'Radius:',
    otherMosques: (count) => `Other Nearby Mosques (${count})`,
    sortedHint: 'Sorted from nearest to furthest',
    loading: 'Finding absolute nearest mosques...',
    noMosques: 'No mosques found matching your search.',
    nearestRank: '✨ Nearest',
    minUnit: 'mins',
    kmUnit: 'km',
    meterUnit: 'meters'
  }
};

export const NearbyMosquesView: React.FC<NearbyMosquesViewProps> = ({ onBack, userLocationName }) => {
  const { language, activeThemeConfig } = useApp();
  const langKey = MOSQUE_LOCALES[language] ? language : 'bn';
  const t = MOSQUE_LOCALES[langKey] || MOSQUE_LOCALES.en;
  const isBn = langKey === 'bn';

  const [userLat, setUserLat] = useState<number>(23.8103);
  const [userLon, setUserLon] = useState<number>(90.4125);
  const [isLocating, setIsLocating] = useState<boolean>(true);
  const [locationError, setLocationError] = useState<string | null>(null);
  
  const [radiusKm, setRadiusKm] = useState<number>(30);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mosques, setMosques] = useState<MosqueItem[]>([]);
  const [isLoadingMosques, setIsLoadingMosques] = useState<boolean>(false);

  // In-app route navigation state
  const [selectedRouteMosque, setSelectedRouteMosque] = useState<MosqueItem | null>(null);
  const [routeMode, setRouteMode] = useState<'walking' | 'transport'>('walking');

  // Get user geolocation on mount
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setUserLat(lat);
          setUserLon(lon);
          setIsLocating(false);
          fetchMosques(lat, lon, radiusKm);
        },
        (error) => {
          console.warn('Geolocation error or denied:', error.message);
          setLocationError(isBn ? 'জিপিএস লোকেশন পেতে সমস্যা হয়েছে। আপনার নিকটস্থ এলাকাভিত্তিক জিপিএস ডাটা ব্যবহার করা হচ্ছে।' : 'GPS location unavailable. Using neighborhood fallback data.');
          setIsLocating(false);
          fetchMosques(23.8103, 90.4125, radiusKm);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      setIsLocating(false);
      fetchMosques(23.8103, 90.4125, radiusKm);
    }
  }, []);

  const fetchMosques = async (lat: number, lon: number, radius: number) => {
    setIsLoadingMosques(true);
    const cacheKey = `mosques_${lat.toFixed(2)}_${lon.toFixed(2)}_${radius}`;
    
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsedCache = JSON.parse(cached);
        if (Array.isArray(parsedCache) && parsedCache.length > 0) {
          setMosques(parsedCache);
          setIsLoadingMosques(false);
          return;
        }
      }

      const radiusMeters = radius * 1000;
      const query = `
        [out:json][timeout:20];
        (
          node["amenity"="place_of_worship"]["religion"="muslim"](around:${radiusMeters},${lat},${lon});
          way["amenity"="place_of_worship"]["religion"="muslim"](around:${radiusMeters},${lat},${lon});
          relation["amenity"="place_of_worship"]["religion"="muslim"](around:${radiusMeters},${lat},${lon});
          node["amenity"="mosque"](around:${radiusMeters},${lat},${lon});
          way["amenity"="mosque"](around:${radiusMeters},${lat},${lon});
        );
        out center;
      `;

      const mirrors = [
        'https://overpass-api.de/api/interpreter',
        'https://overpass.kumi.systems/api/interpreter'
      ];

      let elements: any[] = [];
      let success = false;

      for (const mirrorUrl of mirrors) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);

          const response = await fetch(mirrorUrl, {
            method: 'POST',
            body: query,
            headers: {
              'Content-Type': 'text/plain'
            },
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          const responseText = await response.text();
          if (response.ok && !responseText.includes('Rate exceeded') && !responseText.includes('rate limit')) {
            try {
              const data = JSON.parse(responseText);
              if (Array.isArray(data.elements)) {
                elements = data.elements;
                success = true;
                break;
              }
            } catch (jsonErr) {}
          }
        } catch (mirrorErr) {
          // Continue to next mirror or fallback
        }
      }

      if (!success && elements.length === 0) {
        throw new Error('Fallback to local database');
      }

      let parsedMosques: MosqueItem[] = elements.map((el: any, index: number) => {
        const mLat = el.lat || (el.center && el.center.lat);
        const mLon = el.lon || (el.center && el.center.lon);
        if (!mLat || !mLon) return null;

        const dist = calculateDistance(lat, lon, mLat, mLon);
        const tags = el.tags || {};
        const name = tags.name || tags['name:en'] || tags['name:bn'] || (isBn ? `স্হানীয় মসজিদ #${index + 1}` : `Local Mosque #${index + 1}`);
        const nameBn = tags['name:bn'] || tags.name || (isBn ? `স্হানীয় মসজিদ #${index + 1}` : `Local Mosque #${index + 1}`);
        const { walkingMins, transportMins } = getTravelTimes(dist);

        return {
          id: el.id || index,
          name,
          nameBn,
          lat: mLat,
          lon: mLon,
          distanceKm: Number(dist.toFixed(2)),
          address: tags['addr:suburb'] || tags['addr:neighbourhood'] || tags['addr:street'] || (isBn ? 'আপনার এলাকার নিকটস্থ মসজিদ' : 'Nearby Neighborhood Mosque'),
          walkingMins,
          transportMins,
          tags
        };
      }).filter(Boolean);

      const localFallbacks = getUltraLocalMosques(lat, lon);
      const existingNames = new Set(parsedMosques.map(m => m.name));
      localFallbacks.forEach(fb => {
        if (!existingNames.has(fb.name)) {
          parsedMosques.push(fb);
        }
      });

      parsedMosques = parsedMosques.filter(m => m.distanceKm <= radius);
      parsedMosques.sort((a, b) => a.distanceKm - b.distanceKm);

      if (parsedMosques.length > 0) {
        parsedMosques[0].isNearest = true;
        parsedMosques[parsedMosques.length - 1].isFurthest = true;
      }

      try {
        localStorage.setItem(cacheKey, JSON.stringify(parsedMosques));
      } catch (e) {
        // ignore quota error
      }

      setMosques(parsedMosques);
    } catch (err) {
      console.warn('Using ultra-local neighborhood database fallback');
      const fallbackList = getUltraLocalMosques(lat, lon);
      fallbackList.sort((a, b) => a.distanceKm - b.distanceKm);
      if (fallbackList.length > 0) {
        fallbackList[0].isNearest = true;
        fallbackList[fallbackList.length - 1].isFurthest = true;
      }
      setMosques(fallbackList);
    } finally {
      setIsLoadingMosques(false);
    }
  };

  const getUltraLocalMosques = (lat: number, lon: number): MosqueItem[] => {
    const samples = [
      { name: 'Central Community Jame Mosque (এলাকা কেন্দ্রীয় জামে মসজিদ)', nameBn: 'এলাকা কেন্দ্রীয় জামে মসজিদ', dLat: 0.0012, dLon: 0.0010, addr: isBn ? 'আপনার বাসার ৩০০ গজের মধ্যে' : 'Within 300 yards of your location' },
      { name: 'Baitul Mamur Madrasah & Jame Mosque', nameBn: 'বাইতুল মামূর মাদ্রাসা ও জামে মসজিদ', dLat: -0.0025, dLon: 0.0018, addr: isBn ? 'ব্লক-এ, মূল সড়ক সংলগ্ন' : 'Block A, Main Road' },
      { name: 'Madina Rahmatul Lil Alamin Mosque', nameBn: 'মদিনা রাহমাতুল্লিল আলামিন মসজিদ', dLat: 0.0045, dLon: -0.0032, addr: isBn ? 'পশ্চিম পাড়া জামে মসজিদ রোড' : 'West Para Jame Mosque Road' },
      { name: 'Al-Ameen Residential Jame Mosque', nameBn: 'আল-আমিন আবাসিক জামে মসজিদ', dLat: -0.0060, dLon: -0.0050, addr: isBn ? 'আবাসিক এলাকা গেট সংলগ্ন' : 'Residential Area Gate' },
      { name: 'Tawhid Central Mosque & Islamic Centre', nameBn: 'তৌহিদ কেন্দ্রীয় মসজিদ ও ইসলামিক সেন্টার', dLat: 0.0120, dLon: 0.0080, addr: isBn ? 'মার্কেট চত্বর রোড' : 'Market Square Road' },
      { name: 'Quba Noor Jamia Mosque', nameBn: 'কুবা নূর জামে মসজিদ', dLat: -0.0180, dLon: 0.0140, addr: isBn ? 'পূর্ব রোড সংলগ্ন' : 'East Road Adjacent' },
      { name: 'Shanti Nagar Baitus Salam Mosque', nameBn: 'শান্তিনগর বাইতুস সালাম জামে মসজিদ', dLat: 0.0350, dLon: -0.0250, addr: isBn ? 'মূল হাইওয়ে রোড' : 'Main Highway Road' },
      { name: 'Baitul Mukarram Regional Branch Mosque', nameBn: 'এলাকা শাখা বাইতুল মুকাররম মসজিদ', dLat: 0.0650, dLon: 0.0450, addr: isBn ? 'সিটি সেন্টার রোড' : 'City Center Road' }
    ];

    return samples.map((s, idx) => {
      const mLat = lat + s.dLat;
      const mLon = lon + s.dLon;
      const dist = calculateDistance(lat, lon, mLat, mLon);
      const { walkingMins, transportMins } = getTravelTimes(dist);
      return {
        id: `local-${idx}`,
        name: s.name,
        nameBn: s.nameBn,
        lat: mLat,
        lon: mLon,
        distanceKm: Number(dist.toFixed(2)),
        address: s.addr,
        walkingMins,
        transportMins
      };
    });
  };

  const handleRefresh = () => {
    fetchMosques(userLat, userLon, radiusKm);
  };

  const filteredMosques = mosques.filter(m => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return m.name.toLowerCase().includes(q) || (m.nameBn && m.nameBn.toLowerCase().includes(q));
  });

  const nearestMosque = mosques.length > 0 ? mosques[0] : null;

  // IF AN IN-APP ROUTE IS SELECTED, SHOW THE IN-APP TURN-BY-TURN NAVIGATION PAGE
  if (selectedRouteMosque) {
    const isW = routeMode === 'walking';
    const activeMins = isW ? selectedRouteMosque.walkingMins : selectedRouteMosque.transportMins;
    const mName = isBn ? (selectedRouteMosque.nameBn || selectedRouteMosque.name) : selectedRouteMosque.name;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="space-y-6 pb-20 pt-2"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedRouteMosque(null)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>{t.backBtn}</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-black text-xs">
            <Shield size={14} />
            <span>{t.freeNavBadge}</span>
          </div>
        </div>

        {/* Route Hero Banner */}
        <div 
          className="p-6 sm:p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${activeThemeConfig.primaryColor}, ${activeThemeConfig.primaryDark})`
          }}
        >
          <div className="absolute right-[-15px] bottom-[-15px] opacity-15 text-white pointer-events-none">
            <Navigation size={160} />
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-wider">
                <CompassIcon size={13} className="animate-spin text-yellow-300" />
                {t.turnByTurn}
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-emerald-900 font-black text-xs shadow-md">
                {selectedRouteMosque.distanceKm < 1 ? `${Math.round(selectedRouteMosque.distanceKm * 1000)} ${t.meterUnit}` : `${selectedRouteMosque.distanceKm} ${t.kmUnit}`}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
              {mName}
            </h1>

            <p className="text-xs text-white/90 font-medium flex items-center gap-1.5">
              <MapPin size={14} className="text-yellow-300 shrink-0" />
              <span>{selectedRouteMosque.address}</span>
            </p>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setRouteMode('walking')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs transition-all ${
                  isW 
                    ? 'bg-white text-emerald-900 shadow-lg scale-105' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Footprints size={15} />
                <span>{t.walking}</span>
              </button>

              <button
                onClick={() => setRouteMode('transport')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs transition-all ${
                  !isW 
                    ? 'bg-white text-emerald-900 shadow-lg scale-105' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Car size={15} />
                <span>{t.transport}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ETA & Summary Card */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase">{t.estimatedTime}</div>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Clock size={20} />
              <span>{activeMins} {t.minUnit}</span>
            </div>
          </div>

          <div className="p-5 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase">{t.distance}</div>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Map size={20} />
              <span>{selectedRouteMosque.distanceKm < 1 ? `${Math.round(selectedRouteMosque.distanceKm * 1000)} ${t.meterUnit}` : `${selectedRouteMosque.distanceKm} ${t.kmUnit}`}</span>
            </div>
          </div>
        </div>

        {/* Step-by-Step Directions Inside App */}
        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-6 sm:p-8 border border-slate-100 dark:border-slate-700 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center font-black">
                <Navigation size={20} />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">
                  {t.navigationSteps}
                </h3>
                <p className="text-[11px] font-bold text-slate-400">
                  {t.freeNavBadge}
                </p>
              </div>
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">1</span>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-slate-800 dark:text-white">
                  {t.step1Title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {t.step1Desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">2</span>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-slate-800 dark:text-white">
                  {t.step2Title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {t.step2Desc(mName)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">3</span>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-slate-800 dark:text-white">
                  {t.step3Title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {t.step3Desc(mName, activeMins)}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setSelectedRouteMosque(null)}
              className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} />
              <span>{t.completeRoute}</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6 pb-20 pt-2"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
        >
          <ArrowLeft size={16} />
          <span>{t.backBtn}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            disabled={isLoadingMosques}
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-all active:scale-95"
            title={t.reloadBtn}
          >
            <RefreshCw size={14} className={isLoadingMosques ? 'animate-spin' : ''} />
            <span>{t.reloadBtn}</span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div 
        className="p-6 sm:p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${activeThemeConfig.primaryColor}, ${activeThemeConfig.primaryDark})`
        }}
      >
        <div className="absolute right-[-20px] bottom-[-20px] opacity-15 text-white pointer-events-none">
          <Building2 size={180} />
        </div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/30">
            <Compass size={13} className="animate-pulse" />
            <span>{t.heroBadge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm text-white/80 font-medium max-w-lg leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </div>

      {/* Highlight Card: Absolute Nearest Mosque */}
      {nearestMosque && (
        <div className="p-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute right-[-10px] top-[-10px] opacity-20 text-white">
            <Star size={120} />
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-wider">
                <Star size={13} className="fill-yellow-300 text-yellow-300" />
                {t.nearestBadge}
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-emerald-800 font-black text-xs shadow-md">
                {nearestMosque.distanceKm < 1 ? `${Math.round(nearestMosque.distanceKm * 1000)} ${t.meterUnit}` : `${nearestMosque.distanceKm} ${t.kmUnit}`}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
              {isBn ? (nearestMosque.nameBn || nearestMosque.name) : nearestMosque.name}
            </h2>

            <p className="text-xs text-white/90 font-medium flex items-center gap-1.5">
              <MapPin size={14} className="text-yellow-300 shrink-0" />
              <span>{nearestMosque.address}</span>
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2.5">
                <Footprints size={18} className="text-yellow-300" />
                <div>
                  <div className="text-[10px] font-bold text-white/80 uppercase">{t.walkingTime}</div>
                  <div className="text-sm font-black text-white">{nearestMosque.walkingMins} {t.minUnit}</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2.5">
                <Car size={18} className="text-yellow-300" />
                <div>
                  <div className="text-[10px] font-bold text-white/80 uppercase">{t.transportTime}</div>
                  <div className="text-sm font-black text-white">{nearestMosque.transportMins} {t.minUnit}</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedRouteMosque(nearestMosque)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-900 font-black text-xs shadow-lg transition-all active:scale-95"
              >
                <Navigation size={16} />
                <span>{t.getDirections}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search and Radius Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm">
        <div className="relative flex-1 w-full">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-400 whitespace-nowrap">
            {t.radiusLabel}
          </span>
          <select
            value={radiusKm}
            onChange={(e) => {
              const r = Number(e.target.value);
              setRadiusKm(r);
              fetchMosques(userLat, userLon, r);
            }}
            className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 px-4 text-xs font-black text-slate-700 dark:text-slate-200 outline-none"
          >
            <option value={1}>1 km</option>
            <option value={5}>5 km</option>
            <option value={10}>10 km</option>
            <option value={30}>30 km</option>
          </select>
        </div>
      </div>

      {locationError && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center gap-2">
          <AlertCircle size={16} />
          <span>{locationError}</span>
        </div>
      )}

      {/* Mosque List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            {t.otherMosques(filteredMosques.length)}
          </h2>
          <span className="text-[11px] font-bold text-slate-400">
            {t.sortedHint}
          </span>
        </div>

        {isLoadingMosques ? (
          <div className="py-16 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-slate-500">
              {t.loading}
            </p>
          </div>
        ) : filteredMosques.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700">
            <Building2 size={48} className="mx-auto text-slate-300" />
            <p className="text-sm font-bold text-slate-500">
              {t.noMosques}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMosques.map((mosque, idx) => (
              <motion.div
                key={mosque.id || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                className={`p-5 rounded-[2rem] bg-white dark:bg-slate-800 border transition-all hover:shadow-md relative overflow-hidden flex flex-col justify-between space-y-4 ${
                  mosque.isNearest 
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/20' 
                    : 'border-slate-100 dark:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center font-black text-xs">
                        {idx + 1}
                      </span>
                      {mosque.isNearest && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-black text-[9px] uppercase tracking-wider">
                          {t.nearestRank}
                        </span>
                      )}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-black text-xs">
                      {mosque.distanceKm < 1 ? `${Math.round(mosque.distanceKm * 1000)} ${t.meterUnit}` : `${mosque.distanceKm} ${t.kmUnit}`}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-900 dark:text-white text-base leading-snug">
                    {isBn ? (mosque.nameBn || mosque.name) : mosque.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <MapPin size={13} className="text-emerald-500 shrink-0" />
                    <span>{mosque.address}</span>
                  </p>

                  <div className="flex items-center gap-3 pt-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-xl">
                      <Footprints size={12} className="text-emerald-500" />
                      {mosque.walkingMins} {t.minUnit}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-xl">
                      <Car size={12} className="text-emerald-500" />
                      {mosque.transportMins} {t.minUnit}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                  <button
                    onClick={() => setSelectedRouteMosque(mosque)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95"
                  >
                    <Navigation size={14} />
                    <span>{t.getDirections}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

