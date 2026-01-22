import React, { useEffect, useState } from "react";
import "./index.css";

const newsItems = [
  {
    title: "CNN news",
    url: "https://edition.cnn.com/",
    description: "This is CNN news",
  },
  {
    title: "BBC news",
    url: "https://www.bbc.com/news/world",
    description: "This is BBC news",
  },
  {
    title: "Sky news",
    url: "https://news.sky.com/",
    description: "This is SKY news",
  },
  {
    title: "Channels news",
    url: "https://www.channelstv.com/",
    description: "This is Channels news",
  },
];

function App() {
  const [currentItem, setCurrentItem] = useState(0);
  const [news, setNews] = useState(newsItems[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const item = newsItems[currentItem];
    setNews(item);

    setLoading(false);
  }, [currentItem]);

  const handleNext = () => {
    setCurrentItem(prev =>
      prev === newsItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentItem(prev =>
      prev === 0 ? newsItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="Main-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <a href={news.url}>
            {news.url}
          </a>
        </div>
      )}

      <div>
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
}

export default App;

