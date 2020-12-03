import React from 'react';

import PieChart from 'components/PieChart';
import PieChartButtons from 'components/PieChartButtons';

import './centralPart.less';

const CentralPart = () => {
    return (
        <div className='centralPart'>
            <PieChart />
            <PieChartButtons />
        </div>
    );
}

export default CentralPart;
