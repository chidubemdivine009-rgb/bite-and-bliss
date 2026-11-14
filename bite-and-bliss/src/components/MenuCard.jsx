import React from "react";
export default function MenuCard({ item, onAdd }) {
  return (
    <article className="menu-card">
      <div className="menu-image-wrap">
        <img src={item.image} alt={item.name} className="menu-image" />
        {item.tag && <span className="food-tag">{item.tag}</span>}
      </div>
      <div className="menu-card-body">
        <div className="menu-card-heading">
          <h3>{item.name}</h3>
          <strong>₦{item.price.toLocaleString("en-NG")}</strong>
        </div>
        <p>{item.description}</p>
        <button className="button button-small" onClick={() => onAdd(item)}>Add to order <span>＋</span></button>
      </div>
    </article>
  );
}
