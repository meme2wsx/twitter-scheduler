require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const checkEnvVariables = () => {
  const requiredEnvVars = ['TWITTER_APP_KEY', 'TWITTER_APP_SECRET', 'TWITTER_ACCESS_TOKEN', 'TWITTER_ACCESS_SECRET'];
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`環境変数 ${envVar} が設定されていませんワオ！`);
    }
  });
};

checkEnvVariables();

const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

module.exports = client;