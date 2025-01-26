const { TwitterApi } = require('twitter-api-v2');

// 環境変数から認証情報を取得
const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

// ランダムに選ぶおみくじの文字列
const fortunes = ["大吉", "小吉", "吉", "大凶"];

// ランダムに1つ選ぶ
const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

(async () => {
  try {
    // 選んだ文字列をツイート
    const tweet = await client.v2.tweet(`今日のおみくじ結果は: ${randomFortune}`);
    console.log('ツイート成功:', tweet);
  } catch (error) {
    console.error('エラー:', error);
  }
})();
