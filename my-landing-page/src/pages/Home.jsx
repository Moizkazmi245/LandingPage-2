import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeatureCard from '../components/FeatureCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCard />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}
