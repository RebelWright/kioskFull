
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
      {/* <div className="position-absolute bg-dark awardContainer"> */}
      <div className="bg-dark awardBackground">
        <MSHFWhiteLogo className="img-fluid whiteLogoAwards" />
        <div className="awards container-fluid">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
            {awards.data && awards.data.length > 0 && awards.data.map((award) => (
              <div key={award.id} className="col">
                <Link to={`/awards/${award.id}`} className="text-decoration-none">
                  <div className="award-banner bg-dark img-fluid background" style={{ backgroundImage: `url(${award?.attributes.selectImageLink})` }}>
                    <div className="award-content">

                      <img src={award.attributes.iconLink} className="awardIcon" alt="award-icon" />

                      <div className="display-flex trophyNameContainer">
                        <div className="trophyName text-uppercase text-white">
                          <p className="firstNameText">{award.attributes.firstName}</p><span className="awardNameFull athleticFont">{award.attributes.name}</span>
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
      {/* </div> */}
    </div>
  );
};

export default AwardsPage;