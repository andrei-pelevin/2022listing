import React from "react";
import Item from "./Item";
import PropTypes from 'prop-types';

const Listing = ({data}) => {
    return (
        <div className="item-list">
            {data.map((item, i) => {
                return <Item item={item}  key={i}/>
            })}
        </div>
    )
}

Listing.propTypes = {
    data: PropTypes.array.isRequired
  };

export default Listing;