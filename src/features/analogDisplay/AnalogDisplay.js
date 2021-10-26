import React from 'react';

import ReactTooltip from "react-tooltip";

export function AnalogDisplay({ time }) {
  let date = new Date(time);

  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black',
  };

  let secondHandStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',  
    border: '1px solid red',
    width: '40%',
    height: 2,
    transform:
      'rotate(' + ((date.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red',
  };

  let minuteHandStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform:
      'rotate(' + ((date.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey',
  };

  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 6,
    transform:
      'rotate(' + ((date.getHours() / 12) * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey',
  };

  return (
    <div>
      <div data-tip data-for="registerTip" style={dialStyle}>
        <div style={secondHandStyle} />
        <div style={minuteHandStyle} />
        <div style={hourHandStyle} />
      </div>
      <ReactTooltip id="registerTip">
        {time}
      </ReactTooltip>
    </div>
  );
}
