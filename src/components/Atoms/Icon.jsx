// Icon.jsx
// Used for Icons that are file in a directory
// Don't use for Icons that in an array in data directory

import React from 'react';

const Icon = ({ src, alt, style }) => {
    return (
        <img src={src} alt={alt} style={style} />
    );
};

export default Icon;