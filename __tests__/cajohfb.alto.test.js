const cajonFB = require('../src/cajon_fb');
const domAssert = require('../sample/alto/assert');

test('method:alto test:assert', () => {
    const altLink = 'https://www.facebook.com/facebook';
    document.body.innerHTML = domAssert;
    const cajonFBPageDOM = document.querySelector('#cajonFBPage');
    const cajon = new cajonFB(altLink);
    // 実行結果
    const flag = cajon.alto(cajonFBPageDOM);
    expect(flag).toBe(true);
    // 埋め込みタグ
    const cajonFBPageDOMAttr = cajonFBPageDOM.getAttribute('style');
    // 埋め込みタグに style="display: none;" が付いているか
    expect(cajonFBPageDOMAttr).not.toBeNull();
    expect(cajonFBPageDOMAttr).toBe('display: none;');
    // 代替リンク
    const cajonAltDOM = document.querySelector('#cajonAltLink');
    const cajonAltDOMChildrenTagName = cajonAltDOM.childNodes[0].tagName;
    const cajonAltDOMChildrenAttr = cajonAltDOM.childNodes[0].getAttribute('href');
    // 代替リンクの aタグ があるか
    expect(cajonAltDOMChildrenTagName.toLowerCase()).toBe('a');
    // href属性 が付いているか
    expect(cajonAltDOMChildrenAttr).not.toBeNull();
    expect(cajonAltDOMChildrenAttr).toBe(altLink);
});
