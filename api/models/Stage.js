/**
 * Stage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

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

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
  // retrieves a random record from the database
  random: async difficulty => {
    var num = await Stage.count({ difficulty: difficulty });

    var randm = Math.floor(Math.random() * num);

    if (randm < 0) {
      randm = 0;
    }

    var stage = await Stage.find({
      where: { difficulty: difficulty },
      skip: randm,
      limit: 1
    });

    return stage[0];
  },
  executeAction: (tiles, actions, currentX, currentY) => {
    var compiledActions = [];

    if (Array.isArray(actions)) {
      actions.forEach(action => {
        var childResult = Stage.executeAction(
          tiles,
          action,
          currentX,
          currentY
        );
        currentX = childResult.x;
        currentY = childResult.y;

        compiledActions.push(childResult.compiled);
      });
    }

    var nextX = currentX;
    var nextY = currentY;

    if (actions.name === 'walk') {
      switch (actions.value) {
        case 'right':
          nextX++;
          break;
        case 'left':
          nextX--;
          break;
        case 'up':
          nextY--;
          break;
        case 'down':
          nextY++;
          break;
        default:
          compiledActions.push('InvalidWalk');
          break;
      }
      if (!tiles[nextX].line[nextY]) {
        compiledActions.push('OutOfBounds');
      } else if (tiles[nextX].line[nextY] === 'wall') {
        compiledActions.push('Wall');
      } else {
        compiledActions.push(`move(${actions.value})`);
        currentX = nextX;
        currentY = nextY;
      }
    }

    return {
      x: currentX,
      y: currentY,
      compiled: compiledActions
    };
  }
};
