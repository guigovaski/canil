import { Request, Response } from 'express';

import { activeMenu } from '../helpers/activeMenu';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    
    res.render('pages/page', {
        menu: activeMenu('all'),
        
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: activeMenu('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    
    res.render('pages/page', {
        menu: activeMenu('cat'),
        pet: {
            all: Pet.getAll(),
            type: Pet.getFromType('cat'),
        },
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    
    res.render('pages/page', {
        menu: activeMenu('fish'),
        pet: {
            all: Pet.getAll(),
            type: Pet.getFromType('fish'),
        },
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}