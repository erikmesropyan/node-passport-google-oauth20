import {Request, Response, NextFunction} from 'express';
import passport from 'passport';


export const googleAuth = passport.authenticate('google');

export const googleAuthScope = passport.authenticate('google', {scope: ['profile', 'email']});

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.send('You must login!');
    }
}

export const logout = (req: Request, res: Response, next: NextFunction) => {
    req.logout();
    res.send('you are logged out');
}
