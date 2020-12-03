import React from 'react';

import './pieChartButtons.less'

const PieChartButtons = () => {
    return (
        <div className='pieChartButtons-wrapper'>
            <div className='pieChartButtons-remove'>
                <span>&ndash;</span>
            </div>
            <div className='pieChartButtons-add'>
                <span>+</span>
            </div>
        </div>
    );
};

export default PieChartButtons;
