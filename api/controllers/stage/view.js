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
      id: inputs.id
    });

    return exits.success(stage);
  }
};
