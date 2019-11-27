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
  executeAction: (tiles, actions, currentX, currentY, inventory = []) => {
    var compiledActions = [];

    if (Array.isArray(actions)) {
      actions.forEach(action => {
        var actionResult = Stage.executeAction(
          tiles,
          action,
          currentX,
          currentY,
          inventory
        );
        currentX = actionResult.x;
        currentY = actionResult.y;
        inventory = actionResult.inventory;

        compiledActions = compiledActions.concat(actionResult.compiled);
      });
    }

    var nextX = currentX;
    var nextY = currentY;

    if (actions.name === 'if') {
      var nextAction;
      if (tiles[currentY].line[currentX] === actions.condition.value) {
        nextAction = actions.actions;
      } else {
        nextAction = actions.elseActions;
      }

      var conditionalResult = Stage.executeAction(
        tiles,
        nextAction,
        currentX,
        currentY,
        inventory
      );
      currentX = conditionalResult.x;
      currentY = conditionalResult.y;
      inventory = conditionalResult.inventory;

      compiledActions = compiledActions.concat(conditionalResult.compiled);
    } else if (actions.name === 'repeat') {
      for (let index = 0; index < actions.value; index++) {
        var iterationResult = Stage.executeAction(
          tiles,
          actions.actions,
          currentX,
          currentY,
          inventory
        );
        currentX = iterationResult.x;
        currentY = iterationResult.y;
        inventory = iterationResult.inventory;

        compiledActions = compiledActions.concat(iterationResult.compiled);
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
    } else if (actions.name === 'store') {
      if (tiles[currentY].line[currentX] === 'key') {
        inventory.push(tiles[currentY].line[currentX]);
        compiledActions.push('GotKey');
      }
    }

    return {
      x: currentX,
      y: currentY,
      compiled: compiledActions,
      inventory: inventory
    };
  }
};
