import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HistoryComponent from './HistoryComponent';
import YearComponent from './YearComponent';
import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';

const HistoryPage = () => {
  const [award, setAward] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:1337/api/awards/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setAward(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id])

  const [componentToShow, setComponentToShow] = useState('');

  const onClose = () => setComponentToShow('');

  const ComponentToShow = componentToShow === 'history'
    ? () => <HistoryComponent award={award} onClose={onClose} />
    : componentToShow === 'year'
      ? () => <YearComponent award={award} onClose={onClose} />
      : null;

  const handleNavigation = () => {
    if (componentToShow) {
      setComponentToShow('');  // If a component is open, close it
    } else {
      navigate('/awards');  // If no component is open, navigate to '/awards'
    }
  }

  const getDisplayText = () => {
    if (componentToShow === 'history') return 'history';
    if (componentToShow === 'year') return 'finalists/winners';
    return '';
  };

  return (
    <div className="container-fluid bg-dark full-bg" style={{ backgroundImage: `url(${award?.data.attributes.trophyImageLink})`, backgroundSize: 'cover' }}>
      <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
      <div className="row justify-content-between">
        {award && award.data ?
          <>
            <div className="text-white">
              <div className="card-body historyBanner" >
                <p className="text-uppercase bannerFirstName">{award.data.attributes.firstName}</p>
                <h1 className="card-title text-uppercase bannerFullName">{award.data.attributes.name}</h1>
              </div>
              <div className="text-center">
                <img src={award.data.attributes.iconLink} alt="trophyIcon" className="my-4 historyIcon" />
                <h1 className="card-title text-uppercase historySport">{award.data.attributes.sport}</h1>
                <p className='text-uppercase historySubSport'>{getDisplayText()}</p>
              </div>
              <div className="buttonContainer">
                <button
                  className={`btn mb-2 btnStyleHistory ${componentToShow === 'history' ? 'btn-active' : 'btn-inactive'}`}
                  onClick={() => setComponentToShow('history')}>
                  History
                </button>
                <button
                  className={`btn mb-2 btnStyleHistory ${componentToShow === 'year' ? 'btn-active' : 'btn-inactive'}`}
                  onClick={() => setComponentToShow('year')}>
                  Year
                </button>
                <button className="btn btn-danger mb-2 btnStyleHistory" onClick={handleNavigation}>
                  {componentToShow ? 'Back' : 'Menu'}
                </button>
              </div>
            </div>


            <div >
              {ComponentToShow && <ComponentToShow />}
            </div>
          </>
          :
          <p>Loading...</p>
        }
      </div>
    </div>
  );
};

export default HistoryPage;
