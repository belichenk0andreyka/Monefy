import { connect } from 'react-redux';

import RangeMonths from "./RangeMoths";
import { getDateRange } from 'store/seletors/actionSelectors';

const mapStateToProps = (state) => ({
    dateRange: getDateRange(state),
});

export default connect(mapStateToProps)(RangeMonths);
