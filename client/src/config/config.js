export default {
    register: '/api/register',
    auth: '/api/auth',
    auth_google: '/api/auth/google',
    actions: '/api/actions',
    rangeDate: '/api/actions/rangeDate',
    development: {
        apiPrefix: 'http://localhost:5000',
    },
    production: {
        apiPrefix: 'http://localhost:5000',
    },
};
