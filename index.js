import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";
//type="application/rss+xml" title="RSS" href="https://netflixtechblog.com/feed"
const feedUrl = "https://netflixtechblog.com/feed";

const parser = new RSSParser();

let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
  });
};

parse(feedUrl);

let app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(articles);
});
const server = app.listen("4000", () => {
  console.log("App is listening at http://localhost:4000");
});

console.log(articles);
export default server;
