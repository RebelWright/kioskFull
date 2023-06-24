import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const StatsComponent = ({ trophyWinner, onClose }) => {
 
  return (
    <div className="card mb-3 statsComponent">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="card-body position-relative blueStats text-white">
            <button type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={onClose}></button>
            <h5 className="card-title">-STATS-</h5>
            <img src={trophyWinner.award?.data?.attributes?.jerseyIconLink} alt="football-icon" className="img-fluid jerseyStyle" />
            <h6>{trophyWinner.jerseyNum}</h6>
            <span>{trophyWinner.firstName} {trophyWinner.lastName}</span>
            <div style={{overflow: 'auto', maxHeight: '200px'}}>
            {trophyWinner.class && <p className="playerStatTitles quote"><span className="statStyle ">{trophyWinner.class}</span></p>}
              {/* <div className="my-2 statStyle">Class: {trophyWinner.class}</div> */}
              {/* <div className="my-2 statStyle">Ht/Wt: {trophyWinner.htwt}</div> */}
              {trophyWinner.htwt && <p className="playerStatTitles quote"><span className="statStyle ">{trophyWinner.htwt}</span></p>}
              {/* <div className="my-2 statStyle">Hometown: {trophyWinner.hometown}</div> */}
              {trophyWinner.hometown && <p className="playerStatTitles quote"><span className="statStyle ">{trophyWinner.hometown}</span></p>}
              {trophyWinner.prevSchool && <p className="playerStatTitles quote"><span className="statStyle ">{trophyWinner.prevSchool}</span></p>}
              {/* <div className="my-2 statStyle">Prev. School: {trophyWinner.prevSchool}</div> */}
              {/* <div className="my-2 statStyle">Position: {trophyWinner.position}</div> */}
              {trophyWinner.position && <p className="playerStatTitles quote"><span className="statStyle ">{trophyWinner.position}</span></p>}
              {/* <div className="my-2 statStyle">High School: {trophyWinner.highSchool}</div> */}
              {trophyWinner.highSchool && <p className="playerStatTitles quote"><span className="statStyle ">{trophyWinner.highSchool}</span></p>}
              {/* <div className="my-2 statStyle">Major: {trophyWinner.major}</div> */}
              {trophyWinner.major && <p className="playerStatTitles quote"><span className="statStyle ">{trophyWinner.major}</span></p>}
            </div>
          </div>
        </div>
        <div className="col-md-8 redStats text-white">
          <div className="card-body position-relative">
            <h5 className="card-title">Biographical Information</h5>
            <ReactMarkdown className="card-text" style={{overflow: 'auto', maxHeight: '200px'}}>
              {trophyWinner.stats}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;