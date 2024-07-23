const CartItem = ({ item, onRemove, onUpdateQuantity, onSelect }) => {
  return (
    <div className="cart-item">

            <input
        type="checkbox"
        checked={item.selected}
        onChange={() => onSelect(item._id)}
      />
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>{item.price} $</p>
        <div className="cart-item-quantity">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            disabled={item.quantity >= item.stock}
          >
            +
          </button>
        </div>
        <button className="btn" onClick={() => onRemove(item.id)}>
          <i className="bi bi-trash"></i>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;