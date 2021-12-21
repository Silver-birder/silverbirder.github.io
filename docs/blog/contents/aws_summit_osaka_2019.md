---
title: AWS Summit Osaka 2019 2019年6月27日参加レポート
published: true
date: 2019-06-29
description: 大阪のグランフロント大阪で開かれました「AWS Summit Osaka 2019」に参加してきましたので、私の中で良かった３つのセッションを紹介したいなと思います。
tags: ["AWS", "Report", "Osaka"]
cover_image: https://res.cloudinary.com/silverbirder/image/upload/v1614430707/silver-birder.github.io/blog/AWS_Summit_Osaka_2019.png
socialMediaImage: https://res.cloudinary.com/silverbirder/image/upload/v1614430707/silver-birder.github.io/blog/AWS_Summit_Osaka_2019.png
---

大阪のグランフロント大阪で開かれました「AWS Summit Osaka 2019」に参加してきましたので、
私の中で良かった３つのセッションを紹介したいなと思います。

[https://aws.amazon.com/jp/summits/osaka-2019/](https://aws.amazon.com/jp/summits/osaka-2019/)  <!--  TODO: embed  -->

<figure title="もらったもの">
<img alt="もらったもの" src="https://res.cloudinary.com/silverbirder/image/upload/v1614430752/silver-birder.github.io/blog/AWS_Summit_Osaka_2019_Novelty.png">
<figcaption>もらったもの</figcaption>
</figure>

hastagはこちら [#AWSSummit](https://twitter.com/hashtag/AWSSummit)

私のメモはこちら
[https://scrapbox.io/silverbirder-memo/AWS_Summit_Osaka_2019](https://scrapbox.io/silverbirder-memo/AWS_Summit_Osaka_2019)  <!--  TODO: embed  -->

<!--  TODO: TOC -->
# Amazon Sumerian によるVR/AR/MRアプリケーションの開発
## Amazon Sumerianの位置づけ

xRと呼ばれる３つのRについて説明がありました。

* xR 
  * VR (virtual reality)
    * 仮想の世界に没入
  * AR (augmented reality)
    * 物理に仮想をオーバレイ
  * MR(mixed reality)
    * 物理と仮想が相互作用

VRやARについては、広く知れ渡っていると思いますが、MRははじめて聞きました。  

VRは、Oculus Questのようなヘッドセットで仮想世界に没入できます。  
  
[https://www.youtube.com/watch?v=BqM27iLnDJs](https://www.youtube.com/watch?v=BqM27iLnDJs)  <!--  TODO: embed  -->

ARは、ポケモンGoのようなアプリで現実世界に仮想のキャラクタを投影できます。

[https://www.youtube.com/watch?time_continue=11&v=E7nwr6sA6Es](https://www.youtube.com/watch?time_continue=11&v=E7nwr6sA6Es)  <!--  TODO: embed  -->
  
MRは、VRとARのMixみたいな感じですね。ヘッドセットをかぶりながら、現実世界に仮想世界がmixされた景色が見えます。  
代表的なものとして、Microsoft HoloLensがあります。  

[https://www.youtube.com/watch?time_continue=69&v=KXkmyhoIcGQ](https://www.youtube.com/watch?time_continue=69&v=KXkmyhoIcGQ)  <!--  TODO: embed  -->

Amazon Sumerianは、このVR/ARにフォーカスしたサービスになります。

## xRアプリの課題
課題は下記の感じです。  

* ハードウェアが浸透していない  
* 何が必要？  
* どうやって作る？  
* 使ってもらえるかわからない  

私自身、xRのアプリを作ったことが１回だけありますが、同じような課題に悩んだことがあります。どうしても専用ハードウェアが必要になり、使ってもらうハードルが高くなってしまいます。  

## Sumerianの特徴
特徴は4つあります。

* Webブラウザベースの開発環境  
  * 開発する環境はWebブラウザベースになるので、特別なものを用意する必要がないです。良いですね。   
* マルチプラットフォーム  
  * モバイル、デスクトップ、VRヘッドセット、ARプラットフォームに対応しています。これが<b>一番魅力的</b>なんじゃないかなと思います。開発者にとってもユーザーにとってもありがたいですよね。    
* Sumerian Host  
  * セリフにあわせて口を動かしたりジェスチャーを行うキャラクターが8人いるそうです。こちらのキャラで開発する感じでしょうか？  
* AWSのサービスとの連携  
  * AWS SDKを使って各種サービスを使えます。そのため、より柔軟なアプリケーションを開発することができます。  

## 感想
xRはWeb好きな私でも興味がある技術です。Sumerianをつかうことで、xRの開発をよりスピーディに進めれるようなサービスと感じました。
実際触るかどうかは分かりませんが（無料枠使い切ってしまったので...)、こういったxRを開発するための手段を１つ知れたことは良かったと思います。  
（他のクラウドサービスにはxR向けサービスないのですかね...?）

[https://aws.amazon.com/jp/sumerian/pricing/](https://aws.amazon.com/jp/sumerian/pricing/)  <!--  TODO: embed  -->

[https://aws.amazon.com/jp/sumerian/](https://aws.amazon.com/jp/sumerian/)  <!--  TODO: embed  -->

※ 下記のレポートもご参考下さい
[https://dev.classmethod.jp/cloud/aws/awssummit-2019-tokyo-h2-01/](https://dev.classmethod.jp/cloud/aws/awssummit-2019-tokyo-h2-01/)  <!--  TODO: embed  -->

# クラウドネイティブなモダンアプリケーション開発入門
## モダンアプリケーションのデザインパターン
今回紹介されたパターンは、マイクロサービスのデザインパターンのことを指しているのでしょうか。
[https://microservices.io/patterns/microservices.html](https://microservices.io/patterns/microservices.html)  <!--  TODO: embed  -->

デザインパターンといえば、GoFのデザインパターンが有名ですね。
[https://en.wikipedia.org/wiki/Software_design_pattern](https://en.wikipedia.org/wiki/Software_design_pattern)  <!--  TODO: embed  -->
最近では、分散システムにフォーカスした[分散システムデザインパターン](https://www.oreilly.co.jp/books/9784873118758/)があります。

今回登壇で話されいた内容を私が説明するより、下記のほうが十分に説明がありますので、そちらをご参考下さい。
[https://qiita.com/yasuabe2613/items/3bff44e662c922083264](https://qiita.com/yasuabe2613/items/3bff44e662c922083264)  <!--  TODO: embed  -->

## 感想
今回のセッションでは、少し駆け足になっていたせいか全て聞き取れなかった印象でした。
ただ、マイクロサービスデザインパターンの存在を知れてよかったです。
CQRSというパターンを業務上調査した覚えがあるのですが、マイクロサービスデザインパターンの
１種だったんですね。知りませんでした。
デザインパターンというのは、先人の知恵が蓄積された素晴らしいカタログなので、
１度目を通しておこうと思いました。

※ 下記のレポートもご参考下さい
[https://dev.classmethod.jp/cloud/aws-summit-2019-day3-a03-06/](https://dev.classmethod.jp/cloud/aws-summit-2019-day3-a03-06/)  <!--  TODO: embed  -->

# クラウドネイティブがもたらすスケーラブルな開発、インフラストラクチャー、そして組織
## Nulabの現状
### Nulabのサービス
Nulabでは[backlog](https://backlog.com/ja/),[cacoo](https://cacoo.com/ja/),[typetalk](https://www.typetalk.com/ja/)の３つプロダクトをもっています。
backlogでは、ユーザー数が順調に伸びてきており、今年で100万人を突破したそうです。

### backlogについて
backlogには、4つのサービスに分かれており、それぞれIssues, Wiki, Gantt, Gitがあります。
前3つのサービスがMonolithで作られており、後1つのサービスが3つの言語(Perl, Python, Java)で作らていたそうです(Goで再実装されました)。

インフラ部分については(backlogの話に限らない...?)、クラスタが日本に6個、海外に2個存在し、インスタンスが200個もあるそうです。
それらは、Terraform+Ansibleで管理するようにしていたそうですが、<b>物理ホストのメンテナンスに大きくコストがかかる</b>という問題がありました。
また、コードベースが巨大化になると開発者、特に新規の人は理解するのに時間がかかってしまう問題もありました。

## Kubernetes・EKSの導入
Backlogの問題点から、開発やインフラをスケールするためKubernetesを検討するようになりました。
そこで(比較的規模が小さい?)CaccoにKubernetesで動くように運用してみたそうです。Nulabではコンテナのノウハウが蓄積されているので、効率よく進めれたそうですね。
しかし、kubernetesで運用していくと、ControlPlaneの面倒を見るのが手間になってきます。そこで、マネージドサービスであるEKSを使いはじめたそうです。

どういった点にメリット/デメリットがあるのか知るために、既存と新規をNginxを通して平行提供したそうです。
運用を進めることでkubernetesやEKSのノウハウが蓄積され、BacklogにEKSを検討する材料を手に入れることができます。

## 感想
Nulabさんの取り組みで勉強になったのは「小さなところから検討したい技術を導入し、ノウハウを蓄積する」ところです。
社内で実績がない技術をプロダクトとして導入するには、それなりに調査する必要があります。  
また、その技術に明るい人がいれば導入までの工数は短くなると思いますが、大抵の場合、そういった人は少ないはずです。
そこで、Nulabさんのような取り組みをすると、低いリスクで大きなリターンが得られます。  
小さいところからスタートするので、失敗してもリスクは少なくて済みますし、  
運用ノウハウが蓄積できれば、拡大できます。   
私も、プロダクトへ何度か提案したことがありますが、今回のポイントも検討してみたいなと思います。

※ 下記のレポートもご参考下さい
[https://aws.amazon.com/jp/blogs/startup/summit-osaka-2019-racap/](https://aws.amazon.com/jp/blogs/startup/summit-osaka-2019-racap/)  <!--  TODO: embed  -->

# 全体感想
AWS Summit Osakaは今回が初めてだそうです。前回は震災の影響で中止になったみたいです。     
AWSは、私がはじめて触ったクラウドサービスなので、今回参加してみました。    
Sumerianってものを知りませんでしたし、マイクロサービスデザインパターンも知りませんでした。  
こういう大規模なセミナーでは、様々なジャンルのセッションが集まっているので、全く知らない領域のセッションを受けてみたり、よりDeepなセッションを受けたりと面白いです。  
関西に住んでいる私にとっては、こういった大規模セミナーは中々珍しいので、とてもありがたかったです。  
