import './App.css'
import { useState } from 'react';
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('food');
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { text: inputValue, category }]);
      setInputValue('');
    }
  };

  const handleFilterChange = (filterCategory) => {
    setFilter(filterCategory);
  };

  const filteredItems = items.filter(item => 
    filter === 'all' || item.category === filter
  );
  return (
    <div className='container'>
      <h1>Shopping List</h1>
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter Your Item" 
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="food">food</option>
          <option value="others">others</option>
        </select>
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('food')}>Food</button>
        <button onClick={() => handleFilterChange('others')}>Others</button>
      </div>
      <div className='list'>
        <h3>Items : {}</h3>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>- {item.text}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default App;