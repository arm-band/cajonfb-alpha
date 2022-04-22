const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/corrente/assert');
const domException = require('../sample/corrente/exception');

test('method:corrente test:assert', () => {
    document.body.innerHTML = domAssert;
    const fbRootDOM = document.querySelector('#fb-root');
    const cajonFBPageDOM = document.querySelector('#cajonFBPage');
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.corrente(fbRootDOM, cajonFBPageDOM)).toBe(true);
});
test('method:corrente test:exception', () => {
    document.body.innerHTML = domException;
    const fbRootDOM = document.querySelector('#fb-root');
    const cajonFBPageDOM = document.querySelector('#cajonFBPage');
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.corrente(fbRootDOM, cajonFBPageDOM)).toBe(false);
});
