import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Quotes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="row">
        <ul>
          {items.map((item) => (
            <div key={item.quote_id} className="card m-5">
              <div className="card-header">Quote {item.quote_id}</div>
              <div className="card-body ">
                <blockquote className="blockquote mb-0">
                  <p>{item.quote}</p>
                  <footer className="blockquote-footer">
                    Quote by --
                    <cite title="Source Title">{item.author}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
};

export default Quotes;
