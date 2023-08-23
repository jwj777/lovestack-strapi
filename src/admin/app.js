const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config: {
    theme: {
      colors: {
        primary100: '#f5f5f5',
        primary200: '#dddddd',
        primary500: '#6a6a6a',
        primary600: '#555555',
        primary700: '#222222',
        buttonPrimary500: '#252525',
        buttonPrimary600: '#151515',
      },
    },
  },
  bootstrap,
};
