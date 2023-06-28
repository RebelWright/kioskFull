import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatsComponent from './StatsComponent';
import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';

const WinnerProfilePage = () => {
  const [winner, setWinner] = useState({});
  const navigate = useNavigate();
  const { athleteId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:1337/api/athletes/${athleteId}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setWinner(data.data.attributes);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [athleteId]);

  const [showStats, setShowStats] = useState(false);
  console.log(winner)

  return (
    <div className="container-fluid bg-dark yearWinnerImage" style={{ backgroundImage: `url(${winner?.imageLink})`, backgroundSize: 'cover' }}>
      <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="card text-white yearWinnerBanner">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h1 className="yearBannerText athleticFont">{winner.award?.data?.attributes?.name}</h1>
                <div>
                  <p className="card-text d-inline yearBannerYear">WINNER {winner.years?.data[0]?.attributes?.awardYear}</p>
                  <img className='text-uppercase bannerIcon d-inline' src={winner.award?.data?.attributes?.iconLink} alt="icon"/>
                </div>
              </div>
              <img src={winner.award?.data?.attributes?.sponsorLogoLink} alt="sponsor-logo" className="my-4 img-fluid sponsorLogo" style={{maxWidth: 'fit-content'}} />
            </div>
          </div>
        </div>
      </div>
  
      
      <div className="col-md-4 text-white text-uppercase align-items-left profileInfo">
          <img src={winner.school?.data?.attributes?.logoLink} alt="school-logo" className="my-4 img-fluid profileSchoolLogo" />
          <p className="profileText athleticFont">{winner.firstName} {winner.lastName}</p>
          <p className="profileSubText">{winner.positionFullName}</p>
      </div>
        <div className="col-md-4 text-white text-uppercase profileContainer athleticFont">
          <button className="btn mb-2 btnStyle winnerButton1" onClick={() => setShowStats(true)}>Stats</button>
          <button className="btn mb-2 btnStyle profileButton" onClick={() => navigate(`/highlights/${athleteId}`)}>Highlights</button>
          <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => navigate('/awards')}>Menu</button>
        </div>
  
      {showStats && <StatsComponent trophyWinner={winner} onClose={() => setShowStats(false)} />}
    </div>
  );
  
};

export default WinnerProfilePage;
