import React from 'react';

const Loader = ({ loading, isEmpty, children }) => {
  return loading ? (
    <div>Lorem</div>
  ) : isEmpty ? (
    <div>Nothing to show</div>
  ) : (
    children
  );
};

export default Loader;
