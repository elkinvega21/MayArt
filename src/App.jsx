import React, { useState, useEffect } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

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

  const handlePurchase = (item) => {
    alert(`¡Genial! Has seleccionado: ${item}. ¡Pronto podrás comprarlo en la tienda oficial!`);
  };

  const handleViewProcess = () => {
    alert('¡Próximamente podrás ver todo el proceso creativo de Mayra!');
  };

  return (
    <div className="min-h-screen bg-yellow-300 font-mono overflow-x-hidden">
      {/* Animated Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black text-white transition-all duration-500 ${showMenu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black animate-pulse">MAYART</div>
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-pink-400 transition-colors duration-300 font-bold transform hover:scale-110"
              >
                INICIO
              </button>
              <button 
                onClick={() => scrollToSection('creaciones')}
                className="hover:text-pink-400 transition-colors duration-300 font-bold transform hover:scale-110"
              >
                CREACIONES
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="hover:text-pink-400 transition-colors duration-300 font-bold transform hover:scale-110"
              >
                PROCESO
              </button>
              <button 
                onClick={() => scrollToSection('tienda')}
                className="hover:text-pink-400 transition-colors duration-300 font-bold transform hover:scale-110"
              >
                TIENDA
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Hero Section */}
      <section id="home" className="bg-yellow-300 min-h-screen relative overflow-hidden py-6 px-4 sm:py-12 sm:px-8">
        {/* Browser bar mockup */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-12 z-10 animate-bounce">
          <div className="bg-white border-2 border-black rounded-lg p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <div className="bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 text-xs rounded min-w-[100px] sm:min-w-[140px]">
              mayart.com
            </div>
          </div>
        </div>

        {/* Placeholder para tu corona */}
        <div className="absolute top-4 left-4 sm:top-12 sm:left-12 z-10 animate-spin" style={{animationDuration: '8s'}}>
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-200 border-2 sm:border-4 border-black rounded-lg flex items-center justify-center shadow-lg hover:bg-purple-300 transition-colors duration-300">
            <span className="text-xs font-bold text-center px-1">TU CORONA</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto relative z-20">
          <div className="text-center mb-8 sm:mb-20">
            {/* MAY title */}
            <div className="bg-pink-500 border-2 sm:border-4 border-black rounded-full px-8 py-4 sm:px-16 sm:py-8 mb-4 sm:mb-6 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-110 animate-pulse">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-wider">MAY</h1>
            </div>
            
            {/* ART title */}
            <div className="bg-pink-500 border-2 sm:border-4 border-black rounded-full px-10 py-4 sm:px-20 sm:py-8 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500 hover:scale-110 animate-pulse" style={{animationDelay: '0.5s'}}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-wider">ART</h1>
            </div>
          </div>

          {/* Description text */}
          <div className="max-w-2xl text-center text-black text-base sm:text-xl font-bold leading-relaxed mb-8 sm:mb-16 px-4 animate-fade-in">
            <p className="transform hover:scale-105 transition-transform duration-300">
              Mayra es una artista increíble que hace las mejores creaciones del mundo. 
              Ella ha sido reconocida en los Murphy Illustration Awards. Su trabajo ha 
              sido exhibido en galerías de todo el mundo por su creatividad. Su 
              trabajo es conocido por su estilo único, divertido y lleno de amor. 
              Mayra es realmente genial.
            </p>
          </div>
        </div>

        {/* Decorative elements - hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block">
          {/* Placeholder para tu robot */}
          <div className="absolute top-24 right-24 animate-bounce" style={{animationDelay: '1s'}}>
            <div className="w-20 h-24 bg-cyan-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg hover:bg-cyan-300 transition-colors duration-300 transform hover:scale-110">
              <span className="text-xs font-bold text-center">TU ROBOT AQUÍ</span>
            </div>
          </div>

          {/* Placeholder ilustración izquierda */}
          <div className="absolute bottom-24 left-20 animate-bounce" style={{animationDelay: '2s'}}>
            <div className="w-16 h-20 bg-purple-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg hover:bg-purple-300 transition-colors duration-300 transform hover:scale-110">
              <span className="text-xs font-bold text-center">TU DIBUJO AQUÍ</span>
            </div>
          </div>

          {/* Placeholder ilustración derecha con texto */}
          <div className="absolute bottom-24 right-20 animate-bounce" style={{animationDelay: '1.5s'}}>
            <div className="w-24 h-16 bg-cyan-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg mb-2 hover:bg-cyan-300 transition-colors duration-300 transform hover:scale-110">
              <span className="text-xs font-bold text-center">TU DIBUJO AQUÍ</span>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold bg-white border-2 border-black rounded px-2 py-1 animate-pulse">¡HOLA!</div>
            </div>
          </div>

          {/* Placeholder para tu sol */}
          <div className="absolute top-40 right-40 animate-spin" style={{animationDuration: '10s'}}>
            <div className="w-16 h-16 bg-yellow-200 border-4 border-black rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-110">
              <span className="text-xs font-bold text-center">TU SOL AQUÍ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Illustration Section */}
      <section id="creaciones" className="bg-yellow-300 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <div className="text-center mb-10 sm:mb-20">
            <div className="bg-pink-500 border-2 sm:border-4 border-black rounded-full px-8 py-3 sm:px-16 sm:py-6 inline-block shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-500 hover:scale-110">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-wider">CREACIONES</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-20">
            <div className="bg-white border-2 sm:border-4 border-black rounded-lg p-6 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl sm:text-3xl font-black mb-4 sm:mb-6 animate-pulse">Mayra, Artista</h3>
              <p className="text-base sm:text-xl font-bold leading-relaxed">
                Ella hace las mejores creaciones del mundo. Ella ha sido reconocida por las cosas 
                increíbles que ha hecho como artista, las cuales son muy bonitas. Sus trabajos 
                han sido vistos por millones de personas, quienes se han inspirado al ver su trabajo. 
                Como resultado, ella es una artista muy respetada. Como dice ella misma: "Solo hago 
                lo que me gusta." Ella es increíble.
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="text-center mb-10 sm:mb-20">
            <div className="bg-yellow-400 border-2 sm:border-4 border-black rounded-full px-6 py-3 sm:px-12 sm:py-6 inline-block shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-200 border-2 border-black rounded flex items-center justify-center animate-spin" style={{animationDuration: '3s'}}>
                  <span className="text-xs font-bold">🏆</span>
                </div>
                <span className="text-lg sm:text-2xl font-black">PREMIOS</span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-200 border-2 border-black rounded flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold">⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product showcase */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 max-w-5xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <button 
                onClick={() => handlePurchase('Cuadros personalizados')}
                className="bg-pink-500 border-2 sm:border-4 border-black rounded-lg p-4 sm:p-8 mb-2 sm:mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
              >
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-yellow-200 border-2 sm:border-4 border-black rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-center">TU CUADRO</span>
                </div>
                <div className="text-xs sm:text-sm font-bold">CUADROS</div>
              </button>
              <div className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Cuadros personalizados</div>
              <div className="text-xs sm:text-sm">Arte único para ti</div>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <button 
                onClick={() => handlePurchase('Souvenirs')}
                className="bg-cyan-400 border-2 sm:border-4 border-black rounded-lg p-4 sm:p-8 mb-2 sm:mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
              >
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-pink-200 border-2 sm:border-4 border-black rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center animate-bounce">
                  <span className="text-xs font-bold text-center">TU SOUVENIR</span>
                </div>
                <div className="text-xs sm:text-sm font-bold">SOUVENIRS</div>
              </button>
              <div className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Souvenirs</div>
              <div className="text-xs sm:text-sm">Recuerdos especiales</div>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <button 
                onClick={() => handlePurchase('Kits parejas')}
                className="bg-green-400 border-2 sm:border-4 border-black rounded-lg p-4 sm:p-8 mb-2 sm:mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
              >
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-purple-200 border-2 sm:border-4 border-black rounded-lg mx-auto mb-2 sm:mb-3 transform rotate-45 hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-center transform -rotate-45">TU KIT</span>
                </div>
                <div className="text-xs sm:text-sm font-bold">KITS</div>
              </button>
              <div className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Kits parejas</div>
              <div className="text-xs sm:text-sm">Para celebrar el amor</div>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <button 
                onClick={() => handlePurchase('Hilorama')}
                className="bg-purple-500 border-2 sm:border-4 border-black rounded-lg p-4 sm:p-8 mb-2 sm:mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
              >
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-orange-200 border-2 sm:border-4 border-black rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-center">TU HILORAMA</span>
                </div>
                <div className="text-xs sm:text-sm font-bold">HILORAMA</div>
              </button>
              <div className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Hilorama</div>
              <div className="text-xs sm:text-sm">Arte con hilos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Section */}
      <section id="proceso" className="bg-yellow-300 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <div className="text-center mb-10 sm:mb-20">
            <div className="bg-black border-2 sm:border-4 border-black rounded-full px-8 py-3 sm:px-16 sm:py-6 inline-block shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-wider">PROCESO</h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="bg-white border-2 sm:border-4 border-black rounded-lg p-6 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl sm:text-3xl font-black mb-4 sm:mb-6 animate-pulse">Mayra, Creadora</h3>
                <p className="text-base sm:text-xl font-bold leading-relaxed">
                  Mayra es una artista increíble que acaba de descubrir su Animación para 
                  Principiantes curso en Domestika. Ella crea personajes en Photoshop y los 
                  anima en After Effects. Puedes ver algunos de sus trabajos más recientes. 
                  Ella disfruta crear personajes únicos para su trabajo. Ella dice que son 
                  como preguntas que ella misma se hace.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white border-2 sm:border-4 border-black rounded-lg p-6 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-800 border-2 border-black rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="bg-gray-600 h-2 sm:h-3 w-full mb-3 sm:mb-4 rounded animate-pulse"></div>
                  <div className="bg-pink-200 border-2 sm:border-4 border-black rounded-full w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center animate-spin" style={{animationDuration: '4s'}}>
                    <span className="text-xs sm:text-sm font-bold text-center">TU ANIMACIÓN</span>
                  </div>
                  <div className="bg-gray-600 h-2 sm:h-3 w-3/4 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="text-center">
                  <button 
                    onClick={handleViewProcess}
                    className="bg-blue-500 border-2 border-black rounded px-4 py-2 sm:px-6 sm:py-3 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-white font-bold text-sm sm:text-base">Ver el proceso →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character in chair */}
      <section className="bg-gradient-to-b from-yellow-300 to-pink-400 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="inline-block animate-bounce">
            <div className="bg-cyan-400 border-2 sm:border-4 border-black rounded-lg p-6 sm:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
              <div className="w-16 h-20 sm:w-24 sm:h-32 bg-yellow-200 border-2 sm:border-4 border-black rounded-lg mx-auto mb-4 sm:mb-6 flex items-center justify-center animate-pulse">
                <span className="text-xs sm:text-sm font-bold text-center">TU PERSONAJE SENTADO</span>
              </div>
              <div className="w-20 h-12 sm:w-32 sm:h-20 bg-green-200 border-2 sm:border-4 border-black rounded-lg mx-auto flex items-center justify-center">
                <span className="text-xs sm:text-sm font-bold text-center">SILLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="tienda" className="bg-gradient-to-b from-pink-400 to-green-400 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <div className="text-center mb-10 sm:mb-20">
            <div className="bg-black border-2 sm:border-4 border-black rounded-full px-8 py-3 sm:px-16 sm:py-6 inline-block shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse">
              <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white tracking-wider">TIENDA OFICIAL</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-20">
            <div className="bg-white border-2 sm:border-4 border-black rounded-lg p-6 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl sm:text-3xl font-black mb-4 sm:mb-6 animate-pulse">Mayra, Vendedora Independiente</h3>
              <p className="text-base sm:text-xl font-bold leading-relaxed">
                Ella vende cosas bonitas. Todas las cosas que has visto aquí están disponibles para comprar. Es un 
                comercio independiente con una selección de productos únicos. Puedes encontrar todo lo que necesitas 
                en la tienda oficial de Mayra. Ella ofrece una gran variedad de objetos perfectos para cada tipo de persona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Store Display */}
      <section className="bg-gradient-to-b from-green-400 to-gray-800 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          {/* Stickers */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-10 sm:mb-20">
            <div className="bg-green-400 border-2 sm:border-4 border-black rounded-full px-6 py-2 sm:px-8 sm:py-4 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300 hover:scale-110 animate-bounce">
              <span className="text-lg sm:text-xl font-black">¡NUEVO!</span>
            </div>
            <div className="bg-green-400 border-2 sm:border-4 border-black rounded-full px-6 py-2 sm:px-8 sm:py-4 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.5s'}}>
              <span className="text-lg sm:text-xl font-black">ENVÍO GRATIS</span>
            </div>
          </div>

          {/* Store window */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border-2 sm:border-4 border-black rounded-lg p-4 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gray-100 border-2 border-black rounded-lg p-3 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  <div className="ml-3 sm:ml-6 bg-white border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm">
                    tienda.mayart.com
                  </div>
                </div>
                
                <div className="bg-yellow-300 border-2 border-black rounded-lg p-4 sm:p-12">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
                    <div className="bg-pink-400 border-2 sm:border-4 border-black rounded-lg p-3 sm:p-6 order-2 sm:order-1 transform hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 bg-orange-200 border-2 border-black rounded-lg flex items-center justify-center mb-2 sm:mb-4 animate-pulse">
                        <span className="text-xs font-bold text-center">TU PRODUCTO</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-white border-2 border-black rounded px-2 py-1 sm:px-3 sm:py-2 animate-bounce">
                          <span className="text-xs sm:text-sm font-bold">¡PERFECTO!</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center flex-1 order-1 sm:order-2">
                      <div className="bg-black border-2 sm:border-4 border-black rounded-lg px-4 py-3 sm:px-10 sm:py-6 mb-2 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-black text-lg sm:text-2xl md:text-3xl">EL REGALO PERFECTO...</span>
                      </div>
                      <div className="bg-black border-2 sm:border-4 border-black rounded-lg px-4 py-3 sm:px-10 sm:py-6 mb-2 sm:mb-6 transform hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                        <span className="text-white font-black text-lg sm:text-2xl md:text-3xl">PARA LA GENTE</span>
                      </div>
                      <div className="bg-black border-2 sm:border-4 border-black rounded-lg px-4 py-3 sm:px-10 sm:py-6 mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
                        <span className="text-white font-black text-lg sm:text-2xl md:text-3xl">QUE AMAS</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-bold animate-pulse">MAYART REGALOS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom sticker */}
          <div className="text-center mt-8 sm:mt-12">
            <button 
              onClick={() => handlePurchase('Tienda completa')}
              className="bg-green-400 border-2 sm:border-4 border-black rounded-full px-8 py-3 sm:px-12 sm:py-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
            >
              <span className="text-lg sm:text-2xl font-black">¡COMPRA AHORA!</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 py-6 sm:py-12">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-2xl sm:text-3xl font-black animate-pulse">MAYART</div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black border-2 sm:border-4 border-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 animate-spin" style={{animationDuration: '8s'}}>
                <span className="text-white font-black text-lg sm:text-2xl">M</span>
              </div>
              <div className="bg-pink-400 border-2 sm:border-4 border-black rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 animate-pulse">
                <span className="text-black font-black text-lg sm:text-2xl">♥</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;