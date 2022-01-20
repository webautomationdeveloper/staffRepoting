import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = ({data,xaxis,bar1,bar2,bar3,bar4,bar5,bar6}) => {
  return <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xaxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={bar1} fill='#0500FF' />
          <Bar dataKey={bar2} fill="#FF0000" />
          <Bar dataKey={bar3} fill="#40CF14" />
          <Bar dataKey={bar4} fill="#EAFF00" />
          <Bar dataKey={bar5} fill="#FF15FC" />
          <Bar dataKey={bar6} fill="#8CA25F" />






        </BarChart>
      </ResponsiveContainer>
  </div>;
};

export default Barchart;
