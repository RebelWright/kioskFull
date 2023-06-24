import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const YearComponent = ({ award, onClose }) => {
  const navigate = useNavigate();
  console.log(award)

  return (
    <div className="card yearComponent mb-3 text-white">
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body position-relative">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0"
              aria-label="Close"
              onClick={onClose}
            >
            </button>
            <h5 className="yearCardTitle text-center">-YEAR-</h5>
            <div className="row" style={{ overflow: 'auto', maxHeight: '800px' }}>
              {award.data.attributes.years &&
                award.data.attributes.years.data.length > 0 &&
                [...award.data.attributes.years.data].sort((a, b) => parseInt(a.attributes.awardYear.slice(1), 10) - parseInt(b.attributes.awardYear.slice(1), 10)).map((year, index) => (
                  <div className="col-md-4" key={year.id}>
                    <Link to={`/awards/${award.data.id}/years/${year.id}`} className="btn btn-light d-flex justify-content-center align-items-center rounded-circle my-2 yearLinks" style={{width: '50px', height: '50px'}}>
                      {year.attributes.awardYear}
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

export default YearComponent;
