
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';

const AwardsPage = () => {
  const [awards, setAwards] = useState('');

  useEffect(() => {
    fetch(`http://localhost:1337/api/awards?populate=*`)
      .then((res) => res.json())
      .then((awards) => {
        setAwards(awards)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])
  console.log(awards);

  return (
    <div className="container-fluid">
      <div className="container-fluid position-relative awardContainer">
      <div className= "bg-dark awardBackground">
      <MSHFWhiteLogo className="img-fluid whiteLogoAwards" />
      <div className="awards">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
          {awards.data && awards.data.length > 0 && awards.data.map((award) => (
            <div key={award.id} className="col">
            <Link to={`/awards/${award.id}`} className="text-decoration-none">
              <div className="award-banner bg-dark img-fluid background" style={{backgroundImage: `url(${award?.attributes.selectImageLink})`}}>
                <div className="award-content">
                  <div>
                    <img src={award.attributes.iconLink} className="awardIcon" alt="award-icon" />
                  </div>
                  <div className="trophyNameContainer">
                    <div className="trophyName text-end text-uppercase text-white">
                      <p className="firstNameText">{award.attributes.firstName}</p><p className="awardNameFull">{award.attributes.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>    
  );
};

export default AwardsPage;