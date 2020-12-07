import { isEmpty } from 'lodash';
import moment from 'moment';

import { notificationHelper } from "./notifications";

export const validateAction = (category, price) => {
    const obj = { validPrice: true, validCategory: true };
    if (price && price < 0) {
        notificationHelper(
            'Error',
            'Enter the valid amount of money',
            'error'
        );
        obj.validPrice = false;
    }
    if (!price) {
        notificationHelper(
            'Error',
            'Enter the amount of money',
            'error'
        );
        obj.validPrice = false;
    }
    if (!category) {
        notificationHelper(
            'Error',
            'You need to choose category',
            'error'
        );
        obj.validCategory = false;
    }
    return obj;
};

export const getDateRangeArray = (rangeDate) => {
    if (!isEmpty(rangeDate)) {
        let minDate;
        let maxDate;
        const minRangeMonth = moment(rangeDate.minDate).month() + 1;
        const minRangeYear = moment(rangeDate.minDate).year();
        const maxRangeYear = moment(rangeDate.maxDate).year();
        if (minRangeYear !== maxRangeYear) {
            minDate = moment(`01-01-${maxRangeYear}`);
            maxDate = moment(rangeDate.maxDate).set('date', moment(rangeDate.maxDate).daysInMonth());
        } else if (minRangeYear === maxRangeYear) {
            minDate = moment(`01-${minRangeMonth}-${minRangeYear}`);
            maxDate = moment(rangeDate.maxDate).set('date', moment(rangeDate.maxDate).daysInMonth());
        }
        const months = [];
        while (minDate.isSameOrBefore(maxDate)) {
            months.push({
                date: minDate,
                dateFormat: minDate.format('MMMM'),
            });
            minDate.add(1, 'months');
        }
        return months;
    } else {
        return [];
    }
};
