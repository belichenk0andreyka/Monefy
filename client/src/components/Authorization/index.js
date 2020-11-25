import { connect } from 'react-redux'

import Authorization from 'components/Authorization/Authorization';

const mapStateToProps = (state) => ({
    propState: state,
});

export default connect(mapStateToProps)(Authorization);
