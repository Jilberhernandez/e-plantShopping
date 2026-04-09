import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';
import AboutUs from './components/AboutUs';

function App() {
  // Estado para alternar entre la página de inicio y la lista de productos
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Esta función permite que el logo o el botón "Home" nos devuelva al inicio
  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {/* Sección de la Landing Page */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Sección de la Lista de Productos */}
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        {showProductList && (
          <ProductList onHomeClick={handleHomeClick} />
        )}
      </div>
    </div>
  );
}

export default App;