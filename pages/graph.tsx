import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export interface GraphType {
    Date: string
    Online: number
}
export const GraphData: GraphType[] = [
    { Date: '21.10.22', Online: 300 },
    { Date: '20.10.22', Online: 345 },
    { Date: '19.10.22', Online: 290 },
    { Date: '18.10.22', Online: 310 },
    { Date: '17.10.22', Online: 255 },
    { Date: '16.10.22', Online: 401 },
    { Date: '15.10.22', Online: 344 },
    { Date: '14.10.22', Online: 348 },
    { Date: '13.10.22', Online: 365 },
    { Date: '12.10.22', Online: 370 },
    { Date: '11.10.22', Online: 380 },
    { Date: '10.10.22', Online: 390 },
    { Date: '09.10.22', Online: 280 },
    { Date: '08.10.22', Online: 290 },
    { Date: '07.10.22', Online: 300 }
]
export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top' as const
        },
        title: {
            display: true,
            text: 'Число игроков онлайн',
            color: 'rgb(118, 38, 222)'
        }
    }
}

export default function Graph (): JSX.Element {
    const labels = GraphData.map(item => item.Date)
    const data = {
        labels,
        datasets: [
            {
                label: 'Число игроков онлайн',
                data: GraphData.map(item => item.Online),
                borderColor: 'rgb(189, 31, 207)',
                backgroundColor: 'rgb(187, 149, 191)',
                tension: 0.2,
                pointStyle: 'star',
                pointRadius: 6,
                pointHoverRadius: 10,
                pointHoverBorderColor: 'rgb(222, 38, 84)'
            }
        ]
    }
    return (
        <>
            <div className="mt-10 flex flex-col items-center justify-center">
                <div className="border-2 flex justify-center">
                    <Line className="bg-[#ebabb9]/20 w-[400px] sm:w-[750px]" options={options} data={data}/>
                </div>
            </div>
        </>
    )
}
