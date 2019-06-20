import React, { Component } from "react";
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';


class DropdownPage extends Component {
  constructor() {
    super();
    this.items = [
      {
          text: 'Expand'
      },
      {
          text: 'Remove'
      },
    ]
  }
  render(){
  
    const buttonStyle = {
      float: 'right',
      position: 'relative',
    }
  return (
    <div style={buttonStyle}>
        <DropDownButtonComponent items={this.items} iconCss='e-icons e-menu' cssClass='e-caret-hide'></DropDownButtonComponent>
      </div>
  )
  }
}

export default DropdownPage;