import React, { useState, useEffect } from 'react';

const FinalistsComponent = ({ awardId, yearId, onClose }) => {
  const [finalists, setFinalists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/api/years/${yearId}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        const specificAward = data.data.attributes.awards.data.find(
          award => award.id === parseInt(awardId)
        );
        const athletesForAward = data.data.attributes.athletes.data.filter(
          athlete => athlete.attributes.finalist === true && athlete.attributes.sport === specificAward.attributes.sport
        );
        setFinalists(athletesForAward);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [awardId, yearId]);
  console.log(finalists)

  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-4">
          <div className="card text-white finalistsComponent">
            <div>
              <p className="finalistsTitle text-center athleticFont">-FINALIST-</p>
              <button className="btn btn-light position-absolute top-0 end-0 componentButton" onClick={onClose}>X</button>
            </div>
            <div className="card-body" style={{overflow: 'auto', maxHeight: '600px'}}>
              {finalists.map((finalist, index) => (
                <div key={index}>
                  <p className='finalistsName d-inline'>{finalist.attributes.firstName} {finalist.attributes.lastName}, </p>
                  <p className=' d-inline finalistsInfo'>{finalist.attributes.position}, {finalist.attributes.schoolName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalistsComponent;
