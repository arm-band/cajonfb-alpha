const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/fantasma/assert');
const domException = require('../sample/fantasma/exception');

test('method:fantasma test:assert', () => {
    document.body.innerHTML = domAssert;
    const fbRootDOM = document.querySelector('#fb-root');
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.fantasma(fbRootDOM)).toBe(true);
});
test('method:fantasma test:exception', () => {
    document.body.innerHTML = domException;
    const fbRootDOM = document.querySelector('#fb-root');
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.fantasma(fbRootDOM)).toBe(false);
});
