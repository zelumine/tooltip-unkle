import React, { useState, useEffect } from 'react';

const Tooltip = (props) => {
  /* définition de states pour déclencher ou non l'apparition du tooltip si 
  l'élément est hovered ou focused */
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  let tooltipPosition, arrowPosition, parentPosition, positionStyle;

  const { children, text, position } = props;

  useEffect(() => {
    parentPosition = document.getElementById("tooltip").getBoundingClientRect();
    console.log("parent's position:", parentPosition); 
    if (isHovered || isFocused) setShowTooltip(true);
    else setShowTooltip(false);
  }, [isHovered, isFocused]);
  
  useEffect(() => {
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
        positionStyle = `
          bottom: ${parentPosition.bottom + 10} px
        `
        break;
      case 'left':
        tooltipPosition = "left";
        arrowPosition = "right";
        break;
      default:
        tooltipPosition = "top";
        arrowPosition = "bottom";
    }
  }, []);
  
  return (
    <div id="tooltip">                              {/* problème à régler : si on utilise plusieurs fois le tooltip on aura plusieurs fois le même ID */}
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}          // remplace le "on focus out"
      > 
        {showTooltip &&
          <div id="tooltip-container" style={positionStyle} className={`${tooltipPosition} arrow-${arrowPosition}`}>{text}</div>
        }
        {children}
      </div>
    </div>
  )
}

export default Tooltip;
