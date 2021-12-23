import React, { useState, useEffect } from 'react';

const Tooltip = (props) => {
  /* définition de states pour déclencher ou non l'apparition du tooltip si 
  l'élément est hovered ou focused */
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  let tooltipPosition, arrowPosition;

  const { children, text, position } = props;
  console.log(props);

  useEffect(() => {
    if (isHovered || isFocused) setShowTooltip(true);
    else setShowTooltip(false);
  }, [isHovered, isFocused]);

    switch (position) {
      case 'top': 
        tooltipPosition = "top";
        arrowPosition = "down";
        break;
      case 'right':
        tooltipPosition = "right";
        arrowPosition = "to-left";
        break;
      case 'bottom':
        tooltipPosition = "bottom";
        arrowPosition = "up";
        break;
      case 'left':
        tooltipPosition = "left";
        arrowPosition = "to-right";
        break;
      default:
        tooltipPosition = "right";
        arrowPosition = "to-left";
    }
  
  return (
    <div id="tooltip">                              {/* problème à régler : si on utilise plusieurs fois le tooltip on aura plusieurs fois le même ID */}
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}          // remplace le "on focus out"
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
