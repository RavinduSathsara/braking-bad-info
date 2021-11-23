import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Cast = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
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
    return (
      <div class="alert alert-danger m-4" role="alert">
        {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="justify-content-md-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <ul className="m-2">
        <div>
          <div className="row">
            {items.map((item) => (
              // <li key={item.char_id}>{item.name}</li>
              <div className="card m-3 " style={{ width: "18rem" }}>
                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                <img
                  src={item.img}
                  style={{ width: `100%`, height: `100%` }}
                  className="card-img-top"
                  alt=""
                  srcset=""
                />
                <div className="card-body">
                  <h4>{item.name}</h4>
                  <br />
                  <h6>Nick Name : {item.nickname}</h6>
                  <p className="card-text">{item.occupation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ul>
    );
  }
};

export default Cast;
