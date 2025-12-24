import { useEffect, useState } from "react";
import "./App.css";
// Child Components
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartModal from "./CartModal";

// Parent Component
function App() 
{
// State - React Hook
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

// fetching products from fakestoreapi
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, []);

// Incase error occurs "unexpected toke <" in console.

  useEffect(() => {
    fetch("https://fakestoreapi.com")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API did not return array", data);
        }
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

// add to cart button
  const addToCartBtn = (product) => {
    const alreadyAdded = cart.find(item =>item.id === product.id);
    if(alreadyAdded) {
      alert("Item already added to the cart")
    } else {
      setCart(prevCart => [...prevCart,product]);
      // alert("1 Item is added to cart.")
    }
  };
// remove button
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
{/* navbar */}
      <Navbar
        cartCount={cart.length}
        openModal={() => setIsModalOpen(true)}
      />
{/* cart-modal */}
    {isModalOpen && ( 
      <CartModal
        cart = {cart}
        closeModal={() => setIsModalOpen(false)}
        removeFromCart={removeFromCart}
      />
    )}
{/* products details */}
      <ProductList
        products={products}
        addToCartBtn={addToCartBtn}
      />
    </>
  );     
}

export default App;
