import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        class="text-center text-white"
        style={{ backgroundColor: `#45637d` }}
      >
        <div class="container p-4">
          <section class="">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="ratio ratio-16x9">
                  <iframe
                    class="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.2)` }}
        >
          © 2020 Copyright:
          <a
            class="text-white"
            href="https://www.youtube.com/channel/UC9wmhRj6ts0HEuF61TdCiTw"
          >
            Ravindu Sathsara
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
