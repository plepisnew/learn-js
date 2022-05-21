const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        'Johnny Depp',
        'Willy Wonka',
        'Ruby',
        'Scream',
        'Phantom',
        'Ghost',
        'BabyPlum',
        'Bean',
        'Fallen',
        'Swagger',
        'Kekler',
        'Miner',
        'Carl',
        'Egeous',
        'JASON',
        'Lord of Scars',
        'Hououin',
        'Amber',
        'Jeff',
        'Omen',
        'Bam',
        'Oscar',
        'Rubik',
        'Farfa',
        'Isaac',
        'Dainonium',
        'Leibniz',
        'Euler',
        'Newton',
        'Genghis',
        'Bunbuku',
        'Atlas',
        'Christian',
        'Pride',
        'Michael',
        'Jaden',
        'Sophie',
        'Alfie',
        'Gageh',
    ]);
});

module.exports = router;