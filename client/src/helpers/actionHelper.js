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
