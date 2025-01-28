# twitter bot
### できること
GitHub Actionsのトリガーをつかって、あらかじめ用意しておいて文字列をランダムにtwitterに呟いてくれます。それだけ

### 要件
* 1日数回呟ければ良いのである。
* 無課金で実現したかった。
* クレジットカード情報をネットに登録したくない。
  * いろんなクラウドサービスがあるけど、請求先情報が必須だったりする。たとえ無料枠で収まるとしてもイヤ。


### おおまかな作業
1. X Developer Platform に登録 & 認証用のトークンを発行。
2. GitHub→リポジトリ→ Secrets and Variables にて、Xで発行したトークンを登録します。
   以下のキーが必要です。値は発行したものを格納してください。
   1. TWITTER_APP_SECRET
   2. TWITTER_ACCESS_TOKEN
   3. TWITTER_ACCESS_TOKEN
   4. TWITTER_ACCESS_SECRET
3. 投稿のタイミングは `.github/workflows/main.yml` を編集してください。
4. 用意しておく文言は `tweetsSets.js`  に書いてください。

### 注
* GH Actionは 公開リポジトリでないとスケジュール実行できません。
* Xの制限で、POSTできる上限があります（2025/1/27現在は、１日あたり17件） 。
https://docs.x.com/x-api/fundamentals/rate-limits#v2-limits-free

