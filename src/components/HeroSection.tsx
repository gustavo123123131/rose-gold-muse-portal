
import React from 'react';

const HeroSection = () => {
  // TODO: Receber cidade como prop quando a geolocalização for implementada
  const cidade = "[CIDADE DO IP]"; // Placeholder para substituição futura

  return (
    <section className="relative min-h-screen flex flex-col px-4 py-8">
      <div className="hero-gradient absolute inset-0 opacity-30"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
        
        {/* Profile Section */}
        <div className="mb-8">
          <div className="relative mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden rose-gold-border animate-pulse-glow mx-auto">
              <img 
                src="/placeholder.svg" 
                alt="Isabella Santos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Username */}
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-gradient mb-2">
            BAD MI | ISABELLA SANTOS
          </h1>
          
          <p className="text-rose-baby text-lg mb-2">@isabella</p>
          
          <p className="font-great-vibes text-xl md:text-2xl text-rose-baby mb-6">
            Sua musa particular 💋
          </p>
        </div>

        {/* Main Description */}
        <div className="space-y-4 mb-8 max-w-3xl">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-rose-baby/20">
            <h2 className="text-2xl font-bold text-gradient mb-4">
              PUTA CHEFE NÉ BEBÊ? A 01 🥇
            </h2>
            
            <p className="text-lg text-white mb-4">
              Moro em <span className="text-gold-soft font-semibold">{cidade}</span>
            </p>
            
            <div className="space-y-3 text-gray-200">
              <p className="text-base leading-relaxed">
                Os vídeos contém sexo explícito mostrando tudo, vídeo mamando, se masturbando e tudo mais que você pode imaginar!
              </p>
              
              <p className="text-lg font-semibold text-rose-baby">
                Aqui tem de tudo!!! 🔥
              </p>
              
              <p className="text-base leading-relaxed">
                <span className="text-gold-soft font-bold">NOVINHA DO BUCETÃO</span> 😛😋<br/>
                BUCETINHA TÃO GOSTOSA E NOVINHA QUE NEM PARECE QUE JÁ FOI USADA!! 😋🔥
              </p>
              
              <p className="text-base leading-relaxed border-t border-rose-baby/20 pt-3">
                <span className="text-rose-baby font-semibold">AQUI TAMBÉM TEM MUITO CHAT PRIVADO</span><br/>
                com fotos e vídeos exclusivos que mando pra você, como você pedir 👅🔞🍆
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-black font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-300"
          >
            Ver Pacotes Exclusivos 💖
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-rose-baby opacity-50">
        <div className="font-great-vibes text-3xl rotate-12">💋</div>
      </div>
      <div className="absolute bottom-20 right-10 text-gold-soft opacity-50">
        <div className="font-great-vibes text-2xl -rotate-12">✨</div>
      </div>
    </section>
  );
};

export default HeroSection;
