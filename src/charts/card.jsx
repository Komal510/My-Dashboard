import React, { Component } from 'react';
import DropdownPage from './dropdown';

class Card extends Component {
   
    render() { 
        const { i } = this.props;
        return (
            <div>
                <div style={{float:'left'}}>Card {i}</div>
                <DropdownPage/>
                { i !== 1 && <div style={{display: 'block',margin:'20px auto',width:'100px'}}> Card Content</div>}
            </div>
          );
    }
}
 
export default Card;