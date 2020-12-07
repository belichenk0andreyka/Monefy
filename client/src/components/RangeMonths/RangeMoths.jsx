import React from 'react';
import { map } from 'lodash';

import { getDateRangeArray } from 'helpers/actionHelper';

import './rangeMonths.less'

const RangeMonths = (props) => {
    const ranges = getDateRangeArray(props.dateRange);
    return (
        <div className='rangeMonth'>
            {map(ranges, date => <div key={date.dateFormat}>{date.dateFormat}</div>)}
        </div>
    )
};

export default RangeMonths;
