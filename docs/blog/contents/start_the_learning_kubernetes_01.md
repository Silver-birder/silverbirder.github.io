---
title: 一足遅れて Kubernetes を学び始める  - 01. 環境選択編 -
published: true
date: 2019-04-18
description: 経緯 Kubernetesを使えるようになりたいな〜（定義不明） けど、他にやりたいこと（アプリ開発）あるから後回しにしちゃえ〜！！と、今までずっと、ちゃんと学ばなかったKubernetesを、本腰入れて使ってみようと思います。
tags: ["Kubernetes", "Story", "Beginner"]
cover_image: https://res.cloudinary.com/silverbirder/image/upload/v1639816542/silver-birder.github.io/blog/GKE_template_1.png
socialMediaImage: https://res.cloudinary.com/silverbirder/image/upload/v1639816542/silver-birder.github.io/blog/GKE_template_1.png
---

<!--  TODO: TOC -->

# ストーリー
1. [一足遅れて Kubernetes を学び始める - 01. 環境選択編 -](./start_the_learning_kubernetes_01.md)
1. [一足遅れて Kubernetes を学び始める - 02. Docker For Mac -](./start_the_learning_kubernetes_02.md)
1. [一足遅れて Kubernetes を学び始める - 03. Raspberry Pi -](./start_the_learning_kubernetes_03.md)
1. [一足遅れて Kubernetes を学び始める - 04. kubectl -](./start_the_learning_kubernetes_04.md)
1. [一足遅れて Kubernetes を学び始める - 05. workloads その1 -](./start_the_learning_kubernetes_05.md)
1. [一足遅れて Kubernetes を学び始める - 06. workloads その2 -](./start_the_learning_kubernetes_06.md)
1. [一足遅れて Kubernetes を学び始める - 07. workloads その3 -](./start_the_learning_kubernetes_07.md)
1. [一足遅れて Kubernetes を学び始める - 08. discovery&LB その1 -](./start_the_learning_kubernetes_08.md)
1. [一足遅れて Kubernetes を学び始める - 09. discovery&LB その2 -](./start_the_learning_kubernetes_09.md)
1. [一足遅れて Kubernetes を学び始める - 10. config&storage その1 -](./start_the_learning_kubernetes_10.md)
1. [一足遅れて Kubernetes を学び始める - 11. config&storage その2 -](./start_the_learning_kubernetes_11.md)
1. [一足遅れて Kubernetes を学び始める - 12. リソース制限 -](./start_the_learning_kubernetes_12.md)
1. [一足遅れて Kubernetes を学び始める - 13. ヘルスチェックとコンテナライフサイクル -](./start_the_learning_kubernetes_13.md)
1. [一足遅れて Kubernetes を学び始める - 14. スケジューリング -](./start_the_learning_kubernetes_14.md)
1. [一足遅れて Kubernetes を学び始める - 15. セキュリティ -](./start_the_learning_kubernetes_15.md)
1. [一足遅れて Kubernetes を学び始める - 16. コンポーネント -](./start_the_learning_kubernetes_16.md)

# 経緯
Kubernetesを使えるようになりたいな〜（定義不明）
けど、他にやりたいこと（アプリ開発）あるから後回しにしちゃえ〜！！
と、今までずっと、ちゃんと学ばなかったKubernetesを、本腰入れて使ってみようと思います。✨ 

# 環境
```
iMac (21.5-inch, 2017)
```
私の知識レベルは、
「Kubernetesはコンテナオーケストレーションしてくれるやつでしょ」というざっくり認識で、関連用語は耳にしたことがあるだけで、よく理解できていません。

# 最初、何から始めよう？
マネージドサービスのGKE使ったほうが、最初は楽で簡単だから、そっちを使ったほうが良いみたいです。 😍

## GKE SetUp

![GKE 標準クラスタ テンプレート 1](https://res.cloudinary.com/silverbirder/image/upload/v1639816542/silver-birder.github.io/blog/GKE_template_1.png)

ノードってのは、ポッド（コンテナ）を入れるマシンなんだっけな。 ([PodとNode](https://nownabe.github.io/kubernetes-doc/tutorials/kubernetes_basics/3_explore_your_app.html))

![GKE 標準クラスタ テンプレート 2](https://res.cloudinary.com/silverbirder/image/upload/v1639816542/silver-birder.github.io/blog/GKE_template_2.png)

まあ、デフォルトで良いよね 🤔 

![GKE 標準クラスタ テンプレート 3](https://res.cloudinary.com/silverbirder/image/upload/v1639816542/silver-birder.github.io/blog/GKE_template_3.png)

単語がどれも分からなさすぎる...(Istio?自動プロビジョニング?垂直ポッド自動スケーリング？) 🤔🤔🤔 

# MacでKubernetes試せるから、そっちで学んでいこう...
ちょっと意味がわからない状態で、GKE動かしたらお金がかかる上に、何してるのか分からないから、もったいない。
Docker For MacにKubernetes使えるみたいだから、まずはそっちを使って学んでいこうかな。。。 💪 

次回は[こちら](./start_the_learning_kubernetes_02.md)です。
