import React from 'react';
import './FeatureCard.css';

const features = [
  { title: 'Web Dev Projects', description: 'Work on real-world applications.' },
  { title: 'Remote Work', description: 'No need to travel — 100% online.' },
  { title: 'Flexible Hours', description: 'Choose your own working schedule.' }
];

export default function FeatureCard() {
  return (
    <section className="features" id="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-grid">
        {features.map((f, i) => (
          <div className="card" key={i}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
