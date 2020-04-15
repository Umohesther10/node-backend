const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      name: "Bill Clinton",
      username: "Billy",
      email: "leanneclinton@yahoo.com",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Yaba",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "09087435200",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Esther Umoh",
      username: "kimberly",
      email: "umohesther@gamil.com",
      address: {
        street: "Durumi ",
        suite: "Plot 494",
        city: "F.C.T",
        zipcode: "900241",
        geo: {
          lat: "-37.3156",
          lng: "81.1497",
        },
      },
      phone: "09087435200",
      website: "sizlingkitchen.com",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 3,
      name: "Eno Umoh",
      username: "Gift",
      email: "enoumoh@yahoo.com",
      address: {
        street: "Kabayi",
        suite: "Apt. 56",
        city: "Sagamu",
        zipcode: "100101",
        geo: {
          lat: "-37.3239",
          lng: "81.1478",
        },
      },
      phone: "08068963218",
      website: "calabarkitchen.com",
      company: {
        name: "Calabar Kitchen",
        catchPhrase: "the feeling is in the taste",
      },
    },

    {
      id: 4,
      name: "Helen Antonette",
      username: "Antonette",
      email: "Shanna@melissa@hotmail.com",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Victoria Island",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "0167895100",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 5,
      name: "Eno Umoh",
      username: "Gift",
      email: "enoumoh@yahoo.com",
      address: {
        street: "Kabayi",
        suite: "Apt. 56",
        city: "Sagamu",
        zipcode: "100101",
        geo: {
          lat: "-37.3239",
          lng: "81.1478",
        },
      },
      phone: "08068963218",
      website: "calabarkitchen.com",
      company: {
        name: "Calabar Kitchen",
        catchPhrase: "the feeling is in the taste",
      },
    },

    {
      id: 6,
      name: "Helen Antonette",
      username: "Antonette",
      email: "Shannamelissa@hotmail.com",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Victoria Island",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "0167895100",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },

    {
      id: 7,
      name: "Clementine Wood",
      username: "Samantha",
      email: "Nathan@celestine.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "Banana Island",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramirex.info",
      company: {
        name: "Romarex Construction",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },

    {
      id: 8,
      name: "Patrick Lebose",
      username: "Karianne",
      email: "Juliius.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "Lekki",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 -567",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },

    {
      id: 9,
      name: "Chelsea Liverpool",
      username: "Karen",
      email: "Lucio_Hettinger@annie.za",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Lokogoma",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },

    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "Ikeja",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
  ]);
});

module.exports = router;
