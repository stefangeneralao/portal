import React from 'react';
import LinkCard from '../LinkCard/LinkCard';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>stefangeneralao.com</h1>
      </header>
      <div className="link-cards">
        <LinkCard
          href="http://stefangeneralao.com/exterior-interior"
          imgSrc="exterior-interior.jpg"
        >
          Exterior Interior Classifier
        </LinkCard>
        <LinkCard
          href="http://stefangeneralao.com/skrt-ai"
          imgSrc="skrt-ai.jpg"
        >
          Skrt AI
        </LinkCard>
        <LinkCard
          href="http://stefangeneralao.com/skrt-human"
          imgSrc="skrt-human.jpg"
        >
          Skrt Human
        </LinkCard>
        <LinkCard
          href="http://stefangeneralao.com/genetic-path-finder"
          imgSrc="genetic-path-finder.jpg"
        >
          Genetic Path Finder
        </LinkCard>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
