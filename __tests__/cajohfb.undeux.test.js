const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/undeux/assert');

test('method:undeux test:assert', () => {
    document.body.innerHTML = domAssert;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    // 実行結果
    const flag = cajon.undeux();
    expect(flag).toBe(true);
    // 代替リンク
    const cajonAltDOM = document.querySelector('#cajonAltLink');
    const attr = cajonAltDOM.getAttribute('style');
    // 代替リンクタグに style="display: none;" が付いているか
    expect(attr).not.toBeNull();
    expect(attr).toBe('display: none;');
});
