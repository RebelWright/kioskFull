import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Highlights = () => {
  const { athleteId } = useParams();
  const [athlete, setAthlete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:1337/api/athletes/${athleteId}`)
      .then((res) => res.json())
      .then((data) => {
        setAthlete(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [athleteId]);

  return (
    <div className="card-deck bg-dark text-white">
      <h1>Highlights Page</h1>
      <button className="btn btn-danger btnStyle w-100 mb-2" onClick={() => navigate('/awards')}>Menu</button>
      {athlete?.images?.map((image, index) => (
        <div key={index} className="card">
          <img src={image.url} className="card-img-top" alt="Athlete" />
        </div>
      ))}
    </div>
  );
};

export default Highlights;
