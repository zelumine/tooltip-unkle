import React, { useState, useEffect, useRef } from 'react';

const Tooltip = (props) => {
  /* définition de states pour déclencher ou non l'apparition du tooltip si 
  l'élément est hovered ou focused */
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  let tooltipPosition, arrowPosition, parentElement, parentPosition, positionStyle;

  const positionRef = useRef();

  const { children, text, position } = props;

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

  const getElementPosition = (event) => {
    positionRef.current = event.target;
    parentElement = positionRef.current;
    parentPosition = parentElement.getBoundingClientRect();
    if (position === "bottom") positionStyle = `bottom: calc(${parentPosition.bottom}px + 10px);`;
    else if (position === "right" || !position) positionStyle = `
      float: right;
      right: calc(${parentPosition.right}px + 10px);
    `;
    else if (position === "left") positionStyle = `
      float: left;
      left: calc(${parentPosition.left}px + 10px);
    `;
    else if (position === "top") positionStyle = "top: -10px;";
    console.log(positionStyle);
  }
  
  return (
    <div className="tooltip">    
      <div
        onMouseOver={(event) => {
          getElementPosition(event);
          setIsHovered(true);
        }}
        onMouseOut={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}          // remplace le "on focus out"
      > 
        {showTooltip &&
          <div className="tooltip-container" style={positionStyle} className={`${tooltipPosition} arrow-${arrowPosition}`}>{text}</div>
        }
        {children}
      </div>
    </div>
  )
}

export default Tooltip;
