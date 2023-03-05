import React from 'react';

const Panel = ({ id, title, isActive, onClick, children }) => {
  const handleClick = () => {
    onClick(id);
  };
  console.log({children});
  return (
    <div
      style={{ border: isActive ? '2px solid blue' : '1px solid gray', padding: '1rem' }}
      onClick={handleClick}
    >
      <h2>{title}</h2>
      {isActive && children}
      <div>
            child 數量：{ React.Children.count(children) }
      </div>
    </div>
  );
};

export default Panel;
