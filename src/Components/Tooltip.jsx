import React, { useState, useEffect } from 'react';

const Tooltip = (props) => {
  /* définition de states pour déclencher ou non l'apparition du tooltip si 
  l'élément est hovered ou focused */
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { children } = props;

  return (
    <div id="tooltip">
      {children}
    </div>
  )
}

export default Tooltip;
