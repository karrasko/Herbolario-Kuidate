import React, { useState, useEffect } from 'react';
import { Calendar, Video, Heart, CheckCircle, Star, ArrowRight, X, Mail, Send } from 'lucide-react';

export default function IctusLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // URL de tu canal de Telegram - CÁMBIALA POR LA TUYA
  const TELEGRAM_URL = 'https://t.me/Kuidate_ICTUS_HEMIPLEJIAS';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const handleCTAClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSuccess(false);
    setFormData({ name: '', email: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío (aquí conectarías con tu servicio de email)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Aquí integrarías con tu servicio de email marketing
    console.log('Lead capturado:', formData);
    
    // Guardar en localStorage (opcional)
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('leads', JSON.stringify(leads));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Redirigir a Telegram después de 2 segundos
    setTimeout(() => {
      window.open(TELEGRAM_URL, '_blank');
      handleCloseModal();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-5"></div>
        
        <nav className="relative max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-700">Kuida-Té</div>
          <button 
            onClick={handleCTAClick}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Reservar Plaza
          </button>
        </nav>

        <div className={`relative max-w-6xl mx-auto px-6 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
              <Video size={16} />
              MASTERCLASS ONLINE · EN DIRECTO (ZOOM) · SÁBADO
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              La vida imprescindible con el <span className="text-indigo-600">ictus</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tu ictus, tu motor
            </p>

            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 max-w-3xl mx-auto border border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Aprenderás qué pasos dar para recuperar tu vida
              </h2>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>De forma sencilla y segura desde casa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Con la tranquilidad de saber que lo estás haciendo bien</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Prevención para que no se vuelva a repetir</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Acceder al Grupo de Telegram
                <ArrowRight size={20} />
              </button>
            </div>

            <p className="text-red-600 font-semibold text-lg animate-pulse">
              ⚠️ Plazas limitadas, ¡no te quedes sin la tuya!
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <img 
                  src="/pilar-carrasco.png" 
                  alt="Pilar Carrasco - Experta en neuro-rehabilitación"
                  className="w-full h-80 object-cover rounded-2xl shadow-inner"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hola, soy <span className="text-indigo-600">Pilar Carrasco</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong>Experta en neuro-rehabilitación</strong>, llevo toda una vida dedicada a acompañar a personas en su proceso de recuperación.
                </p>
                
                <p>
                  Desde que terminé mi carrera en 1995, he trabajado en hospitales y centros especializados, ayudando a pacientes hemipléjicos a reconectar con su cuerpo y recuperar funciones que daban por perdidas.
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl my-6">
                  <p className="font-bold text-xl text-indigo-900">
                    Más de 25 años de experiencia me han enseñado algo muy importante:
                  </p>
                  <p className="text-2xl font-bold text-indigo-700 mt-2">
                    LA REHABILITACIÓN NO TERMINA, SEGUIMOS
                  </p>
                </div>

                <p>
                  Por eso he creado este taller, fruto de mi trabajo con <strong>cientos de personas como tú</strong>, que desean seguir avanzando, no rendirse y recuperar la máxima autonomía posible.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
                <span className="ml-2 text-gray-600 font-semibold">+25 años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            ¿Qué conseguirás en esta Masterclass?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Heart className="mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Pautas Prácticas</h3>
              <p className="text-white/90">
                Ejercicios fáciles y adaptados para realizar desde tu casa, sin complicaciones
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Resultados Reales</h3>
              <p className="text-white/90">
                Técnicas probadas con cientos de pacientes durante más de 25 años
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Calendar className="mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Seguimiento Continuo</h3>
              <p className="text-white/90">
                Porque la rehabilitación no termina, seguimos avanzando juntos
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-3xl font-bold mb-8">
              Vamos a TRANSFORMARNOS para conseguir lo que hemos perdido
            </p>
            <button 
              onClick={handleCTAClick}
              className="bg-white text-indigo-700 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              ¡Quiero Unirme al Grupo de Telegram!
            </button>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¡Te espero dentro para dar juntos el siguiente paso!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No estás solo en este camino. Únete a nuestra comunidad de Telegram y recibe acceso directo a la masterclass.
          </p>
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Unirme al Grupo de Telegram
          </button>
          <p className="mt-4 text-red-600 font-semibold animate-pulse">
            ⏰ Plazas limitadas - ¡Actúa ahora!
          </p>
        </div>
      </div>

      {/* Modal de Captura de Email */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative transform transition-all animate-slideUp">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {!showSuccess ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Último Paso!
                  </h3>
                  <p className="text-gray-600">
                    Déjanos tu email para enviarte el enlace de acceso a nuestro grupo de Telegram
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <Mail size={20} />
                        Acceder al Grupo
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 Tus datos están seguros. No compartimos información con terceros.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Perfecto!
                </h3>
                <p className="text-gray-600 mb-4">
                  Redirigiendo a Telegram...
                </p>
                <div className="flex justify-center">
                  <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Kuida-Té · Pilar Carrasco · Experta en Neuro-rehabilitación
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
