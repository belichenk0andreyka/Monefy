import { connect } from 'react-redux'

import { getNotification } from 'store/seletors/uiSelectors';

import Layout from 'components/Layout/Layout';

const mapStateToProps = (state) => ({
    notification: getNotification(state),
});

export default connect(mapStateToProps)(Layout);
