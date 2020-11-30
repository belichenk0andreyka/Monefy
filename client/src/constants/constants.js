export const validateRegistrationSignIn = {
    email: /^(([a-zA-Z0-9#!$%&'*+\-\/=?^_`{}|~]+(\.[a-zA-Z0-9#!$%&'*+\-\/=?^_`{}|~]+)*)|("[^"]*"))@([a-zA-Z0-9]{1,15})(\.([a-zA-Z0-9]{1,15}))*(\.([a-zA-Z0-9]{1,12})){1,100}$/,
    password: /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}/,
    username: /^[A-Za-z]+$/,
}
