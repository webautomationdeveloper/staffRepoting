import React from 'react';
import './sidebar.css';
import {LineStyle,Timeline,TrendingUp,Store,PermIdentity,AttachMoney,BarChart,Email,DynamicFeed,ChatBubbleOutline,Error,Work} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sideBar'>
        <div className='sidebarWrapper'>

           <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Dashboard</h3>
               <ul className='sidebarList'>
                   <li className='sidebarListItem active'>
                       <LineStyle className='sidebarIcon' />
                       Home
                   </li>
                   <li className='sidebarListItem'>
                       <Timeline className='sidebarIcon'/>
                       Analytics
                   </li>
                   <li className='sidebarListItem'>
                       <TrendingUp className='sidebarIcon' />
                       Sales
                   </li>
               </ul>
            </div>
            
           </div>
        </div>
    )
}

export default Sidebar
