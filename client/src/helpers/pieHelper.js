import { map, capitalize } from 'lodash';

export const getChartData = (chartData) => [
    ['consumption', 'Money for category'],
    ...map(chartData, (value, key) => [capitalize(key), value])
];
