import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Football' },
    { id: 2, name: 'Basketball' },
    { id: 3, name: 'Baseball' },
    { id: 4, name: 'Soccer' },
    { id: 5, name: 'Tennis' },
    { id: 6, name: 'Cricket' },
    { id: 7, name: 'Hockey' },
    { id: 8, name: 'Volleyball' },
    { id: 9, name: 'Rugby' },
    { id: 10, name: 'Golf' },
    { id: 11, name: 'Swimming' },
    { id: 12, name: 'Boxing' },
    { id: 13, name: 'Wrestling' },
    { id: 14, name: 'Table Tennis' },
    { id: 15, name: 'Badminton' },
    { id: 16, name: 'Cycling' },
    { id: 17, name: 'Gymnastics' },
    { id: 18, name: 'Skateboarding' },
    { id: 19, name: 'Surfing' },
    { id: 20, name: 'Archery' }
  ];

  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;