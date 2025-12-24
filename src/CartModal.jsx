// props ??

function CartModal({ cart, closeModal, removeFromCart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Cart Items</h2>

        {cart.map(item => (
          <div key={item.id} className="modal-item">
            <img src={item.image} alt={item.title} />

            <div>
              <p>{item.title}</p>
              <p>Rs.{item.price}</p>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}

        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
