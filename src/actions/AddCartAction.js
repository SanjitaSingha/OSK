export const addItemCart = (d) => {
  return (disptach) => {
    disptach({
      type: 'ITEM_ADDED_TO_CART',
      payload: d
    });
  }
}
