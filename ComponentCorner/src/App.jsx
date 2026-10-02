import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

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

  return (
    <div className="app">
      <Header storeName="ComponentCorner" />

      <Hero
        title="Fresh Coffee, Delivered"
        subtitle="Discover carefully selected coffee beans from around the world."
        ctaText="Shop Now"
      />

      <main>
        <h2>Featured Products</h2>

        <ProductCard
          name="Ethiopian Yirgacheffe"
          price={18}
          image="https://placehold.co/600x400"
          description="Bright and floral with delicate citrus notes."
        />

        <ProductCard
          name="Colombian Roast"
          price={16}
          image="https://placehold.co/600x400"
          description="Smooth and balanced with rich caramel notes."
        />

        <ProductCard
          name="House Espresso"
          price={20}
          image="https://placehold.co/600x400"
          description="Bold and rich with a smooth chocolate finish."
        />
      </main>
      
      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;