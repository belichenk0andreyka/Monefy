import { connect } from 'react-redux'

import Authorization from 'components/Authorization/Authorization';
import { authUser, authUserGoogle } from 'store/actions/authActions';

const mapStateToProps = (state) => ({
    propState: state,
});

const mapDispatchToProps = (dispatch) => ({
    authUser: payload => dispatch(authUser(payload)),
    authUserGoogle: payload => dispatch(authUserGoogle(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
