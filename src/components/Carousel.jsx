import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img className="d-block w-100" src="..." alt="First slide"> */}
            <img
              className="d-block "
              style={{ width: "100%" }}
              src="https://wallpapercave.com/wp/wp5201632.jpg"
              alt=""
              srcset=""
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>Braking Bad 8 </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam, ullam similique. Dolore accusamus voluptate nam,
                dolorum sunt soluta iure maiores dolorem a facilis eligendi
                consequuntur provident delectus. Nobis, quibusdam mollitia.
              </p>
            </div>
          </div>
          <div className="carousel-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
