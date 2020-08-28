import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';

import envConfig from './config/environment';
const FILE_PATH = '../../config.env';
envConfig(FILE_PATH);

import googleStrategy from './config/passport';

import authRoute from './routes/auth';

const app = express();
const PORT = process.env.PORT || 3000

// cookieSession config
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['12345678910']
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

googleStrategy(passport);

app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log('Server Started!');
});
