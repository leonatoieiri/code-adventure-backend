module.exports = {
  friendlyName: 'Execute',

  description: 'Execute stage.',

  inputs: {
    id: {
      type: 'number',
      required: true
    },
    actions: {
      type: 'json',
      required: true
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    var stage = await Stage.findOne({
      id: inputs.id
    });
    var startX = 0;
    var startY = 0;
    stage.tiles.forEach((line, x) => {
      line.line.forEach((tile, y) => {
        if (tile === 'start') {
          startX = x;
          startY = y;
        }
      });
    });
    var compiledActions = Stage.executeAction(
      stage.tiles,
      inputs.actions,
      startX,
      startY
    );

    return exits.success(compiledActions);
  }
};
