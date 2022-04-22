const cajonFB = require('../src/cajon_fb');
const fantasmaAssert = require('../sample/fantasma_assert');
const fantasmaException = require('../sample/fantasma_exception');

test('method:fantasma test:assert', () => {
    document.body.innerHTML = fantasmaAssert;
    const fbRootDOM = document.querySelector('#fb-root');
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.fantasma(fbRootDOM)).toBe(true);
});
test('method:fantasma test:exception', () => {
    document.body.innerHTML = fantasmaException;
    const fbRootDOM = document.querySelector('#fb-root');
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.fantasma(fbRootDOM)).toBe(false);
});
