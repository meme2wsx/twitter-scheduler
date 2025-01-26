import Twitter from "twitter-lite";
import messages from "../messages.json";

// Twitter APIクライアントの設定
const client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY!,
  consumer_secret: process.env.TWITTER_API_SECRET!,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN!,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
});

// ランダムなメッセージを取得
const getRandomMessage = (): string => {
  return messages[Math.floor(Math.random() * messages.length)];
};

// 投稿を実行
const postTweet = async () => {
  const message = getRandomMessage();
  try {
    await client.post("statuses/update", { status: message });
    console.log(`Posted: ${message}`);
  } catch (error) {
    console.error("Error posting tweet:", error);
  }
};

// スクリプトを実行
postTweet();

