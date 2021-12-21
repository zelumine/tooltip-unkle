import React, { useState, useEffect } from 'react';

const Tooltip = (props) => {
  /* définition de states pour déclencher ou non l'apparition du tooltip si 
  l'élément est hovered ou focused */
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const { children } = props;

  useEffect(() => {
    console.log("is hovered?", isHovered);
    console.log("is hovered?", isHovered);
    if (isHovered || isFocused) setShowTooltip(true);
    else setShowTooltip(false);
  }, [isHovered, isFocused]);

  return (
    <div id="tooltip">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
      > 
        {showTooltip &&
          <div>Coucou c'est le tooltip</div>
        }
        {children}
      </div>
    </div>
  )
}

export default Tooltip;
