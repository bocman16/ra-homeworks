'use strict';



const ShopItem = props => {
  return (
    <div className="main-content">
      <h2>{props.item.brand}</h2>
      <h1>{props.item.title}</h1>
      <h3>{props.item.description}</h3>
      <div className="description">{props.item.descriptionFull}</div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">£{props.item.price.toFixed(2)}</div>
        <button>{props.item.currency}</button>
      </div>
    </div>
  );
};
