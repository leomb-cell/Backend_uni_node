import {Router} from 'express';

const router = Router()

router.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'João'},
        {id: 2, name: 'Maria'},
    ]);
} );

router.get('/:id', (req, res) => {
    const {id} = req.params;

    res.json({
        id: Number(id),
        name: 'João'
    });
});

export default router;