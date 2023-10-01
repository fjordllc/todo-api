# Message Board API

APIの使い方のプラクティスのためのお試し用APIサーバー

## 使い方

下記のコマンドでお試し用APIサーバーを立ち上げます。

```sh
npx soul-cli -d db.sqlite3 -p 8000
```

下記のコマンドでアクセスできるか確かめましょう。（本の一覧がJSONデータで表示されればOKです）

```sh
curl http://localhost:8000/api/tables/books/rows
{"data":[{"id":1,"title":"新しいLinuxの教科書","price":2822},{"id":2,"title":"いちばんやさしいアジャイル開発の教本","price":1584},{"id":3,"title":"SCRUM BOOT CAMP THE BOOK","price":2376},{"id":4,"title":"アジャイルサムライ","price":2574},{"id":5,"title":"アジャイルな見積りと計画づくり","price":3168},{"id":6,"title":"Rubyふりがなプログラミング","price":1980},{"id":7,"title":"ゼロからわかる Ruby 超入門","price":2592},{"id":8,"title":"プロを目指す人のためのRuby入門","price":3278},{"id":9,"title":"リーダブルコード","price":2640},{"id":10,"title":"イラスト図解式 この一冊で全部わかるWeb技術の基本","price":1663}],"total":12,"next":"/tables/books/rows?_limit=10&_page=2","previous":null}
```
