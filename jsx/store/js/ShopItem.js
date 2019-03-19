'use strict';



const ShopItem = itemList => {
  return (
    <div className="main-content">
      <h2>{itemList.item.brand}</h2>
      <h1>{itemList.item.title}</h1>
      <h3>{itemList.item.description}</h3>
      <div className="description">{itemList.item.descriptionFull}</div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">£{itemList.item.price.toFixed(2)}</div>
        <button>{itemList.item.currency}</button>
      </div>
    </div>
  );
};
