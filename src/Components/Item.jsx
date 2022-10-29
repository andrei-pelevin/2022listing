import React from "react";
import PropTypes from 'prop-types';


const Item = ({ item }) => {
  const imgUrl = item.MainImage ? item.MainImage.url_570xN : ''
  let price;
  switch (item.currency_code) {
    case 'EUR':
      price = '€ ' + item.price;
      break;

    case 'USD':
      price = '$ ' + item.price;
      break;

    default:
      price = item.price + ' ' + item.currency_code;
      break;
  }

  let level = '';

  if (item.quantity <= 10) {
    level = 'item-quantity level-low';
  }
  else if (item.quantity <= 20 && item.quantity > 10) {
    level = 'item-quantity level-medium';
  }
  else if (item.quantity > 20) {
    level = 'item-quantity level-high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={imgUrl} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{ item.title?.length > 50 ? item.title.slice(0, 50) + '...' : item.title }</p>
        <p className="item-price">{price}</p>
        <p className={level}>{item.quantity}</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};


export default Item;