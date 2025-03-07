"use client";

import Footer from "./Footer/page";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-md flex justify-center">
      <h1 className="text-3xl font-bold text-white">Blockchain Auto</h1>
    </header>
  );
};

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-20 px-6">
        {/* Title and Description */}
        <motion.h1 
          className="text-5xl font-extrabold text-gray-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur Blockchain Auto
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg text-gray-700 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Découvrez la puissance de la blockchain pour des transactions rapides et sécurisées.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() => window.location.href = "/blockchain"}
          className="mt-6 mb-10 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          🚀 Explorer la Blockchain
        </motion.button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
