
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "M.S.",
      city: "São Paulo",
      text: "Conteúdo incrível, muito exclusivo e de qualidade. Recomendo!",
      rating: 5
    },
    {
      initials: "R.L.",
      city: "Rio de Janeiro", 
      text: "A Isabella é maravilhosa, conteúdo sensual e provocante. Adorei!",
      rating: 5
    },
    {
      initials: "A.M.",
      city: "Belo Horizonte",
      text: "Experiência única, muito íntima e especial. Vale cada centavo.",
      rating: 5
    },
    {
      initials: "C.F.",
      city: "Brasília",
      text: "Conteúdo de alta qualidade, muito sensual. Superou expectativas!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gradient mb-4">
            O que eles dizem
          </h2>
          <p className="font-great-vibes text-xl text-rose-baby">
            Experiências reais de quem já teve momentos especiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-gradient rounded-xl p-6 border border-gray-800 hover:border-rose-gold/50 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-baby to-gold-soft rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="text-rose-baby font-semibold">
                    {testimonial.city}
                  </div>
                  <div className="flex text-gold-soft text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
