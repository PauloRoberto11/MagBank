import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CenteredButton from './components/CenteredButton';
import CardList from './components/CardList';
import CreditCard from './components/CreditCard';
import AccountModal from './components/AccountModal';
import Institutional from './components/Institutional';
import Footer from './components/Footer';

import posts from './data/posts';



function App() {
  const  [showModal, setShowModal] =  useState(false);
  return (
    <div className="App">
      <Navigation handleCreateAccount={() => setShowModal(true)} />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>
        Quero ser MagBank
      </CenteredButton>
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
      <Institutional />
      <Footer />
    </div>
  );
}

export default App;
