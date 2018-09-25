import validator from 'validator';

const IS_DEBUG_MODE = true;
const TOKEN_KEY = 'AuthToken';
const HISTORY_PATH_KEY = 'History';

let language = 'en-US';

function setLanguage(lang) {
    if (validator.isEmpty(lang)) {
        return;
    }

    language = lang;
}

function getLanguage() {
    return language;
}

export { IS_DEBUG_MODE, HISTORY_PATH_KEY, TOKEN_KEY, getLanguage, setLanguage };
