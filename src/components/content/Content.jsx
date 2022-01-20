import Barchart from '../visualization/Barchart';
import Linechart from '../visualization/Linechart';
import React, { useEffect, useState } from 'react';
import data from '../../importdata'
import './content.css';
import LineChartContnet from '../visualization/lChart/LineChartContnet';


const Content = () => {
  const [userData,setUserdata] = useState({});
    useEffect(()=>{ getUserData()});
    const getUserData=async ()=>{
        const user=await data
        setUserdata(user)
    }
    console.table(userData);
  return <div className='chartContent'>

      <div className='chart bar'>
          <div className='chart__Heading'>
              <h3>Team Barriers</h3>
          </div>
        <Barchart data={userData}  xaxis= {'Week Ended'} bar1={'Structure'} bar2={'Outcomes'} bar3={'Focus'} bar4={'Team'} bar5={'Connections'} bar6={'Direction'}/>
       </div> 

     <LineChartContnet data={userData} xaxis= {'Week Ended'} line={'Voltage'} title={'Week Trend '}  min={6} max={7} />
     <LineChartContnet data={userData} xaxis= {'Week Ended'} line={'GoalsAccomplished'} title={'% -Goal Accomplished'} min={70} max={90} />
     <LineChartContnet data={userData} xaxis= {'Week Ended'} line={'FocusGoalStatus'} title={'% - Focus Outcome Status'} min={70} max={90} />
     <LineChartContnet data={userData} xaxis= {'Week Ended'} line={'Voltage'} title={'#- Voltage Team '} min={6} max={7}/>
     <LineChartContnet data={userData} xaxis= {'Week Ended'} line={'WorkloadStress'} title={'#- Workload Stress '} min={4} max={3}/>
     <LineChartContnet data={userData} xaxis= {'Week Ended'} line={'ExpectationClarity'} title={'#- Work Clarity '} min={3} max={4} />
     <LineChartContnet data={userData} xaxis= {'Week Ended'} line={'WorkingTogether'} title={'#- Team Work '} min={3} max={4}/>

  </div>; 
};

export default Content;
