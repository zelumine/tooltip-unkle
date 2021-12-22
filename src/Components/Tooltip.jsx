import React, { useState, useEffect } from 'react';

const Tooltip = (props) => {
  /* définition de states pour déclencher ou non l'apparition du tooltip si 
  l'élément est hovered ou focused */
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  let tooltipPosition, arrowPosition;

  const { children, text, position } = props;

  useEffect(() => {
    //console.log("is hovered?", isHovered);
    //console.log("is hovered?", isHovered);
    if (isHovered || isFocused) setShowTooltip(true);
    else setShowTooltip(false);
  }, [isHovered, isFocused]);

  switch (position) {
    case 'top': 
      tooltipPosition = "top";
      arrowPosition = "bottom";
      break;
    case 'right':
      tooltipPosition = "right";
      arrowPosition = "left";
      break;
    case 'bottom':
      tooltipPosition = "bottom";
      arrowPosition = "top";
      break;
    case 'left':
      tooltipPosition = "left";
      arrowPosition = "right";
      break;
    default:
      tooltipPosition = "top";
      arrowPosition = "bottom";
  }

  return (
    <div id="tooltip">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}    // remplace le "on focus out"
      > 
        {showTooltip &&
          <div id="tooltip-container" className={`${tooltipPosition} arrow-${arrowPosition}`}>{text}</div>
        }
        {children}
      </div>
    </div>
  )
}

export default Tooltip;
