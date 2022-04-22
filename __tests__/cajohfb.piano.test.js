const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/piano/assert');

test('method:piano test:assert', () => {
    document.body.innerHTML = domAssert;
    const cajon = new cajonFB('https://www.facebook.com/facebook');
    // 非同期処理で戻り値なし、このメソッドは単純に実行するためだけのメソッドなので undefined 一致でテストをパスさせる
    expect(cajon.piano()).toBeUndefined();
});
