---
title: "Hugoを用いたユーザページ作成"
date: 2020-12-05T16:35:03+09:00
tags: ["Hugo", "GithubPages"]
---
# Contents
## Hugoのインストール
[Hugo(Github)](https://github.com/gohugoio/hugo/releases)からWindows-64bitをダウンロードし，`c:\User\USERNAME\hugo\`に展開，Pathを通す．
（CMDから動くか確認）
## Git管理下でページ作成
`hugo new site PROJECTNAME`でプロジェクト作成
プロジェクトフォルダに移動しconfigの設定
`hugo new path/file`で`PROJECTNAME/ContentDir/path`にfileが作成される


## 参考
- https://www.membersedge.co.jp/blog/create-hugo-theme-and-deploy-to-github-pages/
- https://gohugo.io/