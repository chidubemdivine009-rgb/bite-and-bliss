import React from "react";
import { useMemo, useState } from "react";
import { menuItems } from "../data/menu";
import MenuCard from "../components/MenuCard";
import CartPanel from "../components/CartPanel";

const categories = ["All", ...new Set(menuItems.map(item => item.category))];

export default function Menu({ cart, setCart }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => menuItems.filter(item => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch = `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [category, search]);

  function addToCart(item) {
    setCart(current => {
      const existing = current.find(cartItem => cartItem.id === item.id);
      if (existing) return current.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
      return [...current, { ...item, quantity: 1 }];
    });
  }

  function changeQuantity(id, amount) {
    setCart(current => current.map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter(item => item.quantity > 0));
  }

  return (
    <main className="page-main menu-page">
      <section className="page-heading container menu-heading">
        <span className="eyebrow">MADE FRESH FOR YOU</span><h1>Find your <span>favourite.</span></h1>
        <p>Explore the menu, pick what you love and build your order.</p>
      </section>
      <section className="container menu-layout">
        <div className="menu-main">
          <div className="menu-tools">
            <div className="category-list">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={category === item ? "category-chip selected" : "category-chip"}>{item}</button>)}</div>
            <label className="search-box"><span>⌕</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search meals..." aria-label="Search meals" /></label>
          </div>
          <div className="menu-grid">
            {filteredItems.map(item => <MenuCard key={item.id} item={item} onAdd={addToCart} />)}
          </div>
          {filteredItems.length === 0 && <p className="no-results">No meals found. Try another search.</p>}
        </div>
        <CartPanel cart={cart} onChangeQuantity={changeQuantity} onRemove={id => setCart(current => current.filter(item => item.id !== id))} onClear={() => setCart([])} />
      </section>
    </main>
  );
}
