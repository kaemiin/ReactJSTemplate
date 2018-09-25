import validator from 'validator';

import enUS from '../components/LocaleProvider/en-US';
import zhTW from '../components/LocaleProvider/zh-TW';
import zhCN from '../components/LocaleProvider/zh-CN';
import jaJP from '../components/LocaleProvider/ja-JP';

function getLocale(lang) {
    const language = getLanguage(lang);

    switch (language) {
    case 'zh_TW':
        return zhTW;
    case 'zh_CN':
        return zhCN;
    case 'ja':
        return jaJP;
    default:
        return enUS;
    }
}

function getLanguage(lang) {
    let language = 'en_US';

    if (lang !== undefined && lang !== null && !validator.isEmpty(lang)) {
        language = lang.replace('-', '_');
    }

    return language;
}

export { getLanguage, getLocale };
