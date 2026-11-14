import React from "react";
export default function CartPanel({ cart, onChangeQuantity, onRemove, onClear }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="cart-panel">
      <div className="cart-title-row">
        <div><span className="eyebrow">YOUR SELECTION</span><h2>Your order</h2></div>
        {cart.length > 0 && <button className="text-button" onClick={onClear}>Clear all</button>}
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart"><span>🧺</span><h3>Your basket is empty</h3><p>Add something delicious from the menu.</p></div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="cart-item-info"><strong>{item.name}</strong><span>₦{(item.price * item.quantity).toLocaleString("en-NG")}</span>
                  <div className="quantity-control">
                    <button aria-label={`Decrease ${item.name}`} onClick={() => onChangeQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name}`} onClick={() => onChangeQuantity(item.id, 1)}>＋</button>
                    <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total"><span>Total</span><strong>₦{total.toLocaleString("en-NG")}</strong></div>
          <p className="cart-note">Demo checkout: your order is not sent to a restaurant.</p>
        </>
      )}
    </aside>
  );
}
