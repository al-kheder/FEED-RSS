import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./index.css";
import Feed from "./Feed";

function App() {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="text-xl font-semibold text-center mt-5 bg-red-300">
      <h1>RSS - Feed</h1>
      <h3>Good morning, Ali</h3>
      {articles.map((item, i) => {
        return (
          <Feed
            key={i}
            title={item.item.title}
            link={item.item.link}
            publicationsDate={item.item.pubDate}
          />
        );
      })}
    </div>
  );
}

export default App;
/* gories
: 
(4) ['video-encoding', 'microservices', 'netflix', 'streaming']
content:encoded
: 
"<p><a href=\"https://www.linkedin.com/in/liwei-gu
content:encodedSnippet
: 
"Liwei Guo, Vinicius Carvalho, Anush Moorthy, Adit
creator
: 
"Netflix Technology Blog"
dc:creator
: 
"Netflix Technology Blog"
guid
: 
"https://medium.com/p/946b9b3cd300"
isoDate
: 
"2024-04-09T22:12:32.000Z"
link
: 
"https://netflixtechblog.com/the-making-of-ves-the-cosmos-microservice-for-netflix-video-encoding-946b9b3cd300?source=rss----2615bd06b42e---4"
pubDate
: 
"Tue, 09 Apr 2024 22:12:32 GMT"
 */
