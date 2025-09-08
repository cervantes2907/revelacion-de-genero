"use client";
import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-1000 ${
        revealed ? "bg-gradient-to-br from-pink-100 to-pink-300" : "bg-gradient-to-br from-gray-100 to-gray-300"
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
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-pink-600 mb-10 animate-bounce drop-shadow-lg">
            💕 Hola, soy una hermosa niña me llamo Christina Isabel 💕
          </h2>

          {/* Imagen de bebé feliz */}
          <div className="mx-auto w-100 h-100">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/036/211/619/small_2x/ai-generated-cute-baby-girl-smiling-cheerful-small-portrait-of-happiness-generated-by-ai-free-photo.jpg"
              alt="Bebé niña"
              className="drop-shadow-xl"
              
            />
          </div>
        </div>
      )}

      {/* Confeti */}
      {revealed && <Confetti width={width} height={height} />}
    </div>
  );
}
