// Portfolio.jsx
import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Ermin-1/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <aside>
      <h2>Portfolio</h2>
      {loading ? (
        <p>Hämtar projekt...</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Portfolio;
