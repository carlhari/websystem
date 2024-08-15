/* eslint-disable @next/next/no-img-element */
import React from "react";

const images = ["desc01", "desc02", "desc03", "desc04"];
const Service = () => {
  return (
    <div className="service" id="service">
      <h1>Service</h1>

      <div>
        {images.map((item, key) => {
          return (
            <div key={key} className="service-content">
              <img
                src={`/assets/service/service-${item}.jpg`}
                alt={`image ${item}`}
              />
              <div>Service Title</div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
                dui sem, fermentum vitae, sagittis id, malesuada in, quam.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
