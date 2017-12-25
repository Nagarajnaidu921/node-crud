const config = {
    db: {
        uri: 'mongodb://localhost/testdb'
    },

    // JWT Secret
    jwt: {
        secret: (process.env.JWT_SECRET || 'test-jwt-secret'),
        tokenExpireTime: (60 * 60 * 1) // 1 day
    },

    nodemailer: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'nagarajnaidu921@gmail.com',
            pass: '129itsmenagaraj...921'
        }
    },
    //FACEBOOK
    facebook: {
        clientID: '911424859005954',
        clientSecret: '9e06933f1fc73da06597065cebf61906',
        callbackURL: "http://localhost:3000/auth/facebook/signin",
        profileFields: ['id', 'displayName', 'gender', 'email' ]
    },
    //google
    google: {
        clientID: '453874177864-nttsd48vs8ipfa51lstja5tj5iaag92n.apps.googleusercontent.com ',
        clientSecret: 'wtzF0k85h7lePSZgjuvxvZII',
        callbackURL: "http://localhost:3000/auth/google/signin",
        profileFields: ['id', 'displayName', 'gender', 'email' ]
    },
    // NODE ENV VARIABLES

    PORT: process.env.PORT || 3000

};

module.exports = config;