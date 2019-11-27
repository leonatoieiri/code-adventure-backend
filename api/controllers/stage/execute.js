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
    var lines = stage.tiles[0].lines;
    lines.forEach((line, x) => {
      line.forEach((tile, y) => {
        if (tile === 'start') {
          startX = x;
          startY = y;
        }
      });
    });
    var compiledActions = Stage.executeAction(
      lines,
      inputs.actions,
      startY,
      startX
    );

    return exits.success(compiledActions);
  }
};
