import './LinechartContnet.css';
import React from 'react';
import Linechart from '../Linechart';

const LineChartContnet = ({title,xaxis,line,data,min,max}) => {
  return  <div className='chart weekTrend'>
  <div className='chart__Heading'>  
        <h3>{title}</h3>     
  </div>
    <Linechart data={data}  xaxis= {xaxis} line={line} min={min} max={max}/>
   </div>
};

export default LineChartContnet;
