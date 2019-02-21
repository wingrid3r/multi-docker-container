import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Ah, you are here now!
      <Link to="/">Go Home</Link>
    </div>
  );
};
