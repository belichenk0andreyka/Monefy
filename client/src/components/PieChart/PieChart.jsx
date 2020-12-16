import React from 'react';
import Chart from 'react-google-charts';
import { Tooltip } from 'antd';

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
            {chartData.length === 1
                ? <div className='empty-chart-wrapper'>
                    <img src="src/assets/empty-donut-chart.png" />
                    <div className='empty-donat-text'>No data</div>
                </div>
                : <Chart
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
                        title: 'My month expenses',
                        pieHole: 0.4,
                    }}
                    // style={{zIndex: '2'}}
                    rootProps={{ 'data-testid': '3' }}
                />
            }
            {!!(financeData.consumption) && (
                <div className='finance-date'>
                    <Tooltip placement="right" color='#3F80C5' title={'Income'}>
                        <div className='finance-date__income'>{parseNumber(financeData.profit)}</div>
                    </Tooltip>
                    <Tooltip placement="right" color='#C57B7F' title={'Consumption'}>
                        <div className='finance-date__expense'>{parseNumber(financeData.consumption)}</div>
                    </Tooltip>
                    <Tooltip placement="right" color='#7AC795' title={'Balance'}>
                        <div className='finance-date__balance'>{parseNumber(financeData.profit - financeData.consumption)}</div>
                    </Tooltip>
                </div>
            )}
        </div>
    );
}

export default PieChart;
