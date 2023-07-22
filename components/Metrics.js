'use client';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);



const Metrics = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#35cb55', '#e0f23e', '#ea0537'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        tooltips: {
            callbacks: {
                label: (tooltipItem, data) => {
                    const dataset = data.datasets[tooltipItem.datasetIndex];
                    const total = dataset.data.reduce((acc, current) => acc + current, 0);
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = ((currentValue / total) * 100).toFixed(2);
                    return `${dataset.label}: ${currentValue} (${percentage}%)`;
                },
            },
        },
    };

    return (
        <div className='flex justify-center items-center '>
            <div className='flex justify-center items-center space-x-4 w-1/2'>
                <div className='flex justify-start items-center  space-x-2'>
                    <div className='bg-[#35cb55] w-5 h-5 ' />
                    <h1>Positive</h1>
                </div>
                <div className='flex justify-center items-center  space-x-2'>
                    <div className='bg-[#e0f23e] w-5 h-5 ' />
                    <h1>Moderate</h1>
                </div>
                <div className='flex justify-center items-center  space-x-2'>
                    <div className='bg-[#ea0537] w-5 h-5 ' />
                    <h1>Negative</h1>
                </div>
            </div>
            <div className='w-1/2'>
                <Pie data={data} options={options} />
            </div>

        </div>
    );
};

export default Metrics;
