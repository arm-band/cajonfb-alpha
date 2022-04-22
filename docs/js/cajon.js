export class CajonFB {
    /**
     * コンストラクタ
     * @param {string}  link  - 埋め込み失敗時の代替リンク(facebookページのリンク)
     * @param {string}  altid - 埋め込み失敗時に代替リンクを埋め込むラッパー要素のid
     * @param {string}  id    - facebookページ埋め込み(sdk.js)で埋め込まれる要素のラッパー要素のid
     * @param {integer} sec   - 待機する秒数
     */
    constructor(link, altid = 'cajonAltLink', id = 'cajonFBPage', sec = 5) {
        if(link === undefined || link === null || link.length === 0) {
            console.error('代替リンクは必須です');
            return null;
        }
        this.link   = link;
        this.altid  = altid;
        this.id     = id;
        this.sec    = sec;
        this.fbRoot = 'fb-root';
    }
    /**
     * アルト: 代替リンクを作成
     * @param {DOM} cajonFBPageDOM - sdk.jsの埋め込みで実際にページが埋め込まれるタグ
     * @returns {boolean}          - 処理完了時に true
     */
    alto(cajonFBPageDOM) {
        if(cajonFBPageDOM) {
            cajonFBPageDOM.setAttribute('style', 'display: none;');
        }
        const cajonAltDOM = document.querySelector(`#${this.altid}`);
        let aElm = document.createElement('a');
        aElm.setAttribute('href', this.link);
        aElm.setAttribute('rel', 'noopener noreferrer');
        aElm.textContent = 'facebookページ';
        cajonAltDOM.appendChild(aElm);
        return true;
    }
    /**
     * メゾソプラノ: 代替リンク埋め込みラッパー要素の存在チェック
     * @returns {boolean} - 存在していれば true, 存在していなければ false
     */
    mezzosoprano() {
        return document.querySelector(`#${this.altid}`) ? true : false;
    }
    /**
     * アンドゥー: 埋め込み成功時、代替リンクラッパー要素を隠す
     * @returns {boolean} - 処理完了時に true
     */
    undeux() {
        const cajonAltDOM = document.querySelector(`#${this.altid}`);
        cajonAltDOM.setAttribute('style', 'display: none;');
        return true;
    }
    /**
     * ファンタズマ: 初期要素の存在チェック
     * @param {DOM} fbRootDOM - sdk.jsの埋め込みに使う初期要素
     * @returns {boolean}     - 存在していれば true, 存在していなければ false
     */
    fantasma(fbRootDOM) {
        return fbRootDOM ? true : false;
    }
    /**
     * コッレンテ: 初期要素と埋め込み用のタグに子要素が生じているかのチェック
     * @param {DOM} fbRootDOM      - sdk.jsの埋め込みに使う初期要素
     * @param {DOM} cajonFBPageDOM - sdk.jsの埋め込みで実際にページが埋め込まれるタグ
     * @returns {boolean}          - 2つのDOMの子要素の要素数が共に1以上ならば true, そうでなければ false
     */
    corrente(fbRootDOM, cajonFBPageDOM) {
        return fbRootDOM.childElementCount > 0 && cajonFBPageDOM && cajonFBPageDOM.childElementCount > 0 ? true : false;
    }
    /**
     * ポロネーズ: sdk.jsの埋め込みで実際にページが埋め込まれるタグの子要素のタグを判定。埋め込み成功の場合は span, 失敗時は元のコード blockquote を想定。
     * @param {string} cajonFBPageChildrenTagName - sdk.jsの埋め込みで実際にページが埋め込まれるタグの子要素のタグ名
     * @returns {boolean}                         - 存在していれば true, 存在していなければ false
     */
    polonaise(cajonFBPageChildrenTagName) {
        return cajonFBPageChildrenTagName.toLowerCase() === 'span' ? true : false;
    }
    /**
     * フェローチェ: 判定処理
     * @returns {boolean}    - 埋め込み成功時 true, 埋め込み失敗(代替リンク生成)時 false
     */
    feroce() {
        if(!this.mezzosoprano()) {
            console.error(`代替リンクを埋め込み先の要素が存在していません。`);
            return null;
        }
        const fbRootDOM = document.querySelector(`#${this.fbRoot}`);
        const cajonFBPageDOM = document.querySelector(`#${this.id}`);
        if(!this.fantasma(fbRootDOM)) {
            console.log(`id属性として${this.fbRoot}を持つdivタグが存在しません。`);
            // 代替リンクを埋め込み
            this.alto(cajonFBPageDOM);
            return false;
        }
        if(!this.corrente(fbRootDOM, cajonFBPageDOM)) {
            console.log('正常にfacebookページの埋め込みが行われませんでした (要素未発見)。');
            // 代替リンクを埋め込み
            this.alto(cajonFBPageDOM);
            return false;
        }
        const cajonFBPageChildrenTagName = cajonFBPageDOM.childNodes[0].tagName;
        if(!this.polonaise(cajonFBPageChildrenTagName)) {
            console.log('正常にfacebookページの埋め込みが行われませんでした (タグ名不一致)。');
            // 代替リンクを埋め込み
            this.alto(cajonFBPageDOM);
            return false;
        }
        this.undeux();
        console.log('facebookページ表示完了');
        return true;
    }
    /**
     * メイン処理
     * @returns {boolean}    - 埋め込み成功時 true, 埋め込み失敗(代替リンク生成)時 false
     */
    piano() {
        const ms = this.sec * 1000;
        new Promise((resolve) => {
            setTimeout(() => {
                // 待機関数。ページロード等のタイミングからDOMを調査する処理を開始するまで待機する。
                resolve();
            }, ms)
        }).then(() => {
            // 処理
            return this.feroce();
        });
    }
}
