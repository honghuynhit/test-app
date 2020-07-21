import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// Just a data fetching function
const fetchURL = "https://ga-django-backend.herokuapp.com/users/";
const getItems = () => fetch(fetchURL).then(res => res.json());

function List({ items, fallback }) {
  if (!items || items.length === 0) {
    return fallback;
  } else {
    return items.map(item => {
      return <div key={item.username}>{item.username}</div>;
    });
  }
}

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data => setItems(data.results));
  }, []);

  return (
    <div>
      <List items={items} fallback={"Loading..."} />
    </div>
  );
}

export default App;
