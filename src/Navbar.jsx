
// props = cartCount,openModal

function Navbar({ cartCount, openModal }) {
  return (
    <div className="navbar">
      <h2 className="logo">Fake Store</h2>
      <button className="cart-btn" onClick={openModal}>
        Cart 🛒 ({cartCount})
      </button>
    </div>
  );
}

export default Navbar;
