module.exports = {
  friendlyName: 'View',

  description: 'View stage.',

  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    var stage = await Stage.findOne({
      level: inputs.id
    });

    return exits.success(stage);
  }
};
