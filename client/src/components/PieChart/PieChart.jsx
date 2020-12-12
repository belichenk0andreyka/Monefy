import React from "react";
import Chart from "react-google-charts";

import { getChartData } from 'helpers/pieHelper';

import './pieChart.less';

export const PieChart = ({ actionsData }) => {
    const [chartData, setChartData] = React.useState([]);
    React.useEffect(() => {
        setChartData(getChartData(actionsData.chartData));
    }, [actionsData]);
    return (
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
                title: 'My Daily Activities',
                pieHole: 0.4,
            }}
            rootProps={{ 'data-testid': '3' }}
        />
    );
}

export default PieChart;
