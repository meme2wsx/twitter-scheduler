const { TwitterApi } = require('twitter-api-v2');

// 環境変数から認証情報を取得
const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

// 素敵な文字列
const fortunes = [
  "どんな馬鹿でも、あら探しをしたり、難癖をつけたり、苦情を言ったりできるワオ。",
  "精神的に向上心のない者は馬鹿だワオ。。",
  "愛国者──政治家には馬鹿みたいにだまされ、征服者には手もなく利用される人間ワオ。",
  "馬鹿には会いたくないというのなら、まず自分の鏡を壊すことだワオね。",
  "馬鹿と議論するな。はた目には、どちらが馬鹿か分からないワオよ。",
  "知らないのがバカなのではない。吸収する姿勢がないのが、バカなのだワオ。",
  "馬鹿ほどうぬぼれの強いものはないワオ。",
  "勤勉のバカほど傍迷惑なものはないワオ。",
];

// ランダムに1つ選ぶ
const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

(async () => {
  try {
    // 選んだ文字列をツイート
    const tweet = await client.v2.tweet(`今日のお言葉: ${randomFortune}`);
    console.log('ツイート成功:', tweet);
  } catch (error) {
    console.error('エラー:', error);
  }
})();
