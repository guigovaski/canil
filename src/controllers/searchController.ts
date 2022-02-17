import { Request, Response } from 'express';

import { Pet } from '../models/Pet';

import { activeMenu } from '../helpers/activeMenu';

export const search = (req: Request, res: Response) => {
    const query: string = req.query.q as string;

    if (!query) {
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);
    
    res.render('pages/page', {
        menu:  activeMenu(''),
        list,
        query
    });
}