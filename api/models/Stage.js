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
        var actionResult = Stage.executeAction(
          tiles,
          action,
          currentX,
          currentY
        );
        currentX = actionResult.x;
        currentY = actionResult.y;

        compiledActions = compiledActions.concat(actionResult.compiled);
      });
    }

    var nextX = currentX;
    var nextY = currentY;

    if (actions.name === 'if') {
      if (tiles[currentY].line[currentX] === actions.condition.value) {
        var ifActionResult = Stage.executeAction(
          tiles,
          actions.actions,
          currentX,
          currentY
        );
        currentX = ifActionResult.x;
        currentY = ifActionResult.y;

        compiledActions = compiledActions.concat(ifActionResult.compiled);
      } else {
        var elseActionResult = Stage.executeAction(
          tiles,
          actions.elseActions,
          currentX,
          currentY
        );
        currentX = elseActionResult.x;
        currentY = elseActionResult.y;

        compiledActions = compiledActions.concat(elseActionResult.compiled);
      }
    } else if (actions.name === 'walk') {
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
      if (!tiles[nextY].line[nextX]) {
        compiledActions.push('OutOfBounds');
      } else if (tiles[nextY].line[nextX] === 'wall') {
        compiledActions.push('Wall');
      } else {
        compiledActions.push(`move(${actions.value})`);
        currentX = nextX;
        currentY = nextY;
        if (tiles[currentY].line[currentX] === 'finish') {
          compiledActions.push('Goal');
        }
      }
    } else if (actions.name === 'repeat') {
      for (let index = 0; index < actions.value; index++) {
        var iterationResult = Stage.executeAction(
          tiles,
          actions.actions,
          currentX,
          currentY
        );
        currentX = iterationResult.x;
        currentY = iterationResult.y;

        compiledActions = compiledActions.concat(iterationResult.compiled);
      }
    }

    return {
      x: currentX,
      y: currentY,
      compiled: compiledActions
    };
  }
};
