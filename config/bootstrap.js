/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  //Create Maps by default 1

  await Stage.create({
    "name": "Java",
	  "level": 1,
	  "difficulty": "easy",
	  "tiles":[
        {
          "lines":[
            ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
            ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
            ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
            ["free", "free", "start", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
            ["free", "free", "free", "free", "free", "free", "free", "free", "door", "wall"],
            ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "finish", "wall"],
            ["free", "free", "free", "free", "key", "free", "free", "free", "wall", "wall"]
          ] 
        },
    ]
  });

  await Stage.create({
    "name": "PHP",
	  "level": 2,
	  "difficulty": "easy",
	  "tiles":[
        {
        "lines": [
          ["free", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"],
          ["free", "start", "free", "free", "free", "wall", "wall", "wall", "free", "free"],
          ["free", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"],
          ["free", "free", "free", "wall", "free", "free", "free", "key", "free", "free"],
          ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
          ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"],
          ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "wall", "wall"],
          ["free", "wall", "wall", "wall", "door", "free", "free", "free", "free", "free"],
          ["free", "wall", "free", "wall", "finish", "wall", "free", "wall", "free", "wall"],
          ["free", "free", "free", "wall", "wall", "free", "free", "free", "free", "free"]
        ]
      },
    ]
  });

  await Stage.create({
    "name": "Ruby",
	  "level": 3,
	  "difficulty": "normal",
	  "tiles":[
        {
        "lines":[
          ["free", "wall", "free", "wall", "free", "wall", "free", "start", "free", "wall"],
          ["free", "free", "free", "free", "free", "wall", "wall", "wall", "free", "free"],
          ["wall", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"],
          ["free", "free", "free", "wall", "free", "free", "free", "free", "free", "free"],
          ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
          ["wall", "free", "door", "free", "free", "wall", "free", "free", "free", "free"],
          ["free", "wall", "finish", "wall", "free", "wall", "free", "wall", "wall", "wall"],
          ["free", "wall", "wall", "wall", "free", "free", "free", "free", "free", "free"],
          ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
          ["free", "free", "free", "free", "free", "free", "key", "free", "free", "free"]
        ] 
      },
    ]
  });

  await Stage.create({
    "name": "Javascript",
	  "level": 4,
	  "difficulty": "hard",
	  "tiles":[
        {
        "lines":[
          ["start", "wall", "free", "wall", "wall", "door", "free", "free", "free", "wall"],
          ["free", "free", "free", "free", "wall", "finish", "wall", "wall", "free", "free"],
          ["wall", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"],
          ["free", "free", "free", "wall", "free", "free", "free", "wall", "free", "free"],
          ["free", "wall", "wall", "wall", "free", "wall", "free", "wall", "free", "wall"],
          ["free", "free", "free", "free", "free", "wall", "free", "free", "free", "free"],
          ["wall", "wall", "free", "wall", "free", "wall", "free", "wall", "wall", "wall"],
          ["free", "wall", "free", "wall", "free", "free", "free", "free", "free", "free"],
          ["free", "free", "free", "wall", "free", "wall", "free", "wall", "free", "wall"],
          ["free", "wall", "free", "free", "free", "wall", "free", "free", "key", "free"]
        ] 
      },
    ]
  });



};
