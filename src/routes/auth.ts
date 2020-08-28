import express, {Request, Response} from 'express';

import {isAuthenticated, googleAuthScope, googleAuth, logout} from '../controller/authController';

const router = express.Router();

// passport.authenticate middleware is used here to authenticate the request
router.get('/google', googleAuthScope);

// The middleware receives the data from Google and runs the function on Strategy config
router.get('/google/redirect', googleAuth, (req: Request, res: Response) => {
    res.redirect('/auth/check');
})

router.get('/check', isAuthenticated, (req: Request, res: Response) => {
    res.send(req.user);
});

// Logout route
router.get('/logout', logout);

export default router;