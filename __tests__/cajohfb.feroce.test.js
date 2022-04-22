const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/feroce/assert');
const domExceptionMezzosoprano = require('../sample/mezzosoprano/exception');
const domExceptionFantasma = require('../sample/fantasma/exception');
const domExceptionCorrente = require('../sample/corrente/exception');
const domExceptionPolonaise = require('../sample/polonaise/exception');

test('method:feroce test:assert', () => {
    document.body.innerHTML = domAssert;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.feroce()).toBe(true);
});
test('method:feroce test:exception (mezzosoprano)', () => {
    jest.spyOn(console, 'error').mockImplementation((mes) => {
        console.log(mes);
    });
    document.body.innerHTML = domExceptionMezzosoprano;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.feroce()).toBeNull();
});
test('method:feroce test:exception (fantasma)', () => {
    document.body.innerHTML = domExceptionFantasma;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.feroce()).toBe(false);
});
test('method:feroce test:exception (corrente)', () => {
    document.body.innerHTML = domExceptionCorrente;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.feroce()).toBe(false);
});
test('method:feroce test:exception (polonaise)', () => {
    document.body.innerHTML = domExceptionPolonaise;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.feroce()).toBe(false);
});
