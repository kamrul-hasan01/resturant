import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Page A',

        Sell: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',

        Sell: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',

        Sell: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',

        Sell: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',

        Sell: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',

        Sell: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',

        Sell: 4300,
        amt: 2100,
    },
];
export default function Chart() {

    return (

        <div className="d-flex justify-content-center m-5">


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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sell" fill="#8884d8" />

            </BarChart>
        </div>

    );
}
