const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/mezzosoprano/assert');
const domException = require('../sample/mezzosoprano/exception');

test('method:mezzosoprano test:assert', () => {
    document.body.innerHTML = domAssert;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.mezzosoprano()).toBe(true);
});
test('method:mezzosoprano test:exception', () => {
    document.body.innerHTML = domException;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.mezzosoprano()).toBe(false);
});
