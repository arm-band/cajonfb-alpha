import { CajonFB } from './cajon.js';

window.addEventListener('load', () => {
    const cajon = new CajonFB('https://www.facebook.com/facebook');
    cajon.piano();
});
