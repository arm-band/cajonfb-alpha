const dom = `
<div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div></div><!-- facebook埋め込み用タグ -->
<script src="https://connect.facebook.net/ja_JP/sdk.js?hash=82e922b8e93ec1aa3898a6ead106c664" async="" crossorigin="anonymous"></script><script async="" defer="" crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&amp;version=v13.0" nonce="cuUcL1dN"></script><!-- facebook埋め込み用スクリプト sdk.js -->
<header class="l-header">
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand my-0" href="./">CajonFB</a>
        </div>
    </nav>
</header><main class="l-main">
    <section class="container py-5">
        <h1>CajonFB - Demo</h1>
        <p>facebook埋め込み状態を判定して、埋め込み失敗時は代替リンクを表示させる Cajon のデモページ</p>
        <h2>埋め込み</h2>
        <div class="fb-page fb_iframe_widget" id="cajonFBPage" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=936&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&amp;locale=ja_JP&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="><span style="vertical-align: bottom; width: 340px; height: 500px;"><iframe name="f23dcc63f9c055" width="1000px" height="1000px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v13.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3c2f1c97520ec%26domain%3Dlocalhost%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Flocalhost%252Ff3dc60660c718%26relation%3Dparent.parent&amp;container_width=936&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&amp;locale=ja_JP&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=" style="border: none; visibility: visible; width: 340px; height: 500px;" class=""></iframe></span></div> <!-- 埋め込み用タグに id="cajonFBPage" を追加 -->
        <!--<div id="cajonFBPage"></div>--> <!-- 失敗時デモ用 -->
        <div id="cajonAltLink" style="display: none;"></div><!-- 代替リンク生成用 -->
    </section>
</main>
<footer class="l-footer w-100">
    <small class="d-block pt-2 pb-3 text-center">© 2022 アルム＝バンド</small>
</footer>
`;

module.exports = dom;
