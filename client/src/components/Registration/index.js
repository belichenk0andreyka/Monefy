import { connect } from 'react-redux'

import Registration from 'components/Registration/Registration';

const mapStateToProps = (state) => ({
    propState: state,
});

export default connect(mapStateToProps)(Registration);
