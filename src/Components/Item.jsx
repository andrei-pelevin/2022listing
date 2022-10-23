import React from "react";
import PropTypes from 'prop-types';


const Item = ({item}) => {
    const imgUrl = item.MainImage ? item.MainImage.url_570xN : ''
    let price;
    switch(item.currency_code) {
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

    return (
        <div className="item">
        <div className="item-image">
            <a href={item.url}>
                <img src={imgUrl} alt=""/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{price}</p>
            <p className="item-quantity level-medium">{item.quantity}</p>
        </div>
    </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired
  };


export default Item;