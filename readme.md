# Cajon

## Abstract

facebook埋め込み状態を判定して、埋め込み失敗時は代替リンクを表示させる ESモジュール。

## Usage

1. facebook埋め込みを[ページプラグイン - ソーシャルプラグイン](https://developers.facebook.com/docs/plugins/page-plugin?locale=ja_JP)の「JavaScript SDK」の手順で実施。
2. `<div class="fb-page" ...>` に `id`属性 を付与(デフォルト: `cajonFBPage` / `<div class="fb-page" id="cajonFBPage" ...>`)
3. 代替リンク生成用の `div`タグ(`id`属性あり) を上述タグ直下に追記(デフォルト: `cajonAltLink` / `<div id="cajonAltLink"></div>`)
4. 以下のようにJSコードを追記

```js
import cajonFB from 'cajon_fb';

window.addEventListener('load', () => {
    const cajon = new cajonFB('https://www.facebook.com/facebook'); // 第一引数必須、埋め込みをしたい facebookページ のURL
    cajon.piano(); // Cajon 処理実行
});

```

## Argments

```js
/**
 * 引数:
 * @param {string}  link  - (必須) 埋め込み失敗時の代替リンク(facebookページ のリンク)
 * @param {string}  altid - (オプション) 埋め込み失敗時に代替リンクを埋め込むラッパー要素のid
 * @param {string}  id    - (オプション) facebookページ埋め込み(sdk.js)で埋め込まれる要素のラッパー要素のid
 * @param {integer} sec   - (オプション) 待機する秒数
 */
```