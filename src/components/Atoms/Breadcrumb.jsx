// Breadcrumb.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Breadcrumb.css'; // Add styles for the breadcrumb if needed

const Breadcrumb = ({ selections }) => {
  return (
    <div className="breadcrumb">
      {Object.entries(selections).map(([key, value]) => (
        value && (
          <span key={key} className="breadcrumb-item">
            {`${key}: ${value}`}
            <span className="breadcrumb-separator"> / </span>
          </span>
        )
      ))}
    </div>
  );
};

Breadcrumb.propTypes = {
  selections: PropTypes.object.isRequired,
};

export default Breadcrumb;