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
    "name": "Primeiro Mapa",
	  "level": 1,
	  "difficulty": "easy",
	  "tiles":[
        {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
          {
        "line": ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"]
      },
          {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "free", "start", "free", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "finish", "wall"]
      },
      {
        "line": ["free", "free", "free", "free", "chest", "free", "free", "free", "free", "free"]
      }
    ]
  });

  await Stage.create({
    "name": "Primeiro Mapa",
	  "level": 2,
	  "difficulty": "easy",
	  "tiles":[
        {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"]
      },
          {
        "line": ["free", "start", "free", "free", "free", "wall", "wall", "wall", "free", "free"]
      },
          {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "wall", "free", "free", "free", "chest", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "wall", "wall"]
      },
      {
        "line": ["free", "wall", "wall", "wall", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "finish", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "free", "free", "free", "free", "free", "free", "free"]
      }
    ]
  });

  await Stage.create({
    "name": "Primeiro Mapa",
	  "level": 3,
	  "difficulty": "normal",
	  "tiles":[
        {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "start", "free", "wall"]
      },
          {
        "line": ["free", "free", "free", "free", "free", "wall", "wall", "wall", "free", "free"]
      },
          {
        "line": ["wall", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "wall", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["wall", "free", "free", "free", "free", "wall", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "finish", "wall", "free", "wall", "free", "wall", "wall", "wall"]
      },
      {
        "line": ["free", "wall", "wall", "wall", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "free", "free", "free", "chest", "free", "free", "free"]
      }
    ]
  });

  await Stage.create({
    "name": "Primeiro Mapa",
	  "level": 4,
	  "difficulty": "hard",
	  "tiles":[
        {
        "line": ["start", "wall", "free", "wall", "free", "free", "free", "free", "free", "wall"]
      },
          {
        "line": ["free", "free", "free", "free", "free", "finish", "wall", "wall", "free", "free"]
      },
          {
        "line": ["wall", "wall", "free", "wall", "free", "wall", "free", "free", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "wall", "free", "free", "free", "wall", "free", "free"]
      },
      {
        "line": ["free", "wall", "wall", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "free", "free", "free", "free", "wall", "free", "free", "free", "free"]
      },
      {
        "line": ["wall", "wall", "free", "wall", "free", "wall", "free", "wall", "wall", "wall"]
      },
      {
        "line": ["free", "wall", "free", "wall", "free", "free", "free", "free", "free", "free"]
      },
      {
        "line": ["free", "free", "free", "wall", "free", "wall", "free", "wall", "free", "wall"]
      },
      {
        "line": ["free", "wall", "free", "free", "free", "wall", "free", "free", "chest", "free"]
      }
    ]
  });



};
