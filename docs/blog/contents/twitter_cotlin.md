---
title: TwitterにあるLinkを収集するツール Cotlin で、世界中のプレゼンテーション資料を知ろう
published: true
date: 2020-03-15
description: Twitterに投稿されているLinkを収集するツール Cotlin を作りました。Collect links in tweet から、Cotlinという名前にしました。Androidのアレに似ています。
tags: ["Tool", "Artifacts", "Introduce", "Learning", "Twitter"]
cover_image: https://res.cloudinary.com/silverbirder/image/upload/v1584017984/cotlin/overview.png
socialMediaImage: https://res.cloudinary.com/silverbirder/image/upload/v1584017984/cotlin/overview.png
---

Twitterに投稿されているLinkを収集するツール Cotlin を作りました。

<b><span style="color: #d32f2f">Co</span></b>llec<b><span style="color: #d32f2f">t lin</span></b>ks in tweet 

から、Cotlinという名前にしました。Androidのアレに似ています。

[https://github.com/Silver-birder/Cotlin](https://github.com/Silver-birder/Cotlin)  <!--  TODO: embed  -->

[https://www.npmjs.com/package/@silverbirder/cotlin](https://www.npmjs.com/package/@silverbirder/cotlin)  <!--  TODO: embed  -->

<!--  TODO: TOC -->

# 動機
私は、[connpass](https://connpass.com/)等を使って、技術系のカンファレンスに参加することがありました。
カンファレンスで発表された資料は、Twitterで公開されることが多々あるので、それを自動収集できるようにしたいと考えたのが、Cotlinを作った動機です。

# 技術スタック
Google Apps Script ([Clasp](https://github.com/google/clasp/)) + Twitter API ([tweet search API](https://developer.twitter.com/en/docs/tweets/search/overview)) です。
[ライブラリを公開](https://github.com/Silver-birder/Cotlin#use-by-google-apps-script)していて、それを元に[API](https://github.com/Silver-birder/Cotlin/blob/master/sample/api.js)と[Client](https://github.com/Silver-birder/Cotlin/blob/master/sample/client.js)を簡単に作れるようにサンプルコードも用意しています。使い方は、全て[README.md](https://github.com/Silver-birder/Cotlin/blob/master/README.md)にあります。

# 困ったこと
Tweetに記述したリンクは、全て[t.co](https://help.twitter.com/ja/using-twitter/url-shortener)に短縮されてしまいます。
この短縮URLからオリジナルURLを手に入れるために、リダイレクトする必要があります。
実際に作ってみると、次のような記事に書いたとおり、GASで書くと、少し困ったことがありました。

[./gas_fetchall_redirect](./gas_fetchall_redirect.md)  <!--  TODO: embed  -->

そこで、複数のリダイレクトURLへリクエストする処理を並列化するために、Golangで開発していました。

しかし、そもそもTwitter API ([tweet search API](https://developer.twitter.com/en/docs/tweets/search/overview))のレスポンスには、オリジナルURLが含まれている([expanded_url](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets))ことに気づき、結局、Google Apps Script ([Clasp](https://github.com/google/clasp/))で開発することになりました。

# 良かったこと

毎日、プレゼンテーション資料を収集し、スプレットシートに記録するよう、自動化しました。  
※ 都合により、URLのリンクとTweetのリンクのみ記載しています。

[https://docs.google.com/spreadsheets/d/1IaJOw9-GdoHhz3D0CzvJfFitrmEN8KpgIleer9rmxiw/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1IaJOw9-GdoHhz3D0CzvJfFitrmEN8KpgIleer9rmxiw/edit?usp=sharing)  <!--  TODO: embed  -->

次のような資料を発見できるようになりました。

* **世界中**のプレゼンテーション資料
* **知らない技術カンファレンス**の資料
* **個人や学生**が公開した資料

そこから、次のような良かったことがありました。

* 『テストについて、同じように困っている人がいた。○○という技術で解決してるんだ！知らなかった！』  
* 『最近気になっている○○のアーキテクチャの資料だ。メリット・デメリットがよくまとまってて良い！』  
* 『リモートワークを取り組んでいる企業の話だ。これから私もリモートワークになるから、先に知見を知っておこう！』    

毎日、資料を読んでいると、1日2,3件ほど、自分の琴線に触れるものが現れます。とても刺激を受けて、作ってよかったなと思いました。

# 最後に
動機であった技術カンファレンスの参加は、実は最近減少しています。
理由は色々ありますが、まあ伏せておきます。

こういったツールによって、アンテナを広く張り巡らせておくことができます。
これのおかげで、様々な関心事をキャッチアップできるようになりました。

上のスプレットシートは、ずっと更新し続ける予定ですので、活用下さい。
