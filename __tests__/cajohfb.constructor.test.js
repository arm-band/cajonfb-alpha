const cajonFB = require('../src/cajon_fb');

test('method:constructor test:assert', () => {
    const initObj = {
        altid:  "cajonAltLink",
        fbRoot: "fb-root",
        id:     "cajonFBPage",
        link:   "https://www.facebook.com/facebook",
        sec:    5
    };
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    expect(cajon).toEqual(initObj);
});
test('method:constructor test:exception', () => {
    jest.spyOn(console, 'error').mockImplementation((mes) => {
        console.log(mes);
    });
    const cajon = new cajonFB();
    expect(cajon).toEqual({});
});
