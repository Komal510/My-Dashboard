import React, {Component} from 'react';

export default function Home(props) {
    return (
        <div>
            <div className={props.classes.appBarSpacer}  />
            <div className={props.classes.homeCompo}> Home </div>
      </div>
    )
  }