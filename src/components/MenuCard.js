import React from "react";
import placeholderImage from "../assets/placeholder-image.png";

export default function MenuCard({ menu }) {
  const { name, price, imageUrl } = menu;

  return (
    <div className="col-3">
      {/* <pre>{JSON.stringify(menu, null, 2)}</pre> */}

      <div className="card">
        <img
          src={imageUrl || placeholderImage}
          className="card-img-top"
          style={{
            width: "100%",
            height: "10rem",
            objectFit: "cover",
          }}
          alt="menu-item"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Rp {new Intl.NumberFormat("id").format(price)}
          </p>
        </div>
      </div>
    </div>
  );
}
