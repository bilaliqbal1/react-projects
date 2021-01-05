import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);
  const allCategories = ['all',...new Set (items.map((item) => item.category))];
  // console.log(allCategories)
  const filter = (category) =>{
    if (category === 'all') {
      setMenu(items);
      return;
    }
    const newItem = items.filter((item)=> item.category === category)
    setMenu(newItem)
  }
  return <main>
  <section className="menu section">
    <div className="title">
      <h2>Our menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categories={allCategories} filter={filter}/>
    <Menu items={menu}/>
  </section>
  </main>;
}

export default App;
