"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const { width, height } = useWindowSize();

  // 📸 Lista de imágenes desde /public
  const images = [
    "bebe.jpg",
    "/imgEco1.jpg",
    "/imgEco2.jpg",
    "/imgEco3.jpg",
    "/imgEco4.jpg",
    "/imgEco5.jpg",
    "/imgEco6.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  // ⏱ Carrusel automático cada 6s
  useEffect(() => {
    if (revealed) {
      const interval = setInterval(() => {
        handleNext();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [revealed]);

  // 🔘 Funciones con animación
  const handleNext = () => {
    setFade(false); // empieza fade-out
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setFade(true); // activa fade-in
    }, 500);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 500);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-1000 ${
        revealed
          ? "bg-gradient-to-br from-pink-100 to-pink-300"
          : "bg-gradient-to-br from-gray-100 to-gray-300"
      }`}
    >
      {!revealed ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            🎀 Adivina qué soy 🎀
          </h1>

          {/* Silueta de bebé */}
          <div className="mx-auto mb-8 w-56 h-56">
            <img
              src="https://static6.depositphotos.com/1019436/600/v/450/depositphotos_6006213-stock-illustration-silhouettes-of-children.jpg"
              alt="Silueta de bebé"
              className="opacity-70 drop-shadow-lg"
            />
          </div>

          {/* Botón */}
          <button
            onClick={() => setRevealed(true)}
            className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Descúbreme
          </button>
        </div>
      ) : (
        <div className="text-center relative">
          <h2 className="text-5xl font-extrabold text-pink-600 mb-10 animate-bounce drop-shadow-lg">
            💕 Hola, soy una hermosa niña me llamo Christina Isabel Cervantes Hernandez💕
          </h2>

          {/* Carrusel con animación */}
          <div className="relative w-[500px] h-[500px] mx-auto overflow-hidden">
            <img
              src={images[currentImage]}
              alt="Carrusel bebé"
              className={`w-full h-full object-cover rounded-2xl shadow-xl transform transition-all duration-700 ${
                fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />

            {/* Botón anterior */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-pink-500 text-white px-3 py-2 rounded-full shadow-lg hover:bg-pink-600"
            >
              ⟨
            </button>

            {/* Botón siguiente */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-pink-500 text-white px-3 py-2 rounded-full shadow-lg hover:bg-pink-600"
            >
              ⟩
            </button>
          </div>

          {/* Música de fondo */}
          <audio autoPlay loop>
            <source src="/music-box-34179.mp3" type="audio/mpeg" />
          </audio>
          <audio autoPlay>
            <source src="/sound-effect-baby-laughing-01-237186.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )}

      {/* Confeti */}
      {revealed && <Confetti width={width} height={height} />}
    </div>
  );
}
