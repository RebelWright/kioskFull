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
    <>
      <div className=' historyBackground'>
      <img src={award?.data.attributes.trophyImageLink} alt="" className="container-fluid  historyTrophyImage " />
        <div className="container-fluid historyStuff" >
          <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
          <div className="row ">
            {award && award.data ?
              <>

                <div className="card-body text-white historyBanner" >
                  <p className="text-uppercase bannerFirstName">{award.data.attributes.firstName}</p>
                  <h1 className="card-title text-uppercase bannerFullName athleticFont">{award.data.attributes.name}</h1>
                </div>
                <div className={`iconContainer ${componentToShow ? 'stretchedIconContainer' : ''}`} >
                <p className="flex-start text-white text-uppercase historySport athleticFont">
  {award.data.attributes.sport.replace(/\s*\((M|W)\)/g, '')}
</p>

                  <p className='flex-start text-white text-uppercase historySubSport'>{getDisplayText()}</p>
                  <img src={award.data.attributes.iconLink} alt="trophyIcon" className="historyIcon img-fluid" />
                </div>

                <div className={`athleticFont buttonContainer ${componentToShow ? 'stretchedContainer' : ''}`}>
                  <button
                    className={`btn btnStyle mb-2 btnStyleHistory ${componentToShow ? 'stretched' : ''}`}
                    onClick={() => setComponentToShow('history')}>
                    History
                  </button>
                  <button
                    className={`btn mb-2 btnStyle btnStyleHistory ${componentToShow ? 'stretched' : ''}`}
                    onClick={() => setComponentToShow('year')}>
                    Year
                  </button>
                  <button
                    className={`btn btnStyle mb-2 btnStyleHistory1 ${componentToShow ? 'stretched' : ''}`}
                    onClick={handleNavigation}>
                    {componentToShow ? 'Back' : 'Menu'}
                  </button>
                </div>




                <div>
                  {ComponentToShow && <ComponentToShow />}
                </div>


              </>
              :
              <p>Loading...</p>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
