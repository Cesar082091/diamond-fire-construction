import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './i18n/config'; // i18n setup

function App() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-950 dark:text-white min-h-screen">
      <Header />
      <main className="pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
