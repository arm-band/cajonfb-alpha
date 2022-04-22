const dom = `
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v13.0" nonce="cuUcL1dN"></script><!-- facebook埋め込み用スクリプト sdk.js -->
<header class="l-header">
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand my-0" href="./">CajonFB</a>
        </div>
    </nav>
</header>
<main class="l-main">
    <section class="container py-5">
        <h1>CajonFB - Demo</h1>
        <p>facebook埋め込み状態を判定して、埋め込み失敗時は代替リンクを表示させる Cajon のデモページ</p>
        <h2>埋め込み</h2>
        <div class="fb-page" id="cajonFBPage" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Meta</a></blockquote></div> <!-- 埋め込み用タグに id="cajonFBPage" を追加 -->
        <!--<div id="cajonAltLink"></div>-->
    </section>
</main>
<footer class="l-footer w-100">
    <small class="d-block pt-2 pb-3 text-center">© 2022 アルム＝バンド</small>
</footer>
`;

module.exports = dom;
