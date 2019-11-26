module.exports = {
  friendlyName: 'Random',

  description: 'Random stage.',

  inputs: {
    difficulty: {
      type: 'string',
      required: true
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    var stage = await Stage.random(inputs.difficulty);

    return exits.success(stage);
  }
};
