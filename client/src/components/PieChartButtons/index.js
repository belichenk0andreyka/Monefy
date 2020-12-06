import { connect } from 'react-redux';

import PieChartButtons from "./PieChartButtons";
import { MODAL_TYPES } from 'constants/constants';
import { getActions } from 'store/actions/buySellActions';
import { openModal } from 'store/actions/uiActions';

const mapDispatchToProps = (dispatch) => ({
    getActions: payload => dispatch(getActions(payload)),
    openModal: payload => dispatch(openModal({ type: MODAL_TYPES.ACTION_MODAL_CREATE, info: { type: payload }}))
});

export default connect(null, mapDispatchToProps)(PieChartButtons);
