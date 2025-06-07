import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-yellow-300 font-mono">
      {/* Header Hero Section */}
      <section className="bg-yellow-300 min-h-screen relative overflow-hidden py-12 px-8">
        {/* Browser bar mockup */}
        <div className="absolute top-8 right-12">
          <div className="bg-white border-2 border-black rounded-lg p-3 shadow-lg">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-gray-100 px-3 py-2 text-xs rounded min-w-[120px]">
              mayart.com
            </div>
          </div>
        </div>

        {/* Placeholder para tu corona */}
        <div className="absolute top-12 left-12">
          <div className="w-16 h-16 bg-purple-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-xs font-bold text-center">TU CORONA AQUÍ</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto">
          <div className="text-center mb-20">
            {/* MAY title */}
            <div className="bg-pink-500 border-4 border-black rounded-full px-16 py-8 mb-6 shadow-lg transform -rotate-2">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider">MAY</h1>
            </div>
            
            {/* ART title */}
            <div className="bg-pink-500 border-4 border-black rounded-full px-20 py-8 shadow-lg transform rotate-1">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider">ART</h1>
            </div>
          </div>

          {/* Placeholder para tu robot */}
          <div className="absolute top-24 right-24">
            <div className="w-20 h-24 bg-cyan-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-center">TU ROBOT AQUÍ</span>
            </div>
          </div>

          {/* Description text */}
          <div className="max-w-2xl text-center text-black text-xl font-bold leading-relaxed mb-16">
            <p>
              Mayra es una artista increíble que hace las mejores creaciones del mundo. 
              Ella ha sido reconocida en los Murphy Illustration Awards. Su trabajo ha 
              sido exhibido en galerías de todo el mundo por su creatividad. Su 
              trabajo es conocido por su estilo único, divertido y lleno de amor. 
              Mayra es realmente genial.
            </p>
          </div>

          {/* Placeholder ilustración izquierda */}
          <div className="absolute bottom-24 left-20">
            <div className="w-16 h-20 bg-purple-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-center">TU DIBUJO AQUÍ</span>
            </div>
          </div>

          {/* Placeholder ilustración derecha con texto */}
          <div className="absolute bottom-24 right-20">
            <div className="w-24 h-16 bg-cyan-200 border-4 border-black rounded-lg flex items-center justify-center shadow-lg mb-2">
              <span className="text-xs font-bold text-center">TU DIBUJO AQUÍ</span>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold bg-white border-2 border-black rounded px-2 py-1">¡HOLA!</div>
            </div>
          </div>

          {/* Placeholder para tu sol */}
          <div className="absolute top-40 right-40">
            <div className="w-16 h-16 bg-yellow-200 border-4 border-black rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-center">TU SOL AQUÍ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="bg-yellow-300 py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <div className="bg-pink-500 border-4 border-black rounded-full px-16 py-6 inline-block shadow-lg transform -rotate-1">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-wider">CREACIONES</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg">
              <h3 className="text-3xl font-black mb-6">Mayra, Artista</h3>
              <p className="text-xl font-bold leading-relaxed">
                Ella hace las mejores creaciones del mundo. Ella ha sido reconocida por las cosas 
                increíbles que ha hecho como artista, las cuales son muy bonitas. Sus trabajos 
                han sido vistos por millones de personas, quienes se han inspirado al ver su trabajo. 
                Como resultado, ella es una artista muy respetada. Como dice ella misma: "Solo hago 
                lo que me gusta." Ella es increíble.
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="text-center mb-20">
            <div className="bg-yellow-400 border-4 border-black rounded-full px-12 py-6 inline-block shadow-lg">
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

          {/* Product showcase */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-pink-500 border-4 border-black rounded-lg p-8 mb-4 shadow-lg">
                <div className="w-20 h-20 bg-yellow-200 border-4 border-black rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs font-bold text-center">TU CUADRO</span>
                </div>
                <div className="text-sm font-bold">CUADROS</div>
              </div>
              <div className="text-lg font-bold mb-2">Cuadros personalizados</div>
              <div className="text-sm">Arte único para ti</div>
            </div>

            <div className="text-center">
              <div className="bg-cyan-400 border-4 border-black rounded-lg p-8 mb-4 shadow-lg">
                <div className="w-20 h-20 bg-pink-200 border-4 border-black rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs font-bold text-center">TU SOUVENIR</span>
                </div>
                <div className="text-sm font-bold">SOUVENIRS</div>
              </div>
              <div className="text-lg font-bold mb-2">Souvenirs</div>
              <div className="text-sm">Recuerdos especiales</div>
            </div>

            <div className="text-center">
              <div className="bg-green-400 border-4 border-black rounded-lg p-8 mb-4 shadow-lg">
                <div className="w-20 h-20 bg-purple-200 border-4 border-black rounded-lg mx-auto mb-3 transform rotate-45 flex items-center justify-center">
                  <span className="text-xs font-bold text-center transform -rotate-45">TU KIT</span>
                </div>
                <div className="text-sm font-bold">KITS</div>
              </div>
              <div className="text-lg font-bold mb-2">Kits parejas</div>
              <div className="text-sm">Para celebrar el amor</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 border-4 border-black rounded-lg p-8 mb-4 shadow-lg">
                <div className="w-20 h-20 bg-orange-200 border-4 border-black rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs font-bold text-center">TU HILORAMA</span>
                </div>
                <div className="text-sm font-bold">HILORAMA</div>
              </div>
              <div className="text-lg font-bold mb-2">Hilorama</div>
              <div className="text-sm">Arte con hilos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Section */}
      <section className="bg-yellow-300 py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <div className="bg-black border-4 border-black rounded-full px-16 py-6 inline-block shadow-lg">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-wider">PROCESO</h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg">
                <h3 className="text-3xl font-black mb-6">Mayra, Creadora</h3>
                <p className="text-xl font-bold leading-relaxed">
                  Mayra es una artista increíble que acaba de descubrir su Animación para 
                  Principiantes curso en Domestika. Ella crea personajes en Photoshop y los 
                  anima en After Effects. Puedes ver algunos de sus trabajos más recientes. 
                  Ella disfruta crear personajes únicos para su trabajo. Ella dice que son 
                  como preguntas que ella misma se hace.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg">
                <div className="bg-gray-800 border-2 border-black rounded-lg p-6 mb-6">
                  <div className="bg-gray-600 h-3 w-full mb-4 rounded"></div>
                  <div className="bg-pink-200 border-4 border-black rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-sm font-bold text-center">TU ANIMACIÓN</span>
                  </div>
                  <div className="bg-gray-600 h-3 w-3/4 rounded"></div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 border-2 border-black rounded px-6 py-3 inline-block">
                    <span className="text-white font-bold">Ver el proceso →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character in chair */}
      <section className="bg-gradient-to-b from-yellow-300 to-pink-400 py-24">
        <div className="container mx-auto px-8 text-center">
          <div className="inline-block">
            <div className="bg-cyan-400 border-4 border-black rounded-lg p-12 shadow-lg">
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

      {/* Store Section */}
      <section className="bg-gradient-to-b from-pink-400 to-green-400 py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-20">
            <div className="bg-black border-4 border-black rounded-full px-16 py-6 inline-block shadow-lg">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-wider">TIENDA OFICIAL</h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg">
              <h3 className="text-3xl font-black mb-6">Mayra, Vendedora Independiente</h3>
              <p className="text-xl font-bold leading-relaxed">
                Ella vende cosas bonitas. Todas las cosas que has visto aquí están disponibles para comprar. Es un 
                comercio independiente con una selección de productos únicos. Puedes encontrar todo lo que necesitas 
                en la tienda oficial de Mayra. Ella ofrece una gran variedad de objetos perfectos para cada tipo de persona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Store Display */}
      <section className="bg-gradient-to-b from-green-400 to-gray-800 py-24">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Stickers */}
          <div className="flex justify-center space-x-12 mb-20">
            <div className="bg-green-400 border-4 border-black rounded-full px-8 py-4 shadow-lg transform -rotate-12">
              <span className="text-xl font-black">¡NUEVO!</span>
            </div>
            <div className="bg-green-400 border-4 border-black rounded-full px-8 py-4 shadow-lg transform rotate-12">
              <span className="text-xl font-black">ENVÍO GRATIS</span>
            </div>
          </div>

          {/* Store window */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border-4 border-black rounded-lg p-10 shadow-2xl">
              <div className="bg-gray-100 border-2 border-black rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="ml-6 bg-white border border-gray-300 px-4 py-2 rounded">
                    tienda.mayart.com
                  </div>
                </div>
                
                <div className="bg-yellow-300 border-2 border-black rounded-lg p-12">
                  <div className="flex items-center justify-between gap-8">
                    <div className="bg-pink-400 border-4 border-black rounded-lg p-6">
                      <div className="w-20 h-24 bg-orange-200 border-2 border-black rounded-lg flex items-center justify-center mb-4">
                        <span className="text-xs font-bold text-center">TU PRODUCTO</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-white border-2 border-black rounded px-3 py-2">
                          <span className="text-sm font-bold">¡PERFECTO!</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center flex-1">
                      <div className="bg-black border-4 border-black rounded-lg px-10 py-6 mb-6">
                        <span className="text-white font-black text-2xl md:text-3xl">EL REGALO PERFECTO...</span>
                      </div>
                      <div className="bg-black border-4 border-black rounded-lg px-10 py-6 mb-6">
                        <span className="text-white font-black text-2xl md:text-3xl">PARA LA GENTE</span>
                      </div>
                      <div className="bg-black border-4 border-black rounded-lg px-10 py-6 mb-6">
                        <span className="text-white font-black text-2xl md:text-3xl">QUE AMAS</span>
                      </div>
                      <div className="text-2xl font-bold">MAYART REGALOS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom sticker */}
          <div className="text-center mt-12">
            <div className="bg-green-400 border-4 border-black rounded-full px-12 py-6 inline-block shadow-lg">
              <span className="text-2xl font-black">¡COMPRA AHORA!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 py-12">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-black">MAYART</div>
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-black border-4 border-black rounded-full flex items-center justify-center">
                <span className="text-white font-black text-2xl">M</span>
              </div>
              <div className="bg-pink-400 border-4 border-black rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-black font-black text-2xl">♥</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;