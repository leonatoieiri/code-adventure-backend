module.exports = {
  friendlyName: 'Create',

  description: 'Create stage.',

  inputs: {
    name: {
      type: 'string',
      required: true
    },
    level: {
      type: 'number'
    },
    difficulty: {
      type: 'string'
    },
    tiles: {
      type: 'json'
    }
  },

  exits: {
    invalidStage: {
      description: 'Invalid stage',
      responseType: 'badRequest'
    }
  },

  fn: async function(inputs, exits) {
    try {
      var newStage = await Stage.create(inputs).fetch();

      return exits.success({
        id: newStage.id
      });
    } catch (error) {
      return exits.invalidUser({
        error: true,
        message: error
      });
    }
  }
};
