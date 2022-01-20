import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const Linechart=({data,xaxis,line,min,max})=> {
  
    return (
        <div>
           <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart
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
                    <ReferenceLine y={min}  stroke="red"  />
                    <ReferenceLine y={max}  stroke="green"  />
                    <Line type="monotone" dataKey={line} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                   
        </div>
    )
}

export default Linechart;