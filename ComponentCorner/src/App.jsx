import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';

function App() {
  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // console.log("Added to cart:", product);
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price, 0
  );

  return (
    <div className="app">
      <Header storeName="ComponentCorner"
              cartCount={cart.length}
      />

      <Hero
        title="Fresh Coffee, Delivered"
        subtitle="Discover carefully selected coffee beans from around the world."
        ctaText="Shop Now"
      />

      <main>
        <h2>Featured Products</h2>

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </main>

      <section className="cart-section">
        <h2>Shopping Cart</h2>

        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}

            <div className="cart-total">
              <h3>Total: ${cartTotal.toFixed(2)}</h3>
            </div>
          </> 
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <p>Add some products to get started!</p>
          </div>
        )}
      </section>
      
      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;