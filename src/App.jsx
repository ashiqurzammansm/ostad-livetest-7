import React, { useState } from 'react';

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle</button>
      {isVisible && <p>Paragraph is visible!</p>}
    </div>
  );
};

export default ToggleComponent;
