'use strict';

exports.__esModule = true;
exports['default'] = func;
var SYMBOL = exports.SYMBOL = '=';

function func(exp1, exp2) {
  return exp1 === exp2 ? 1 : 0;
}

func.SYMBOL = SYMBOL;