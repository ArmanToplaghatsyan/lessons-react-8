import React from 'react';
import './style.scss';

export const MyError: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="MyError border border-3">
      <h2>My Error </h2>
    </div>
  );
});
