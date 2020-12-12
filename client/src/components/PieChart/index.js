import { connect } from 'react-redux';

import { getActionsData } from 'store/seletors/actionSelectors';
import PieChart from './PieChart';

const mapStateToProps = (state) => ({
    actionsData: getActionsData(state)
});

export default connect(mapStateToProps)(PieChart);
