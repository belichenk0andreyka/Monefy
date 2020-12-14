import React from "react";
import Chart from "react-google-charts";

import { getChartData } from 'helpers/pieHelper';
import { parseNumber } from 'helpers/actionHelper';

import './pieChart.less';

export const PieChart = ({ actionsData, financeData, openModal }) => {
    const [chartData, setChartData] = React.useState([]);
    React.useEffect(() => {
        setChartData(getChartData(actionsData.chartData));
    }, [actionsData]);
    return (
        <div className='chart-wrapper'>
            <Chart
                width={'95%'}
                height={'95%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={chartData}
                className='chart'
                chartEvents={[
                    {
                        eventName: "ready",
                        callback: ({ chartWrapper, google }) => {
                            const chart = chartWrapper.getChart();
                            google.visualization.events.addListener(chart, "click", e => {
                                if (e.targetID.match(/\d+/g)) {
                                    const categoriesArray = Object.keys(actionsData.chartData);
                                    openModal(categoriesArray[e.targetID.match(/\d+/g)[0]]);
                                }
                            });
                        }
                    }
                ]}
                options={{
                    title: 'My Daily Activities',
                    pieHole: 0.4,
                }}
                // style={{zIndex: '2'}}
                rootProps={{ 'data-testid': '3' }}
            />
            <div className='finance-date'>
                <div className='finance-date__income'>{parseNumber(financeData.profit)}</div>
                <div className='finance-date__expense'>{parseNumber(financeData.consumption)}</div>
            </div>
        </div>
    );
}

export default PieChart;
