import React from 'react';
import './LinkCard.scss';

function LinkCard({ href, imgSrc, children }) {
  return (
    <div className="link-card">
      <a href={ href }>
        { children }
      </a>
    </div>
  );
}

export default LinkCard;