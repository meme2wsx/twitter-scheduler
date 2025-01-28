const fs = require('fs');
const path = require('path');
const tweetSets = require('./tweetSets');
const client = require('./twitterClient');

// ランダムに文字列とイメージのセットを選ぶ関数
const getRandomTweetSet = () => {
  return tweetSets[Math.floor(Math.random() * tweetSets.length)];
};

// 画像をアップロードする関数
const uploadMedia = async (imagePath) => {
  const mediaData = fs.readFileSync(imagePath);
  const mediaId = await client.v1.uploadMedia(mediaData, { mimeType: 'image/png' });
  return mediaId;
};

// 実際にツイートする関数
const postTweetWithImage = async (text, imagePath, dryRun = false) => {
  if (dryRun) {
    console.log(`DRY_RUNモードワオ: ツイートをスキップしましたワオ。文字列="${text}", 画像="${imagePath}"`);
    return;
  }

  try {
    let tweetData = { text };
    if (imagePath) {
      const mediaId = await uploadMedia(imagePath);
      tweetData = { text, media: { media_ids: [mediaId] } };
    }
    await client.v2.tweet(tweetData);
    console.log('ツイート成功ワオ！');
  } catch (error) {
    console.error('ツイートエラーワオ:', error.errors || error.message || error);
    process.exit(1); // エラーが発生した場合、プロセスを異常終了させる
  }
};

// main
(async () => {
  const tweetSet = getRandomTweetSet();
  const imagePath = tweetSet.image ? path.join(__dirname, '../images', tweetSet.image) : null; // 画像のパスを指定
  console.log(`選ばれたセットワオ: 文字列="${tweetSet.text}", 画像="${tweetSet.image}"`);
  const isDryRun = process.env.DRY_RUN === 'true'; // DRY_RUN環境変数で制御
  await postTweetWithImage(tweetSet.text, imagePath, isDryRun);
})();