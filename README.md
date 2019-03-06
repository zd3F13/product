# BootstrapProject

## ステータス

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) 
![npm](https://img.shields.io/npm/dt/express.svg)
[![Coverage Status](https://img.shields.io/coveralls/facebook/react/master.svg?style=flat)](https://coveralls.io/github/facebook/react?branch=master)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## ファイル構成

クローンまたはダウンロードすると、中には以下のディレクトリとファイルがあり、共通ファイルを論理的にグループ化しています。編集用としてassetsフォルダ、コンパイル済みのサーバアップロード用としてhtmlフォルダで構成されています。 以下を参考にしてください：

```
bootstrapProject/
└── assets/
│  ├── js/
│  ├── scss/
│  │  ├── mixins/
│  │  ├── utilities/
│  │  ├── _alert.scss
│  │  ├── ...
│  │  ├── _variables.scss
│  │  └── style.scss
│  └── index.html
└── html/
│  ├── css/
│  │  └── style.css
│  ├── images/
│  └── js/
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md
```

## 編集ファイル一覧
- [ __assets/index.html__ ] 初期フォーマットファイル
- [ __assets/sass/style.scss__ ] Scssファイル

## 環境ファイル一覧
- [ __.gitignore__ ] gitのアドに含めない除外リストファイル
- [ __gulpfile.js__ ] タスクランナー(html/jsコピー・Scssコンパイル・BrowserSync)
- [ __package.json__ ] npm使用モジュール一覧
- [ __README.md__ ] GitHub使用説明ファイル

## 環境設定

- コンソール(Bash)を起動
```shell
$ bash
```

- プロジェクトフォルダ内に移動
```shell
$ cd Desktop¥zdxxxx¥sm.Ch04.BootstrapData¥bootstrapProject
```

- npmモジュールを追加(初回のみ)
```shell
$ npm i
```

- Gulpタスクビルド実行(起動確認)
```shell
$ gulp
```

- Gulpビルド停止
```shell
Ctrl + c
```

- ローカルリポジトリとして初期化
```git
$ git init 
# gi
```

- 全てをアド
```git
$ git add . 
# ga.
```

- コミット
```git
$ git commit -m "first commit" 
# gcm "first commt"
```

- プロジェクトフォルダをリモートリポジトリと連動(初回のみ)
```git
$ git remote add origin git@github.com:xxxxxxx/BootstrapProject.git
# grao git@github.com:xxxxxxx/BootstrapProject.git
```

- プロジェクトフォルダをプッシュ
```git
$ git push -u origin master
# gpuom
```

## 制作進行中

- Gulpタスクビルド実行
```shell
$ gulp
```

- コンソールに別タブを作成(gulp監視とは別にgit操作用として画面を分割)
```shell
$ ctrl + t
```

- プロジェクトフォルダ内に移動
```shell
$ cd Desktop¥zdxxxx¥sm.Ch04.BootstrapData¥bootstrapProject
```

- アドコミット
```git
$ git add | git commit -m "add parts" 
# gacm "add parts"
```

- プッシュ
```git
$ git push -u origin master
# gpuom
```

## gulpでサーバーデータのアップロード

- host: "ftp.XXX.XXXX.com", //FTPホストアドレス
- user: "zdXXXX", //FTPユーザー名
- pass: "", //FTPパスワード
- port: 21, //ポート番号
- remotePath: "/WEB_ROOT/zdXXXX.XXX.XXXXX.com/HtDocs/" //サーバ上のアップロードパス

- htmlフォルダ内のデータをアップロード
```shell
$ gulp upload
```
