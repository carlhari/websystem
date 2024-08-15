"use client";
import React, { useState } from "react";
import { newsData, newsDataList } from "../utils/data";

const NewsContent = (newsData: Array<object>) => {
  return (
    <div className="news-content">
      {newsData &&
        newsData.map((item: any, key: any) => {
          return (
            <div className="news-item" key={key}>
              <div className={`news-type ${item.type.toLowerCase()}`}>
                {item.type}
              </div>
              <div className="news-content-wrapper">
                <div className="news-date">{item.date}</div>

                <div className="news-description">
                  {item.title}, {item.description}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const News = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="news" id="news">
      <h1>News</h1>

      {NewsContent(newsData)}

      <button className="news-button" onClick={() => setShow(!show)}>
        {show ? "Hide News" : "Show News List"}
      </button>

      {show && NewsContent(newsDataList)}
    </div>
  );
};

export default News;
