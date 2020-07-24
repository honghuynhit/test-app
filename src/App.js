import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// Just a data fetching function
const fetchURL = "https://ga-django-backend.herokuapp.com/api/posts/";
const getItems = () => fetch(fetchURL).then(res => res.json());

function List({ items, fallback }) {
  if (!items || items.length === 0) {
    return fallback;
  } else {
    return items.map(item => {
      return (
        <article key={item.id}>
          <header className="header">
            <h3>
              <a rel="bookmark" href="/the-wet-codebase/">{item.title}</a>
            </h3>
            <small>{item.pub_date}   •☕️• 1 min read </small>
          </header>
          <p>{item.text} </p>
        </article>
      )
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
        <div className="content-center">
          <h2>Gà Django</h2>
          <main>
            <List items={items} fallback={"Loading..."} />
          </main>
        </div>
      </div>
  );
}

export default App;
