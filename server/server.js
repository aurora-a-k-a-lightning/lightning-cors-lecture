const express = require('express');
const app = express();
const cors = require('cors');

const kaclCast = [
    {actor: 'Kelsey Grammer', character: 'Dr. Frasier Crane', role: 'a radio psychiatrist'},
    {
        actor: 'Jane Leeves',
        character: 'Daphne Moon',
        role: 'an English physiotherapist and live-in housekeeper, hired by Frasier to help take care of Martin, who lives with them in Frasier\'s apartment.'
    },
    {
        actor: 'David Hyde Pierce',
        character: 'Dr. Niles Crane',
        role: 'Frasier\'s younger brother, also a psychiatrist, who works in private practice.'
    },
    {
        actor: 'Peri Gilpin',
        character: 'Roz Doyle',
        role: 'producer of Frasier\'s radio show, who becomes a close family friend.'
    },
    {
        actor: 'John Mahoney',
        character: 'Martin Crane',
        role: 'Frasier and Niles\' father, a Seattle police detective who was forced to retire due to a gunshot wound to his hip that led to his living with Frasier.'
    },
    {
        actor: 'Dan Butler',
        character: 'Bob "Bulldog" Briscoe',
        role: 'a male chauvinist, horny, boastful host of a sports radio talk show that followed Frasier\'s daily broadcast at KACL.'
    },
    {actor: 'Kenny Daly', character: 'Noel Shempsky', role: 'KACL\'s station manager'},
    {actor: 'Brian Klugman', character: 'Kirby', role: 'Bob and Lana\'s son, and part-timer at KACL'},
    {actor: 'Ashley Thomas', character: 'Alice Doyle', role: 'Roz\'s daughter'},
    {
        actor: 'Anthony LaPaglia',
        character: 'Simon Moon',
        role: 'one of Daphne\'s brothers. An obnoxious and boorish heavy drinker and layabout.'
    },
    {
        actor: 'Felicity Huffman',
        character: 'Julia Wilcox',
        role: 'the new financial reporter for the KACL'
    },
    {
        actor: 'Richard Pole',
        character: 'Chopper Dave',
        role: 'a Vietnam War veteran who hosts KACL\'s Eye in the Sky traffic reports.'
    }
];

// More examples and documentation here: https://www.npmjs.com/package/cors
// CORS - Enable ALL routes and domains
app.use(cors());

// CORS - configuration
// This is the default CORS configuration:
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }

// const corsOptions = {
//     origin: 'http://localhost:9000', // <- the only domain allowed
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// CORS - configurations with dynamic origins
// TODO: How would you dynamically load in a white-list of domains?
// const whitelist = ['http://localhost:9000', 'http://localhost:9001'];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// };

// CORS - Enable CORS options for all routes
// app.use(cors(corsOptions));

// CORS - Enable a Single Route - all domains
// app.get('/no-cors', function (req, res, next) {
//     res.json({msg: 'This is not a shared resource'});
// });
// app.get('/cast', cors(), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for a Single Route', kaclCast: cast });
// });

// CORS - Enable a Single Route - with configuration
// app.get('/cast', cors(corsOptions), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for a Single Route', kaclCast: cast});
// });

// CORS - NOT ENABLED
app.get('/cast', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route', kaclCast: kaclCast});
});

app.listen(9090, function () {
    console.log(`This is Dr. Frasier Crane. I'm listening with CORS middleware examples on port 9090.`);
});