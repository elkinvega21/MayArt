import React, { useState, useEffect } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [productSpecs, setProductSpecs] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowMenu(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  const products = [
    {
      id: 1,
      name: 'Cuadros Personalizados',
      description: 'Arte único diseñado especialmente para ti',
      price: 'Desde $50.000',
      specs: ['Tamaño: 20x30cm, 30x40cm, 40x60cm', 'Material: Lienzo premium', 'Marco incluido', 'Personalizable 100%']
    },
    {
      id: 2,
      name: 'Souvenirs Artísticos',
      description: 'Recuerdos especiales hechos con amor',
      price: 'Desde $15.000',
      specs: ['Llaveros personalizados', 'Imanes decorativos', 'Stickers únicos', 'Packaging especial']
    },
    {
      id: 3,
      name: 'Kits para Parejas',
      description: 'Regalos perfectos para celebrar el amor',
      price: 'Desde $80.000',
      specs: ['Tazas personalizadas (2 unidades)', 'Cuadro romántico', 'Tarjeta personalizada', 'Caja de regalo']
    },
    {
      id: 4,
      name: 'Arte Hilorama',
      description: 'Técnica tradicional con diseños modernos',
      price: 'Desde $120.000',
      specs: ['Tamaño: 30x30cm, 40x40cm', 'Hilos de colores premium', 'Base de madera natural', 'Diseño personalizado']
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
    setProductQuantity(1);
    setProductSpecs('');
  };

  const handlePurchase = () => {
    if (!selectedProduct) return;
    
    const message = `¡Hola! Me interesa comprar:
    
*Producto:* ${selectedProduct.name}
*Cantidad:* ${productQuantity}
*Especificaciones:* ${productSpecs || 'Sin especificaciones adicionales'}
*Precio:* ${selectedProduct.price}

¿Podrías darme más información sobre disponibilidad y forma de pago?`;

    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowProductModal(false);
  };

  const handleViewProcess = () => {
    window.open('https://wa.me/573001234567?text=¡Hola! Me gustaría conocer más sobre tu proceso creativo', '_blank');
  };

  return (
    <div className="min-h-screen bg-yellow-300 font-mono overflow-x-hidden">
      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black text-white transition-all duration-300 ${showMenu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black">MAYART</div>
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-pink-400 transition-colors duration-200 font-bold"
              >
                INICIO
              </button>
              <button 
                onClick={() => scrollToSection('creaciones')}
                className="hover:text-pink-400 transition-colors duration-200 font-bold"
              >
                CREACIONES
              </button>
              <button 
                onClick={() => scrollToSection('productos')}
                className="hover:text-pink-400 transition-colors duration-200 font-bold"
              >
                PRODUCTOS
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="hover:text-pink-400 transition-colors duration-200 font-bold"
              >
                PROCESO
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-yellow-300 min-h-screen relative py-12 px-4">
        {/* Browser mockup - top right */}
        <div className="absolute top-8 right-8 z-10">
          <div className="bg-white border-2 border-black rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-gray-100 px-4 py-2 text-xs rounded min-w-[140px]">
              mayart.com
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto relative z-20">
          <div className="text-center mb-20">
            {/* MAY title */}
            <div className="bg-pink-500 border-4 border-black rounded-full px-16 py-8 mb-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider">MAY</h1>
            </div>
            
            {/* ART title */}
            <div className="bg-pink-500 border-4 border-black rounded-full px-20 py-8 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider">ART</h1>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl text-center text-black text-xl font-bold leading-relaxed mb-16 px-4">
            <p className="hover:scale-105 transition-transform duration-200">
              Mayra es una artista increíble que hace las mejores creaciones del mundo. 
              Ella ha sido reconocida en los Murphy Illustration Awards. Su trabajo ha 
              sido exhibido en galerías de todo el mundo por su creatividad única, 
              divertida y llena de amor.
            </p>
          </div>
        </div>

        {/* Decorative elements - better positioned */}
        <div className="hidden lg:block">
          {/* Robot - top right area */}
          <div className="absolute top-24 right-32">
            <div className="w-20 h-24 bg-cyan-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
              <span className="text-xs font-bold text-center">TU ROBOT AQUÍ</span>
            </div>
          </div>

          {/* Left illustration */}
          <div className="absolute bottom-32 left-20">
            <div className="w-16 h-20 bg-purple-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
              <span className="text-xs font-bold text-center">TU DIBUJO AQUÍ</span>
            </div>
          </div>

          {/* Right illustration with speech */}
          <div className="absolute bottom-32 right-24">
            <div className="w-24 h-16 bg-cyan-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg mb-2 hover:scale-110 transition-transform duration-200">
              <span className="text-xs font-bold text-center">TU DIBUJO AQUÍ</span>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold bg-white border-2 border-black rounded px-2 py-1">¡HOLA!</div>
            </div>
          </div>

          {/* Sun - top center area */}
          <div className="absolute top-40 right-1/3">
            <div className="w-16 h-16 bg-yellow-200 border-4 border-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
              <span className="text-xs font-bold text-center">TU SOL AQUÍ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Creaciones Section */}
      <section id="creaciones" className="bg-yellow-300 py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <div className="bg-pink-500 border-4 border-black rounded-full px-16 py-6 inline-block shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-wider">CREACIONES</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-3xl font-black mb-6">Mayra, Artista</h3>
              <p className="text-xl font-bold leading-relaxed">
                Ella hace las mejores creaciones del mundo. Ha sido reconocida por las cosas 
                increíbles que ha hecho como artista, las cuales son muy bonitas. Sus trabajos 
                han sido vistos por millones de personas, quienes se han inspirado al ver su trabajo. 
                Como dice ella misma: "Solo hago lo que me gusta."
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="text-center">
            <div className="bg-yellow-400 border-4 border-black rounded-full px-12 py-6 inline-block shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center space-x-6">
                <div className="w-8 h-8 bg-orange-200 border-2 border-black rounded flex items-center justify-center">
                  <span className="text-xs font-bold">🏆</span>
                </div>
                <span className="text-2xl font-black">PREMIOS</span>
                <div className="w-8 h-8 bg-orange-200 border-2 border-black rounded flex items-center justify-center">
                  <span className="text-xs font-bold">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="bg-gradient-to-b from-yellow-300 to-pink-400 py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <div className="bg-black border-4 border-black rounded-full px-16 py-6 inline-block shadow-lg">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-wider">PRODUCTOS</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => {
              const colors = ['bg-pink-500', 'bg-cyan-400', 'bg-green-400', 'bg-purple-500'];
              return (
                <div key={product.id} className="text-center hover:scale-105 transition-transform duration-200">
                  <button 
                    onClick={() => handleProductClick(product)}
                    className={`${colors[index]} border-4 border-black rounded-lg p-8 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-200 w-full`}
                  >
                    <div className="w-20 h-20 bg-yellow-200 border-4 border-black rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-xs font-bold text-center">PRODUCTO</span>
                    </div>
                    <div className="text-sm font-bold text-white">{product.name.split(' ')[0]}</div>
                  </button>
                  <div className="text-lg font-bold mb-2">{product.name}</div>
                  <div className="text-sm mb-2">{product.description}</div>
                  <div className="text-lg font-black text-green-700">{product.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="bg-pink-400 py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <div className="bg-black border-4 border-black rounded-full px-16 py-6 inline-block shadow-lg">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-wider">PROCESO</h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-3xl font-black mb-6">Mayra, Creadora</h3>
                <p className="text-xl font-bold leading-relaxed">
                  Mayra es una artista increíble que acaba de descubrir su Animación para 
                  Principiantes curso en Domestika. Ella crea personajes en Photoshop y los 
                  anima en After Effects. Disfruta crear personajes únicos para su trabajo. 
                  Ella dice que son como preguntas que ella misma se hace.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-gray-800 border-2 border-black rounded-lg p-6 mb-6">
                  <div className="bg-gray-600 h-3 w-full mb-4 rounded"></div>
                  <div className="bg-pink-200 border-4 border-black rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-sm font-bold text-center">TU ANIMACIÓN</span>
                  </div>
                  <div className="bg-gray-600 h-3 w-3/4 rounded"></div>
                </div>
                <div className="text-center">
                  <button 
                    onClick={handleViewProcess}
                    className="bg-blue-500 border-2 border-black rounded px-6 py-3 hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-white font-bold">Ver el proceso →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Section */}
      <section className="bg-gradient-to-b from-pink-400 to-green-400 py-24">
        <div className="container mx-auto px-8 text-center">
          <div className="inline-block">
            <div className="bg-cyan-400 border-4 border-black rounded-lg p-12 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-24 h-32 bg-yellow-200 border-4 border-black rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-sm font-bold text-center">TU PERSONAJE SENTADO</span>
              </div>
              <div className="w-32 h-20 bg-green-200 border-4 border-black rounded-lg mx-auto flex items-center justify-center">
                <span className="text-sm font-bold text-center">SILLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-3xl font-black text-white">MAYART</div>
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-pink-500 border-4 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-white font-black text-2xl">M</span>
              </div>
              <div className="bg-pink-400 border-4 border-white rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-black font-black text-2xl">♥</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black rounded-lg p-8 max-w-md w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-black">{selectedProduct.name}</h3>
              <button 
                onClick={() => setShowProductModal(false)}
                className="text-2xl font-bold hover:text-red-500 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <div className="w-full h-32 bg-yellow-200 border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <span className="text-sm font-bold">IMAGEN DEL PRODUCTO</span>
              </div>
              <p className="text-lg font-bold mb-2">{selectedProduct.description}</p>
              <p className="text-2xl font-black text-green-700 mb-4">{selectedProduct.price}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3">Especificaciones:</h4>
              <ul className="list-disc list-inside space-y-1">
                {selectedProduct.specs.map((spec, index) => (
                  <li key={index} className="text-sm">{spec}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Cantidad:</label>
              <input
                type="number"
                min="1"
                value={productQuantity}
                onChange={(e) => setProductQuantity(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border-2 border-black rounded focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Especificaciones adicionales:</label>
              <textarea
                value={productSpecs}
                onChange={(e) => setProductSpecs(e.target.value)}
                placeholder="Escribe aquí cualquier detalle especial que necesites..."
                className="w-full px-3 py-2 border-2 border-black rounded h-24 resize-none focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowProductModal(false)}
                className="flex-1 bg-gray-500 text-white font-bold py-3 px-6 rounded border-2 border-black hover:bg-gray-600 transition-colors duration-200"
              >
                Cancelar
              </button>
              <button
                onClick={handlePurchase}
                className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded border-2 border-black hover:bg-green-600 transition-colors duration-200"
              >
                Comprar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;