import React from 'react';
import ReactMarkdown from 'react-markdown';

const HistoryComponent = ({ award, onClose }) => {
  console.log(award.data.attributes);

  return (
    <>
    <div className="card mb-3 historyComponent text-white" style={{ maxHeight: '800px' }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={award.data.attributes.historyImageLink} alt="History" className="img-fluid historyImage" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <div className="card-body position-relative">
            <button className="btn btn-light position-absolute top-0 end-0 componentButton" onClick={onClose}>X</button>

            <h5 className="card-title text-center historyComponentTitle athleticFont">-HISTORY-</h5>
            <div className="historyScroll" style={{ overflowY: 'auto', maxHeight: '600px' }}>
            <ReactMarkdown className="card-text awardHistoryText text-lowercase" style={{ textTransform: 'none', fontFamily: 'sans-serif' }}>
  {award.data.attributes.history}
</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default HistoryComponent;
