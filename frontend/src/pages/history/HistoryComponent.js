import React from 'react';
import ReactMarkdown from 'react-markdown';

const HistoryComponent = ({ award, onClose }) => {
  console.log(award.data.attributes);

  return (
    <div className="card mb-3 historyComponent text-white" style={{ maxHeight: '80vh', overflow: 'auto' }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={award.data.attributes.historyImageLink} alt="History" className="img-fluid historyImage" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <div className="card-body position-relative">
            <button type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={onClose}></button>

            <h5 className="card-title text-center historyComponentTitle">-HISTORY-</h5>
            <div style={{ overflowY: 'auto', maxHeight: '600px' }}>
              <ReactMarkdown className="card-text">
                {award.data.attributes.history}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HistoryComponent;
