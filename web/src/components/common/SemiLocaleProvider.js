import React, { useState, useEffect } from 'react';
import { LocaleProvider } from '@douyinfe/semi-ui';
import { useTranslation } from 'react-i18next';

// Import Semi UI locales with correct path
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import vi_VN from '@douyinfe/semi-ui/lib/es/locale/source/vi_VN';
import ja_JP from '@douyinfe/semi-ui/lib/es/locale/source/ja_JP';
import ko_KR from '@douyinfe/semi-ui/lib/es/locale/source/ko_KR';
import ru_RU from '@douyinfe/semi-ui/lib/es/locale/source/ru_RU';
import fr from '@douyinfe/semi-ui/lib/es/locale/source/fr';
import de from '@douyinfe/semi-ui/lib/es/locale/source/de';
import es from '@douyinfe/semi-ui/lib/es/locale/source/es';
import it from '@douyinfe/semi-ui/lib/es/locale/source/it';
import ar from '@douyinfe/semi-ui/lib/es/locale/source/ar';
import th_TH from '@douyinfe/semi-ui/lib/es/locale/source/th_TH';
import tr_TR from '@douyinfe/semi-ui/lib/es/locale/source/tr_TR';
import pt_BR from '@douyinfe/semi-ui/lib/es/locale/source/pt_BR';
import zh_TW from '@douyinfe/semi-ui/lib/es/locale/source/zh_TW';

// Semi UI locale mapping
const semiLocaleMap = {
  'zh': zh_CN,
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'en': en_GB,
  'en-GB': en_GB,
  'en-US': en_US,
  'vi': vi_VN,
  'vi-VN': vi_VN,
  'ja': ja_JP,
  'ja-JP': ja_JP,
  'ko': ko_KR,
  'ko-KR': ko_KR,
  'ru': ru_RU,
  'ru-RU': ru_RU,
  'fr': fr,
  'fr-FR': fr,
  'de': de,
  'de-DE': de,
  'es': es,
  'es-ES': es,
  'it': it,
  'it-IT': it,
  'ar': ar,
  'ar-SA': ar,
  'th': th_TH,
  'th-TH': th_TH,
  'tr': tr_TR,
  'tr-TR': tr_TR,
  'pt': pt_BR,
  'pt-BR': pt_BR,
};

const SemiLocaleProvider = ({ children }) => {
  const { i18n } = useTranslation();
  
  // Get current language from i18n
  const currentLanguage = i18n.language || 'zh';
  
  // Get corresponding Semi UI locale, fallback to zh_CN if not found
  const semiLocale = semiLocaleMap[currentLanguage] || 
                     semiLocaleMap[currentLanguage.split('-')[0]] || 
                     zh_CN;

  return (
    <LocaleProvider locale={semiLocale}>
      {children}
    </LocaleProvider>
  );
};

export default SemiLocaleProvider;