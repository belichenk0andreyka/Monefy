import React from 'react';

import PieChart from 'components/PieChart';
import RangeMonths from 'components/RangeMonths';
import PieChartButtons from 'components/PieChartButtons';

import './centralPart.less';

const CentralPart = () => {
    return (
        <div className='centralPart'>
            <RangeMonths />
            <PieChart />
            <PieChartButtons />
        </div>
    );
}

export default CentralPart;
