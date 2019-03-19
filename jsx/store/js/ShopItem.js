'use strict';



const ShopItem = () => {
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">£{item.price.toFixed(2)}</div>
        <button>{item.currency}</button>
      </div>
    </div>
  );
};
