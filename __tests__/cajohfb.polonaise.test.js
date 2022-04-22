const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/polonaise/assert');
const domException = require('../sample/polonaise/exception');

test('method:polonaise test:assert', () => {
    document.body.innerHTML = domAssert;
    const cajonFBPageDOM = document.querySelector('#cajonFBPage');
    const cajonFBPageChildrenTagName = cajonFBPageDOM.childNodes[0].tagName;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.polonaise(cajonFBPageChildrenTagName)).toBe(true);
});
test('method:polonaise test:exception', () => {
    document.body.innerHTML = domException;
    const cajonFBPageDOM = document.querySelector('#cajonFBPage');
    const cajonFBPageChildrenTagName = cajonFBPageDOM.childNodes[0].tagName;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon.polonaise(cajonFBPageChildrenTagName)).toBe(false);
});
