import React from 'react';


export default function Rectangle(props) {
    const divStyle={
        padding:'0 0 10px',
        display: 'flex',
        margin: '0 -5px',
    }
  return (
   <div style={divStyle}>
       <div className={props.classes.greenRect}> 
            <h4 className={props.classes.spanPad}>First Color Picker</h4> 
       </div>
       <div className={props.classes.redRect}> 
            <h4 className={props.classes.spanPad}>Second Color Picker</h4> 
       </div>
   </div>
  );
}
