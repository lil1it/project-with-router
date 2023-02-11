import React from "react";

const ListItem = ({ prod, products }) => {
  if (prod.el.id === products.elem.id) {
    <ListItem />
  }
  return <div>
    <p>{prod.amount}</p>
    <p>{prod.price}</p>
  </div>;
};

export default ListItem;
