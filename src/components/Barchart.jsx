import React from 'react'
import { BarChart, Bar, Legend, ResponsiveContainer, Tooltip} from 'recharts'

const data = [
  {
    value: 200,
  },
  {
    value: 130,
  },
  {
    value: 150,
  },
  {
    value: 390,
  },
  {
    value: 480,
  },
  {
    value: 300,
  },
  {
    value: 430,
  },
  {
    value: 200,
  },
  {
    value: 170,
  },
  {
    value: 450,
  },
  {
    value: 160,
  },
  {
    value: 200,
  },
  {
    value: 310,
  },
  {
    value: 400,
  },
  {
    value: 240,
  },
  {
    value: 190,
  },
  {
    value: 290,
  },
  {
    value: 120,
  },
  {
    value: 180,
  },
  {
    value: 370,
  },
  {
    value: 125,
  },
  {
    value: 100,
  },
  {
    value: 230,
  }

];


function Barchart() {
  return (
  <div className='h-[4rem] bg-white rounded-sm flex flex-col'>
    <div className='w-full flex-1'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart 
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom:0
            }}
          >
            <Tooltip />
            <Bar dataKey="value"  fill='#A7C7E7'/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Barchart