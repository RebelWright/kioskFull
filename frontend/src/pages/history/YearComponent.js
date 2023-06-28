import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const YearComponent = ({ award, onClose }) => {
  const navigate = useNavigate();

  // Define the function here
  function formatYear(yearStr) {
    const match = yearStr.match(/(\d{2})$/);
    return match ? `'${match[0]}` : 'Invalid year';
  }

  return (
    <div className="card yearComponent mb-3 text-white">
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body position-relative">
            <button className="btn btn-light position-absolute top-0 end-0 componentButton" onClick={onClose}>X</button>
            <h5 className="yearCardTitle text-center athleticFont">-YEAR-</h5>
            <div className="row" style={{ overflow: 'auto', maxHeight: '400px' }}>
              {award.data.attributes.years &&
                award.data.attributes.years.data.length > 0 &&
                [...award.data.attributes.years.data]
                  .sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10))
                  .map((year, index) => (
                    <div className="col-md-4" key={year.id}>
                      <Link to={`/awards/${award.data.id}/years/${year.id}`} className=" d-flex justify-content-center align-items-center my-2 yearLinks athleticFont">
                        {formatYear(year.attributes.awardYear)}
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
