# TODO API

APIの使い方のプラクティスのためのお試し用APIサーバー

## 使い方

下記のコマンドでお試し用APIサーバーを立ち上げます。

```sh
npx soul-cli -d db.sqlite3 -p 8000
```

下記のコマンドでアクセスできるか確かめましょう。（本の一覧がJSONデータで表示されればOKです）

```sh
curl http://localhost:8000/api/tables/todos/rows
{"data":[{"id":1,"body":"牛乳を買う"},{"id":2,"body":"水を買う"},{"id":3,"body":"卵を買う"},{"id":4,"body":"筋トレをする"},{"id":5,"body":"ヨガをする"},{"id":6,"body":"誕生日プレゼントを買う"},{"id":7,"body":"美容室の予約をする"},{"id":8,"body":"お金を銀行から下ろす"},{"id":9,"body":"パスポートを更新する"},{"id":10,"body":"免許証を更新する"}],"total":10,"next":"/tables/todos/rows?_limit=10&_page=2","previous":null}
```
