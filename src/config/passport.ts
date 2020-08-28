import {Strategy as GoogleStrategy} from 'passport-google-oauth20';

export default (passport: any) => {
    // Strategy config
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID || 'your google clientID',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your google client secret',
            callbackURL: process.env.GOOGLE_CALLBACK_URL || 'callback url'
        },
        (accessToken, refreshToken, profile, done) => {
            done(undefined, profile); // passes the profile data to serializeUser
        }
    ));

    // Used to stuff a piece of information into a cookie
    passport.serializeUser((user: any, done: (arg0: undefined, arg1: any) => void) => {
        done(undefined, user);
    });

// Used to decode the received cookie and persist session
    passport.deserializeUser((user: any, done: (arg0: undefined, arg1: any) => void) => {
        done(undefined, user);
    });
}
