import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Selector from './components/Selector';
import 'bulma/css/bulma.min.css'
import './App.css';

function App() {
  const [categories] = useState([
    { name: 'About' },
    { name: 'Project'},
    { name: 'Contact'},
    { name: 'Resume'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Header>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Navigation>
      </Header>
      <main>
        <Selector
         currentCategory={currentCategory}  
        ></Selector>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;