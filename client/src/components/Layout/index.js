import { connect } from 'react-redux'

import Layout from 'components/Layout/Layout';

const mapStateToProps = (state) => ({
    propState: state,
});

export default connect(mapStateToProps)(Layout);
