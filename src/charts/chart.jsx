import React , { Component } from 'react';
import { AreaChart, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip, Area } from 'recharts';
import Rectangle from './renctagle';
import Card from './card';


const data = [
{name: 4,  first: 3000,   second: 3500},
{name: 6,  first: 3300 ,  second: 3600},
{name: 8,  first: 3700,   second: 3700},
{name: 10, first: 4000,  second: 3500},
{name: 12, first: 3400,  second: 3300},
{name: 14, first: 2800,  second: 3000},
{name: 16, first: 2200,  second: 2800},

];

const data1 =[
    {
      name: 'First',
      series: [
        { name: 5, value: 2650 },
        { name: 10, value: 2800 },
        { name: 15, value: 2000 }
      ]
    },
    {
      name: 'Second',
      series: [
        { name: 5, value: 2300 },
        { name: 10, value: 3100 },
        { name: 15, value: 1700 }
      ]
    }
];



class Chart extends Component {
  render(){
  return (
    <React.Fragment>
      <Card i={1}/>
      <Rectangle classes={this.props.classes}/> 
      <ResponsiveContainer>
      <AreaChart width={600} height={450} data={data}
            margin={{top: 10, right: 20, left: 10, bottom: 20}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey= '' > 
          <Label  position="bottom" style={{ textAnchor: 'middle', paddingTop:'10px' }} >Number</Label>
        </XAxis>
        <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle'}}>
             Color Value
            </Label>
        </YAxis>
        <Tooltip/>
        <Area dataKey= "second"  fill="#1F5533" />
        <Area dataKey= "first"  fill="#FF1145" />  
      </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
}
export default Chart;
