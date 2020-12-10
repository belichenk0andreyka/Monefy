import React from "react";
import Chart from "react-google-charts";

import './pieChart.less';

export const PieChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7],
            ]}
            options={{
                title: 'My Daily Activities',
                pieHole: 0.4,
            }}
            rootProps={{ 'data-testid': '3' }}
        />
    );
}

export default PieChart;


// import React from "react";
// import { Doughnut } from "react-chartjs-2";
//
// import './pieChart.less';
//
// export const PieChart = () => {
//     return (
//             <Doughnut
//                 getElementAtEvent={dataset => console.log('getElementAtEvent', dataset)}
//                 data={{
//                     labels: ['January', 'February', 'March', 'April', 'May'],
//                     datasets: [
//                         {
//                             backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
//                             hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
//                             data: [65, 59, 80, 81, 56]
//                         }
//                     ]
//                 }}
//                 options={{
//                     title:{
//                         display:true,
//                         text:'Average Rainfall per month',
//                         fontSize:20
//                     },
//                     legend:{
//                         display:true,
//                         position:'top',
//                     },
//                 }}
//             />
//     );
// }
//
// export default PieChart;
